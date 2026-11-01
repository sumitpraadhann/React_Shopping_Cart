  import { ToastContainer, toast,Bounce } from 'react-toastify';
import React, { createContext, useContext, useState,useMemo } from 'react'
import { initialProducts } from '../Data/Product'

const cartcontext = createContext()

export const CartProvider = (props) => {
  
  // Add to cart 
  const [ cart,setCart] = useState([]) 
  const products = initialProducts



const addcart = (product)=>{
    toast.success('Item added to Cart', {
position: "top-right",
autoClose: 1498,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  setCart((previtem)=>{
    const existitem = previtem.find((item)=> item.id === product.id)
    if(existitem){
      return previtem.map((item)=> item.id === product.id ?{...item ,quantity: item.quantity   + 1}
    :item )
    }else{
     return [...previtem ,{...product,quantity : 1}]
    }
  })
  }

   // Remove cart
   const removecart  = (productId, removeAll = false ) =>{
      toast.success('Item Remove From Cart', {
position: "top-right",
autoClose: 1498,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    setCart((previtem)=>{
    const existitem = previtem.find((item)=> item.id === productId)

    if(!existitem) return previtem
    if(removeAll || existitem.quantity === 1){
      return previtem.filter(item => item.id !== productId)
    }else{
     return previtem.map((item)=>item.id === productId ? {...item,quantity:item.quantity - 1}
    :item)
    }
  })
   }

  // Clear Cart
const clearcart = () => setCart([])

const cartcount = useMemo(()=>cart.reduce((total,item)=>total + item.quantity,0),[cart])

  const totalprice = useMemo(()=>cart.reduce((total,item)=>total + item.price*item.quantity,0),[cart])


  return (
    <cartcontext.Provider value={{ products,cart,addcart,removecart,clearcart,cartcount,totalprice }}>
      {props.children}
    </cartcontext.Provider>
  )
}

export const usecart = () => useContext(cartcontext)
