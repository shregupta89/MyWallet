import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { Wallet,HDNodeWallet } from 'ethers'
import React from 'react'
import { useState } from 'react'
import Button from './ui/Button'
import GenMnemonics from './GenMnemonics'

function EthWallet({mnemonics}) {
    const [currIndex,setCurrIndex]=useState(0)
    const [addresses,setAddresses]=useState([])

    
    let addEthW=async ()=>{
        const seed=await mnemonicToSeed(mnemonics)
        console.log("seed:",seed)
        const derivationPath= `m/44'/60'/${currIndex}'/0'`
        console.log("derivationPath:",derivationPath)
        const hdNode=HDNodeWallet.fromSeed(seed)
        console.log("hdnode:",hdNode)
        const child=hdNode.derivePath(derivationPath)
        console.log("child:",child)
        const privateKey=child.privateKey;
        console.log("privateKey:",child)
        const wallet=new Wallet(privateKey)
        console.log(wallet)
        setCurrIndex(currIndex+1)
        setAddresses([...addresses,wallet.address])
    }
  return (
    <div>
       
        <Button onClick={addEthW}
        text="Add ETH Wallet"
        width='96px'/>
       
        {addresses.map((p,index) =>(
            <div key={index}>{p}</div>
        ))}

      
    </div>
  )
}


export default EthWallet