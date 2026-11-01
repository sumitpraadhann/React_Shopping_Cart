import React from 'react'
import { usecart } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { ArrowLeft, Zap } from 'lucide-react'
import Cartitem from '../components/Cartitem'

const Cart = () => {
  const {cart,totalprice,cartcount} = usecart()
  return (
    <>
    <div className="container mx-auto  px-4 md:px-8 pt-8">
      <div className="flex items-center mb-10">
         <Link to={"/"}
     className=' cursor-pointer flex  items-center hover:text-amber-600 text-gray-200 transition duration-300 font-semibold text-lg '>
     <ArrowLeft className='h-6 w-6 mr-3 '/>
     <span>Back to Store</span>
    </Link>
      </div>
    <h2 className='text-4xl text-white font-semibold tracking-tight mb-10'>Shopping Cart ({cartcount})</h2>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
      <div className='lg:col-span-2 space-y-2'>
       {cart.map((item)=><Cartitem key={item.id} item={item}/>) }
      </div>

      <div className='lg:col-span-1 p-8 bg-gray-800 sticky   rounded-2xl top-20  h-fit shadow-2xl border border-gray-800 '>

     <h3 className='text-3xl font-bold text-white mb-5 border-b border-y-gray-500 pb-4 flex items-center space-x-3 '>
      <div className='flex justify-between '>
        <span className='text-orange-400 h-6 w-6'>₹</span>
        <span>Order Total</span>
      </div>
     </h3>

     <div className='text-gray-400   space-y-4'>

     <div className='flex justify-between text-2xl'>
       <span>Sub Total:</span>
      <span className='text-white'>₹{totalprice.toFixed(2)}</span>
     </div>

     <div className='flex justify-between text-2xl'>
       <span>Shipping (Express):</span>
      <span className='text-green-400'>Free</span>
     </div>

        <div className="flex justify-between pt-6 border-t border-gray-700">
           <span className="text-2xl font-semibold text-white">
             Estimated Total:
           </span>
           <span className="text-2xl font-semibold text-orange-400">
             ₹{totalprice.toFixed(2)}
           </span>
         </div>
     </div>

     <Link to={'/checkout'} className='text-2xl' >
         <button className='mt-8  py-4 w-full font-semibold bg-orange-600 text-white rounded-full cursor-pointer hover:bg-orange-500 transition duration-300 flex items-center justify-center space-x-4 transform uppercase'>
        <Zap/>
<span>Proceed Securely</span>
         </button>
         </Link>
         <p className='text-gray-400 text-center mt-4'>All transactions are encrypted and secure</p>
      </div>
    </div>    
    </div>
    </>
  )
}

export default Cart
