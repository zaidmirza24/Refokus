import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width,start,para,hover="none"}) {
    return (
        <div className={` card w-1/2 bg-zinc-800 p-5 hover:bg-violet-500 hover:p-7 transition-all ease-in-out  rounded-xl ${width}  min-h-[30rem] flex flex-col justify-between`}>
            <div className='w-full' >
                <div className='w-full flex justify-between items-center'>
                    <h3>One Heading</h3>
                    <FaArrowRightLong />
                </div>
                <h1 className='text-3xl font-medium mt-10' >Whatever Heading</h1>
            </div>
            <div className='down w-full ' >
                {
                    start === true && (
                        <>
                        <h1 className='text-5xl font-semibold tracking-tight leading-none mb-3'>Start a Project</h1>
                        <button className='rounded-full py-2 px-5 border-[1px] border-zinc-50'  >Contact Us</button>
                        </>
                    )
                }
                {
                    para &&  <p className='text-sm text-zinc-500 font-medium ' >Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                }
               

            </div>
        </div>
    )
}

export default Card