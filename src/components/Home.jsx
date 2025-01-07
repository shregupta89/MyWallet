
import Button from './ui/Button'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate=useNavigate()
  return (
  <div >
  
    <div className='flex flex-col gap-4 items-center h-full py-40'>
      <div className='text-5xl font-extrabold '>
      Choose a Blockchain to get started.
      </div>
    
      <div className='flex gap-4'>
        <Button width='96px' text="Ethereum" onClick={()=>navigate('/Ethereum')}/>
        <Button  width='96px'text="Solana" onClick={()=>navigate('/Solana')}/>
      </div>
    
    </div>
  
  </div>
 

  )
}

export default Home
