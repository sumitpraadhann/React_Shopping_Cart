import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'


const OrderConfirmation = ({deliveryaddres}) => {
  return (
    <div className=' conatainer mx-auto md:px-8 pt-12'>
      <div className='p-12 bg-gray-900 rounded-3xl space-y-6 shadow-2xl text-center mx-auto max-w-2xl mt-12 border border-green-700 text-white'>
        <CheckCircle className='w-24 h-24 mb-8 mx-auto text-green-500'/>
        <h2 className='text-4xl font-bold'>Order Confirmed!</h2>
       <p className='text-lg text-gray-300 '>
        Your transaction is complete. A confirmation email has been sent to your account.
       </p>

      
       <div className='p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm'>
       <p className='font-semibold text-lg mb-1'>
        {deliveryaddres.name}
       </p>
       <p>{deliveryaddres.address}</p>
       <p >{deliveryaddres.city},{deliveryaddres.zip}</p>
       </div>
               <Link
              to={"/"}
              className="mt-10 px-4 py-4 bg-orange-600 text-white font-extrabold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
            >
              
              Continue Shopping
            </Link>
        </div>
        
    </div>
  )
}

export default OrderConfirmation
