import React, { useState } from 'react'
import{ShoppingCart} from 'lucide-react'
import { Link } from 'react-router-dom'
import { usecart } from '../Context/CartContext'

const ProductCart = ({product}) => {
  const {addcart} = usecart()

  return (
    <>
      <div className="bg-gray-900 flex flex-col transform transition duration-500 rounded-2xl shadow-xl h-full overflow-hidden border border-gray-800 group hover:scale-[1.02]  hover:shadow-orange-900/40">
      
      <Link to={`/product/${product.id}`} className='relative cursor-pointer overflow-hidden'>
        <img src={product.image} alt={product.name} className='w-full h-56 object-cover object-center transition duration-500 group-hover:scale-110 opacity-90' />
      <div className="absolute left-0 bottom-0 text-white bg-orange-600/95 px-5 py-3 text-xl font-semibold rounded-tr-xl shadow-lg">
        ₹{product.price.toFixed(2)}
      </div>
      </Link>

      <div className="flex flex-col  p-5 grow">
        <Link to={`/product/${product.id}`}>
        <h3 className='text-xl font-extrabold text-white mb-2 cursor-pointer transition duration-200 hover:text-orange-400 line-clamp-1'>
          {product.name}
        </h3>
        </Link>
        <p className='text-gray-400 text-sm line-clamp-3 mb-4'>{product.description}</p>
        <div className='flex items-center text-xs text-gray-500 mb-4'>
          <span className='px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold'>{product.category}</span>
        </div>
         
       <button
       onClick={()=>addcart(product)}
        className='max-auto py-3 w-full bg-orange-600 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-4 transform uppercase'>
        <ShoppingCart/>
        <span>Add to cart</span>
       </button>
      </div>
      </div>
      
    </>
  )
}

export default ProductCart
