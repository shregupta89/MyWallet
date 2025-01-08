import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { Wallet, HDNodeWallet } from 'ethers'
import React, { useState, useEffect } from 'react'
import Button from './ui/Button'
import WalletComponent from './ui/WalletComponent'

function EthWallet({mnemonics}) {
    const [currIndex, setCurrIndex] = useState(0)
    const [walletList, setwalletList] = useState([])
    const [isGenerating, setIsGenerating] = useState(false)
    
    let addEthW = async () => {
        setIsGenerating(true)
        try {
            const seed = await mnemonicToSeed(mnemonics)
            const derivationPath = `m/44'/60'/${currIndex}'/0'`
            const hdNode = HDNodeWallet.fromSeed(seed)
            const child = hdNode.derivePath(derivationPath)
            const privateKey = child.privateKey
            const newWallet = new Wallet(privateKey)
            
            // Add wallet with visible: false initially
            setwalletList([...walletList, {
                wallet: newWallet,
                visible: false
            }])
            
            // Set visible to true after a brief delay
            setTimeout(() => {
                setwalletList(prev => prev.map((item, i) => 
                    i === prev.length - 1 ? { ...item, visible: true } : item
                ))
            }, 100)
            
            setCurrIndex(currIndex + 1)
        } catch (error) {
            console.error("Error generating wallet:", error)
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex justify-end mb-4">
                <Button 
                    onClick={addEthW}
                    text={isGenerating ? "Generating..." : "Add ETH Wallet"}
                    width='96px'
                    disabled={isGenerating}
                    className={`transition-all duration-300 ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                {walletList?.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            transform transition-all duration-500 ease-out
                            ${item.visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                        `}
                    >
                        <WalletComponent
                            index={index}
                            pu={item.wallet.address}
                            pr={item.wallet.privateKey}
                            className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EthWallet