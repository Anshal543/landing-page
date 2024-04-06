import React from 'react'
import form from '../image/form.jpg'

const Get = () => {
  return (
    <div className='flex flex-col '>
        <h1 className='text-center text-5xl my-12'>Get in Touch</h1>
        <div className='flex justify-center items-center mx-24'>
            <div className='w-full flex justify-center items-center max-lg:hidden '>
                <img className='w-[400px] object-contain rounded-xl' src={form} alt="" />
            </div>
            <div className='w-full  flex justify-center items-center xl:justify-center '>
                <form action="" className='flex flex-col '>
                    <input type="text" placeholder='Name' className='border-2 border-zinc-500 rounded-full
                     max-w-[500px] py-2 px-4 mb-4' />
                    <input type="text" placeholder='Email' className='border-2 border-zinc-500 rounded-full
                     max-w-[500px] py-2 px-4 mb-4' />
                    <input type="text" placeholder='Phone Number' className='border-2 border-zinc-500 rounded-full
                     max-w-[500px] py-2 px-4 mb-4' />
                    <textarea name="" id="" placeholder='Message' cols="30" rows="10"
                    className='border-2 border-zinc-500 rounded-xl max-w-[400px] py-2 px-4 mb-4'
                    ></textarea>
                    <button className='border-2 border-zinc-500 w-[150px] rounded-full py-2'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Get