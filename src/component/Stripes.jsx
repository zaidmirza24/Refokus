import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f104c9b6ce2c0a0d0d13_botify-white.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",number:11},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",number:11},
    ]


  return (
    <div className='flex items-center mt-20' >
       
       {
        data.map((elem,index)=>{
            return <Stripe val={elem}/>
        })
       }
    </div>
  )
}

export default Stripes