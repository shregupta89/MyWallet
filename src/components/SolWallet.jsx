import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"
import GenMnemonics from "./GenMnemonics";
import Button from "./ui/Button";

 function SolWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    function addSol() {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        console.log(derivedSeed)
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);
    }

    return <div>
         
        <Button 
        width='96px'
        text="Add Sol Wallet"
        onClick={addSol}
        />
            
      
        {publicKeys.map(p => <div>
            {p.toBase58()}
        </div>)}
    </div>
}
export default SolWallet