import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto py-6 flex
        justify-between items-center border-b-[1px] border-zinc-600'>
            <div className='flex items-center gap-1 p-2'>
                <img width='25px' src="./svgs/logoPng.png" alt="error" />
                <span>Refokus</span>
            </div>
            <div className="links flex gap-14 ml-20 items-center">
                {["Home", "Works", "Culture", "", "News"].map((e, index) => (
                    e.length === 0 ? <span className='w-[2px] h-7 bg-zinc-800' ></span> : <a className='text-sm flex items-center justify-center gap-1' href='#'>
                        {index === 1 ? (<span
                            style={{ boxShadow: "0 0  0.45em #00FF19" }}
                            className='inline-block w-1 h-1 rounded-full bg-green-500'></span>) : null}
                        {e}
                    </a>
                )
                )}
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}

export default Navbar