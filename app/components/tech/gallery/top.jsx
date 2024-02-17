import Image from 'next/image'
import React from 'react'

const Top = () => {
  return (
    // <div>Top</div>
    <>
        <div className="px-20 bg-red- mh:px-10 mobile:px-4">
          <div className="flex items-center justify-between">
              <div className=' w-[15%] h-[25%] flex items-center relative mr-4'>
                <Image height={1000} width={1000} src='/image 1.png' className='rounded-full h-full object-cover'></Image>
                <div className='bg-[rgba(55,94,94,0.21)] mobile:text-[0.5rem] border-[1px] border-[#4e4e4e] rounded-full h-full w-full absolute translate-x-[50%]
                 backdrop-blur-sm flex justify-center items-center text-5xl tw:text-xl'>gallery</div>
              </div>
              <div className="text-[300%] mobile:text-[100%] tw:text-[180%] dg-text text-[#375E5E] tracking-tighter leading-none">
                <p>Is past isn’t proof, </p>
                <p>what else could be?</p>
              </div>
              <div className="bg-[#375E5E] w-[25%] h-1"></div>
              <div className="h-[12%] w-[15%] relative">
                <Image height={1000} width={1000} className="h-[100%] w-full" src="/Group 39.png" alt="" />
                  <div className="absolute top-[50%] -translate-y-[50%] text-[rgba(55,94,94,1)] left-[50%] -translate-x-[50%] leading-none font-mono text-[8vw]">
                02
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Top