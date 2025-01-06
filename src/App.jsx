import { useState } from 'react'

import './App.css'
import  EthWallet from './components/EthWallet'
import  SolWallet  from './components/SolWallet'
// import GenMnemonics from './components/GenMnemonics'
import { generateMnemonic } from 'bip39'



function App() {
  const [mnemonics,setMnemonics]=useState()
 

  return (
  <>
  <input type='text' value={mnemonics}></input>
  <button onClick={
    async function(){
    let mn=generateMnemonic()
    setMnemonics(mn)
  }}>Create seed phrase</button>

  {mnemonics && <SolWallet mnemonics={mnemonics}/>}
  {mnemonics && <EthWallet mnemonics={mnemonics}/>}

  </>
  )
}

export default App
