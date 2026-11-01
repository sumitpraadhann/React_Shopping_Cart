import React from 'react'
import {Search} from 'lucide-react'

const Searchfilter = ({searchitem,setsearchitem}) => {
  return (
    <>
      <div className='mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-y-gray-800'>
        <div className="flex items-center border border-gray-700 rounded-2xl overflow-hidden focus-within:ring focus-within:ring-orange-600/50 transition duration-300 bg-gray-800:">
         <Search className='w-5 h-5 text-gray-500 ml-4'/>
            <input type="text" placeholder='Seacrh Your Product...'className='p-4 w-full outline-none text-white   placeholder-bg-gray-500 text-base font-medium'
            value={searchitem}
            onChange={(e)=>setsearchitem(e.target.value)}
            />
            
        </div>
      </div>
    </>
  )
}

export default Searchfilter
