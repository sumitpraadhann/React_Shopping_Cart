import React, { useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { initialProducts } from '../Data/product'
import { useEffect } from 'react'
import {ArrowLeft, Zap,Tag,ShoppingCart} from 'lucide-react'
import { usecart } from '../Context/CartContext'

const ProductDetail = () => {
   const {addcart} = usecart()
const { id } = useParams()
const [product, setproduct] = useState()

useEffect(() => {
  setproduct(initialProducts.find((data) => data.id ==  id))
}, [id])

  return (
    <>
  <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-0 p-6 border border-gray-800">
      <Link to={"/"}>
    <button className=' cursor-pointer flex mt-2 items-center hover:text-amber-600 text-gray-200 transition duration-300 mb-12 font-semibold text-lg '>
     <ArrowLeft className='h-6 w-6 mr-3 ml-2'/>
     <span>Back to all Product</span>
    </button>
    </Link>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 '>
    <div className='w-full'>
   <img src={product?.image} alt={product?.name}  className='h-[400px] w-[500px] rounded-3xl object-cover  shadow-2xl shadow-gray-950/50'/>
    </div>  


    <div className='flex flex-col justify-between  '>
      <div>
        <h1 className='text-4xl font-semibold  text-white mb-7 leading-tight tracking -tighter'>{product?.name}</h1>
      </div>
      <p className='text-3xl mb-7 font-extrabold text-orange-400'>{product?.price.toFixed(2)}</p>
   <h2 className='flex items-center space-x-3 text-xl text-gray-300 mb-2 border-b border-e-yellow-900/50 pb-2 '>
    <Tag className='text-orange-600'/>
    <span>Product overview</span>
   </h2>
   <p className='mb-7 text-gray-500 text-lg  leading-relaxed'>{product?.description}</p>


   <ul className=' space-y-3 mb-7 text-gray-300 bg-gray-800 border broder-bg-gray-700 rounded-2xl p-4'>
    <li className='flex space-x-3 text-lg items-center '>
      <Zap className='w-5 h-5 text-orange-500'/>
      <span>High-Quality, Professional Grade Materials</span>
    </li>

     <li className='flex space-x-3 text-lg items-center '>
      <Zap className='w-5 h-5 text-orange-500'/>
       <span>Comprehensive 1-Year Manufacturer Warranty</span>
    </li>

     <li className='flex space-x-3 text-lg items-center '>
      <Zap className='w-5 h-5 text-orange-500'/>
      <span>Immediate Shipping for In-Stock Items</span>
    </li>
   </ul>

      <button
       onClick={()=>addcart(product)}
      className=' py-3 w-full bg-orange-600 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-4 transform uppercase '>
           <ShoppingCart/>
           <span>Add to cart</span>
          </button>

      <Link to={'/'} className='py-3 text-lg mt-4 cursor-pointer rounded-full w-full  bg-black/20 text-orange-400 border-2 border-orange-600 uppercase flex items-center justify-center  hover:bg-orange-400/10 transition duration-300'>
        Keep Shopping 
      </Link>
    </div>
    </div>


  </div>
    </>
  )
}

export default ProductDetail
