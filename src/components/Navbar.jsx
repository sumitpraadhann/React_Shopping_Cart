import React from 'react'
import {Link}  from 'react-router-dom'
import {Home,ShoppingCart} from 'lucide-react'
import { usecart } from '../Context/CartContext'

const Navbar = () => {
  const{cartcount} = usecart()
  return (
    <header className='sticky top-0 bg-gray-950/95 backdrop-blur-md  text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900'>
      
      <div className="container mx-auto px-7 py-4  flex justify-between items-center">
       <Link to={"/"}>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Home className='w-8 h-8 text-orange-400 drop-shadow-lg'/>
          <h1 className='text-4xl  font-extrabold tracking-widest uppercase'>VERVE<span className='text-orange-400'>ClOUD</span></h1>
         </div>
      </Link>

       <nav className='flex items-center space-x-6'>
        <Link to={'/cart'} 
        className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/200 transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer">
       <ShoppingCart className='h-6 w-6 text-orange-400 '/>
       {cartcount > 0 && (<span className='absolute top-0 right-0  font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 w-6 h-5 rounded-full flex justify-center items-center'>
        {cartcount}
       </span>)}
        </Link>
      </nav>
      </div>
    </header>
  )
}

export default Navbar
