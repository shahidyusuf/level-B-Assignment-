import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


export const Product = () => {
  return (
    <div className='w-4/5 m-auto space-y-10'>
      <div className='flex justify-between items-center p-2'>
        <ul className='flex items-center space-x-8'>
          <li>Collection</li>
          <li>Phones</li>
          <li>Shirts</li>
          <li>Shoew</li>
          <li>Glasses</li>
        </ul>
        <div className='flex items-center space-x-5'>
          <button><BsArrowLeft size={"1.5rem"} /></button>
          <button className='bg-rose-300 rounded-full p-2 text-white drop-shadow-xl'><BsArrowRight size={"1.5rem"} /></button>
        </div>
      </div>
      <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-content-center'>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/laptop_2.jpg" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/shoes.jpg" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$100</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/phone_5.jpeg" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$800</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/cout.jpeg" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$50</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/laptop_2.jpg" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$650</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/shoes_2.jpeg" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$100</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/laptop_3.jpg" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$900</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-3/4 object-cover' src="./src/assets/cout_2.png" alt="" />
          <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <h1 className='text-xl font-semibold'>$100</h1>
        </div>
      </div>
      <div className='w-full h-[300px] relative'>
        <img  className='w-full absolute top-0 rounded-xl h-full object-cover' src="./src/assets/mobile_3.jpeg" alt="" />
        <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3  text-white p-5 absolute'>
          <h1 className='text-4xl text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet soluta explicabo asperiores.</p>
          <button className='w-28 bg-rose-400 p-2 rounded-md'>See More</button>
        </div>
      </div>
    </div>
  )
}
