  import React from 'react'
  import { usecart } from '../Context/CartContext'
  import { useState } from 'react'
  import { Link } from 'react-router-dom'
  import { MapPin,Zap ,Package,} from 'lucide-react'
  import Orderconfirmation from '../Pages/OrderConfirmation'

  const Checkout = () => {
    const {totalprice,cart,clearcart} = usecart()
  const [deliveryaddres , setdeliveryaddres] = useState({
    name:"",
    address:"",
    city:"",
    zip:""
  })

  const [isconfirmed,setisconfirmed] = useState(false)

  const handlechange = (e) =>{
    const {name,value} = e.target
    setdeliveryaddres(prev => ({...prev,[name]:value}))
  }

  const handlesubmit = (e) =>{
    e.preventDefault()
    clearcart()
    setisconfirmed(true)
  }

  if(isconfirmed) return <Orderconfirmation deliveryaddres ={deliveryaddres}/>

    return (
      <>
      <div className='container mx-auto px-4 md:px-8 pt-8'>
        <h2 className='text-4xl font-bold text-white mb-10 tracking-tight'>Finalize  Order</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 p-8 bg-gray-900 rounded-2xl border border-gray-800'>

            <h3 className='text-3xl  font-semibold\ text-orange-400 flex items-center space-x-3 pb-4 border-b border-gray-700 '>
              <MapPin className="w-7 h-7 text-ornge-500"/>
            <span>Shipping Information</span>
          </h3>
          <form className='space-y-4' onSubmit={handlesubmit}>
            {Object.keys(deliveryaddres).map((key)=>(
              <div key={key}>
               <label htmlFor={key} className='block text-xl font-semibold text-gray-400 capitalize mb-1'>
                 {key === "zip" ? "Pin code":key}
               </label>
               <input type={key === "zip"?"number":"text"} 
               id={key}
               name={key}
               value={deliveryaddres[key]}
                required
                onChange={handlechange}
                className='w-full  px-5 py-3 mt-2 rounded-xl border border-gray-700 text-white bg-gray-800'
               />
              </div>
              
            ))}

         <button type='submit' className='mt-3  py-4 w-full font-semibold bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600 transition duration-300  transform uppercase'>
         <span>
  ₹ Pay and confirm order <span className="ml-2">(₹{totalprice.toFixed(2)})</span>
</span>
            
         </button>
         
          </form>
          </div>


           <div className='lg:col-span-1 p-8 bg-gray-800 sticky   rounded-2xl top-20  h-fit shadow-2xl border border-gray-800 '>

     <h3 className='text-3xl font-bold text-white mb-5 border-b border-y-gray-500 pb-4 flex items-center space-x-3 '>
        <span className='text-orange-400 h-6 w-6'><Package/></span>
        <span className='text-4xl'>Summary</span>

     </h3>
  <div className='space-y-4 text-gray-300 '>
       {cart.map((item) => (
      <div key={item.id} className='flex justify-between  border-b border-gray-600 pb-2 text-base'>
        <span>{item.name}</span>
        <span className='text-orange-300 font-semibold'>{(item.price*item.quantity).toFixed(2)}</span>
      </div>
     ))}
 

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
           <span className="text-3xl font-semibold text-white">
              Total Due:
           </span>
           <span className="text-2xl font-semibold text-orange-400">
             ₹{totalprice.toFixed(2)}
           </span>
         </div>
          </div>
     </div>

      </div>
        </div>
      </div>
      </>
    )
  }

  export default Checkout
