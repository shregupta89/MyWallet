import React from 'react'

const Button = ({text,onClick,width}) => {
  return (
    <div className="px-4 py-2 rounded shadow-md dark:bg-slate-600 dark:hover:bg-slate-700 cursor-pointer bg-slate-200 hover:bg-slate-300 text-center"
    onClick={onClick}
    style={{width:width}}>
        {text}
    </div>
  )
}

export default Button
