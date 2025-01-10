import { Keypair } from '@solana/web3.js'
import { derivePath } from 'ed25519-hd-key'
import { mnemonicToSeed } from 'bip39'
import React, { useState } from 'react'
import Button from './ui/Button'
import WalletComponent from './ui/WalletComponent'

function SolWallet({ mnemonics }) {
    const [currIndex, setCurrIndex] = useState(0)
    const [walletList, setWalletList] = useState([])
    const [isGenerating, setIsGenerating] = useState(false)

    const addSolW = async () => {
        setIsGenerating(true)
        try {
            const seed = await mnemonicToSeed(mnemonics)
            const derivationPath = `m/44'/501'/${currIndex}'/0'`
            const derivedSeed = derivePath(derivationPath, Buffer.from(seed)).key
            const keypair = Keypair.fromSeed(derivedSeed)
            
            // Add wallet with visible: false initially
            setWalletList([...walletList, {
                wallet: keypair,
                visible: false
            }])
            
            // Set visible to true after a brief delay
            setTimeout(() => {
                setWalletList(prev => prev.map((item, i) => 
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
                    onClick={addSolW}
                    text={isGenerating ? "Generating..." : "Add SOL Wallet"}
                    width='96px'
                    disabled={isGenerating}
                    className={`transition-all duration-300 ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
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
                            pu={item.wallet.publicKey.toString()}
                            pr={Buffer.from(item.wallet.secretKey).toString('hex')}
                            className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SolWallet