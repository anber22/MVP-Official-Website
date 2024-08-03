"use client"; // this is a client component
import Image from 'next/image'
import { useState } from "react";

function Blogs () {
  return (
    <div>
      <article className='w-full flex flex-col items-center '>
        {/* <h1 className='z-0 font-semibold text-[--theme-gray] text-3xl sm:text-5xl md:text-8xl lg:text-[9.5rem] xl:text-[12.5rem]'>AI ProShots</h1> */}
        <Image
          className="h-[30rem] object-cover w-full"
          src="/home/flowers-wall.png"
          width={0}
          height={0}
          sizes='100%'
          priority
          alt="AI picture"
        />
        <div className='z-1 relative w-full h-[52px] md:h-[67px] bg-[--theme-darkblue] top-[-10px] md:top-[-20px] lg:top-[-30px] xl:top-[-40px] flex justify-around items-center'>
          <span className='sm:block text-xs sm:text-sm md:text-base text-white'>AI ProShots - Unleash the power of AI.</span>
          <span className='sm:block tittle-line h-[1px] md:h-[2px] w-[8%] bg-white'/>
        </div>
      </article>
    </div>
  )
}

export default Blogs