import React from 'react'
import {useState} from 'react'
import EthWallet from './EthWallet'
import  SolWallet  from './SolWallet'
import { generateMnemonic } from 'bip39'
import Button from './ui/Button'

const GenMnemonics = ({walletType}) => {
  const [mnemonics,setMnemonics]=useState()

  return (
    <>
    <div className='flex flex-col'>
    {/* <input type='text' value={mnemonics}></input> */}
  <Button text="Generate Seed Phrase" onClick={
    async function(){
    let mn=generateMnemonic()
    setMnemonics(mn)
  }}/>
  <br/>
  {mnemonics}
  {walletType === 'Ethereum' ? <EthWallet /> : 
        walletType === 'Solana' ? <SolWallet /> : null}

    </div>
  


    </>
  )
}

export default GenMnemonics
