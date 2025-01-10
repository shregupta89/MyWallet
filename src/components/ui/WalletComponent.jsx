import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const WalletComponent = ({pu, pr, index}) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);

  return (
    <div className='gap-4 m-4 transition-all duration-500 ease-in-out rounded border border-slate-400/20 dark:border-blue-100/20'>
      <div className='text-xl border-b border-inherit p-4 bg-slate-400/10'>
        Wallet {index}
      </div>
      <div className='px-4 py-2 pb-4 space-y-4'>
        <div className='space-y-2'>
          <div className='font-medium'>Public Key:</div>
          <div className='break-all text-sm bg-slate-100/10 p-2 rounded'>
            {pu}
          </div>
        </div>
        <div className='space-y-2'>
          <div className='font-medium flex items-center justify-between'>
            <span>Private Key:</span>
            <button
              onClick={() => setShowPrivateKey(!showPrivateKey)}
              className="p-1 hover:bg-slate-200/10 rounded-full transition-colors"
              aria-label={showPrivateKey ? "Hide private key" : "Show private key"}
            >
              {showPrivateKey ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className='break-all text-sm bg-slate-100/10 p-2 rounded'>
            {showPrivateKey ? pr : '•'.repeat(Math.min(pr.length, 64))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletComponent