import React from 'react'

function Footer() {
    return (
        <div className=' footer max-w-screen-sm  py-10 flex gap-32'   >
            <div className=''>
                <h1 className='text-[7rem] font-semibold tracking-tight leading-none' >Refokus.</h1>
            </div>
            <div className='footer-link flex gap-4'>
                <div className='basis-1/3 '>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Social</h4>
                    {["Instagram", "Twitter (x?)", "Linkedin"].map((elem, index) => {
                        return (<a className='block mt-2 capitalize
                        text-zinc-600'>{elem}</a>)
                    })}
                </div>
            </div>
            <div className='footer-link flex gap-4'>
                <div className='basis-1/3 '>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Social</h4>
                    {["Instagram", "Twitter (x?)", "Linkedin"].map((elem, index) => {
                        return (<a className='block mt-2 capitalize
                        text-zinc-600'>{elem}</a>)
                    })}
                </div>

            </div>
            <div className='flex flex-col justify-between items-center'>
                <p className='text-right '>Lorem ipsum dolor sit amet consectetur,cimus.</p>
                <img className='w-[70vw]'
                    src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
            </div>
        </div>
    )
}

export default Footer