import React from 'react';
import MEDIA from '../assets/images/media.png';
import BLOCK from '../assets/images/blockchain.jpg';

const ITPicsTwo = () => {
  return (
        <main  className='mx-56 flex justify-around'>
            <div className='flex gap-9 mt-20'>
                <div className='border-solid border-2 border-black rounded-2xl justify-around'>
                    <img className='h-60  rounded-2xl' src={MEDIA}  width={350}  />
                    <p  className='text-center'>Digital And Social Media Marketing</p>
                </div>
                <div  className='border-solid border-2 border-black rounded-2xl justify-around'>
                    <img className='h-60  rounded-2xl' src={BLOCK}  width={350} />
                    <p   className='text-center'>BlockChain Development</p>
                </div>
            </div>
        </main>
  )
}

export default ITPicsTwo