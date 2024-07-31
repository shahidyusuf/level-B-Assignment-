import React from 'react'
import WEB from '../assets/images/web and mobile app.png';
import FLUT from '../assets/images/flutterdev.png';
import GRAPH from '../assets/images/graphic-design.jpg';
import ITPicsTwo from './ITPicsTwo';

const ITPicsOne = () => {
  return (
    <main className='mx-56 flex'>
    <div className='flex gap-9 mt-20'>
    <div className='border-solid border-2 border-black rounded-2xl'>
        <img className='h-60 rounded-2xl' src={WEB} width={400} height={200} />
        <p className='text-center'>
        Web and Mobile Application Development
        </p>
        </div>
        <div  className='border-solid border-2 border-black rounded-2xl'>
        <img className='h-60 rounded-2xl' src={FLUT} width={400} />
        <p  className='text-center'>
        Flutter Mobile Application Development
        </p>
        </div>
        <div className='border-solid border-2 border-black rounded-2xl pb-10'>
        <img className='h-60 rounded-2xl' src={GRAPH} width={400} height={100} />
        <p  className='text-center'>
        Graphic Design And Video Editing
        </p>
        </div>
    </div>
    </main>
        
  )
}

export default ITPicsOne