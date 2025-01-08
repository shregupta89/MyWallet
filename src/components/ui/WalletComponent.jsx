import React from 'react'

const WalletComponent = ({pu, pr, index}) => {
  return (
    <div className=' gap-4 m-4 transition-all duration-500 ease-in-out rounded border border-slate-400/20 dark:border-blue-100/20'>
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
          <div className='font-medium'>Private Key:</div>
          <div className='break-all text-sm bg-slate-100/10 p-2 rounded'>
            {pr}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletComponent