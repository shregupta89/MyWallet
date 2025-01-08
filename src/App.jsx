import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import EthWallet from './components/EthWallet'
import SolWallet from './components/SolWallet'
import MainLayout from './MainLayout'
import GenMnemonics from './components/GenMnemonics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "Ethereum",
        element: <GenMnemonics walletType="Ethereum" />
      },
      {
        path: "Solana",
        element: <GenMnemonics walletType="Solana" />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

