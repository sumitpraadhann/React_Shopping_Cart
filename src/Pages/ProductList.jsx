
import React from 'react'
import Searchfilter from '../components/Searchfilter'
import Category from '../components/Category'
import { usecart } from '../Context/CartContext'
import { useState } from 'react'
import ProductCart from "../components/ProductCart"

const ProductList = () => {
  const { products } = usecart()
 const [searchitem,setsearchitem] = useState('')
 const [selectedcategory,setselectedcategory] = useState("All")

 const filterproduct = products.filter((products)=>{
  const matchesSearch = products.name.toLowerCase().includes(searchitem.toLowerCase())
  || products.description.toLowerCase().includes(searchitem.toLowerCase())

  const matchesCategory = selectedcategory==="All" || products.category === selectedcategory;

  return matchesCategory && matchesSearch
 })
  return (
    <>
      <div className="container mx-auto px-4 md:px-10 pt-8">
        <Searchfilter searchitem={searchitem} setsearchitem={setsearchitem} />
        <Category selectedcategory = {selectedcategory} setselectedcategory= {setselectedcategory}  />

        <h2 className="text-2xl font-semibold mx-auto px-4 md:px-4 pt-4">
          Featured Gear ({products.length} Items)
        </h2>

        <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {filterproduct.map((products,index) => (
            <ProductCart key={index} product={products} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
