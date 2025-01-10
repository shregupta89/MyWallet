import React, { useState } from "react";
import EthWallet from "./EthWallet";
import SolWallet from "./SolWallet";
import { generateMnemonic } from "bip39";
import Button from "./ui/Button";
import OneSeed from "./ui/oneSeed";
import { Eye, EyeOff, Copy, Check } from 'lucide-react';

const GenMnemonics = ({ walletType }) => {
  const [mnemonics, setMnemonics] = useState();
  const [isButtonVis, setButtonVis] = useState(true);
  const [showMnemonics, setShowMnemonics] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const buttonVis = () => {
    setButtonVis(false);
  };

  const generateMnemonicAndHideButton = async () => {
    let mn = generateMnemonic();
    setMnemonics(mn);
    buttonVis();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mnemonics);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center m-8">
        <div className="flex gap-32 items-center mb-6">
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

        {mnemonics && (
          <div className="w-full border border-slate-400/20 dark:border-blue-100/20 rounded-lg overflow-hidden mt-4">
            <div className="w-full flex items-center justify-between p-4 bg-slate-400/10">
              <button
                onClick={() => setShowMnemonics(!showMnemonics)}
                className="flex items-center gap-2 hover:bg-slate-400/20 p-2 rounded transition-colors"
              >
                {showMnemonics ? (
                  <>
                    <EyeOff className="h-5 w-5" />
                    <span className="font-medium">Hide Mnemonics</span>
                  </>
                ) : (
                  <>
                    <Eye className="h-5 w-5" />
                    <span className="font-medium">Show Mnemonics</span>
                  </>
                )}
              </button>

              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 hover:bg-slate-400/20 p-2 rounded transition-colors"
                title="Copy mnemonic phrase"
              >
                {isCopied ? (
                  <>
                    <Check className="h-5 w-5" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out
                ${showMnemonics 
                  ? 'max-h-[500px] opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {mnemonics?.split(" ").map((s, index) => (
                  <OneSeed key={index} seedText={s} />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8">
          {walletType === "Ethereum" && !isButtonVis ? (
            <EthWallet mnemonics={mnemonics} />
          ) : walletType === "Solana" && !isButtonVis ? (
            <SolWallet mnemonics={mnemonics} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default GenMnemonics;