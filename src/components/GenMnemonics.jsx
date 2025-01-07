import React, { useState } from "react";
import EthWallet from "./EthWallet";
import SolWallet from "./SolWallet";
import { generateMnemonic } from "bip39";
import Button from "./ui/Button";
import OneSeed from "./ui/oneSeed";

const GenMnemonics = ({ walletType }) => {
  const [mnemonics, setMnemonics] = useState();
  const [isButtonVis, setButtonVis] = useState(true);

  const buttonVis = () => {
    setButtonVis(false); // Hide the button
  };

  const generateMnemonicAndHideButton = async () => {
    let mn = generateMnemonic(); 
    setMnemonics(mn); 
    buttonVis(); //can call 2 funcitons at a time in react
  };

  return (
    <>
      <div className="flex flex-col items-center m-8">
        <div className="flex gap-32 items-center">
          <div>
            <div className="font-bold text-5xl">Secret Seed Phrase</div>
            <span className="font-thin">Don't share this seed phrase with anyone.</span>
          </div>
          {isButtonVis && (
            <Button
              width="148px"
              text="Generate Mnemonic"
              onClick={generateMnemonicAndHideButton}
            />
          )}
        </div>

        <div
          className={`grid grid-cols-3 md:grid-cols-4 gap-4 m-4 p-4 transition-all duration-500 ease-in-out rounded ${
            mnemonics ? "border border-slate-400/20 dark:border-blue-100/20" : ""
          }`}
        >
          {mnemonics?.split(" ").map((s, index) => (
            <OneSeed key={index} seedText={s} />
          ))}
        </div>

        {walletType === "Ethereum" &&!isButtonVis? (
          <EthWallet />
        ) : walletType === "Solana" &&!isButtonVis ? (
          <SolWallet />
        ) : null}
      </div>
    </>
  );
};

export default GenMnemonics;
