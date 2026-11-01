import React from 'react'
import {initialProducts} from '../Data/product'
import { Tag } from 'lucide-react'

const availableCategores = [
  "All", ...new Set(initialProducts.map(p=>p.category))
]


const Category = ({selectedcategory,setselectedcategory}) => {
  return (
    <>
      <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-6">
        <Tag className='h-5 w-5 text-orange-400 mt-2 mr-2 hidden sm:block'/>
        {availableCategores.map((category)=>(
          <button key={category} onClick={()=>setselectedcategory(category)} className={`px-5 py-2 text-sm font-bold rounded-full transition duration-300 shadow-md ${selectedcategory === category ? "bg-orange-600 text-white shadow-orange-800/50" : " bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 cursor-pointer border border-gray-700"}`}>{category}</button>
        ))}
        </div> 
    </>
  )
}

export default Category
