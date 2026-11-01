import React from 'react'
import { X } from 'lucide-react'
import { usecart } from '../Context/CartContext'
const Cartitem = ({item}) => {
  const {addcart,removecart} = usecart()
  const add = () => addcart(item)
  const decrease = () => removecart(item.id)
  return (
    <>
    <div className='flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6 mb-4 bg-gray-900 
  rounded-xl shadow-2xl border-gray-800 transition duration-300 hover:border-orange-600/50'>

   <div className='flex items-center justify-center  space-x-4 w-full sm:w-auto '>
    <img src={item.image} alt={item.name} className='h-24 w-24 object-cover rounded-lg border-gray-700' />
   </div>
   <div className='grow ml-4  '>
    <h3 className='text-xl mt-3 mb-2 text-white font-bold line-clamp-1'>
      {item.name}
    </h3>
   <p className=' mb-7 text-lg  text-orange-400 font-semibold'>₹{item.price.toFixed(2)}</p>
   </div>


   <div className='flex items-center space-x-2  justify-center sm:justify-end w-full sm:w-2/5'>
<div className='flex items-center border  border-gray-700 rounded-full overflow-hidden'>
  
  <button onClick={decrease} className=' text-gray-400 bg-gray-800 transition duration-150 hover:bg-gray-800 w-9 h-9 justify-center items-center '>
   -
  </button>
  <span className='text-lg px-4 font-bold  text-white rounded-2xl  bg-gray-800'>{item.quantity}</span>

    <button onClick={add} className=' text-gray-400 bg-gray-800 transition duration-150 hover:bg-gray-800 w-9 h-9 justify-center items-center '>
   +
  </button>
</div>
<p className='text-xl text-orange-300 font-bold p-3 md:block'>{(item.price * item.quantity).toFixed(2)}</p>
<button className='p-3 rounded-full bg-red-800/20 text-red-400 transition duration-200 hover:bg-red-500/20' onClick={()=>removecart(item.id,true)}>
  <X className='w-5 h-5'/>
</button>
   </div>
    </div>
    </>
  )
}

export default Cartitem
