"use client"; // this is a client component
import Image from 'next/image'
import { useState } from "react";
import Collapse from './collapse.js'

export const state = {
  description: 'Generated your AI image/AI photos',
}

const bgPotions = {
  backgroundPosition: 'left top, right top, right bottom, left bottom',
  backgroundSize: '15%, 15%, 15% 40%' 
  // 21%, 31%, 15% 21%;
}
const collapsePaneStyle = 'z-3 top-[47px] sm:top-[55px] absolute left-[0] w-full bg-white max-lg:block text-red rounded-b-2xl shadow-xl'
export default function Home() {
  let [collapsesSwitch, toggleCollapseSwitch] = useState( [ false, true, false ] )
  // collapses switch
  let [firstCollapseSwitch, setFirstCollapseSwitch] = useState(false)
  const handleSetFirstCollapseSwitch = () => setFirstCollapseSwitch(!firstCollapseSwitch)
  let [secondCollapseSwitch, setSecondCollapseSwitch] = useState(false)
  const handleSetSecondCollapseSwitch = () => setSecondCollapseSwitch(!secondCollapseSwitch)
  let [thirdCollapseSwitch, setThirdCollapseSwitch] = useState(false)
  const handleSetThirdCollapseSwitch = () => setThirdCollapseSwitch(!thirdCollapseSwitch)
  let [fourthCollapseSwitch, setFourthCollapseSwitch] = useState(false)
  const handleSetFourthCollapseSwitch = () => setFourthCollapseSwitch(!fourthCollapseSwitch)
  // miniMenu switch
  let [menuCollapseSwitch, setMenuCollapse] = useState(false)
  const handleSetMenuCollapseSwitch = () => setMenuCollapse(!menuCollapseSwitch)
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between`}>
      <header className="z-40 w-full items-center justify-between text-sm flex px-3 lg:px-12 sticky top-0 pt-4 sm:pt-6 bg-white">
        <div className=" bottom-0 left-0 flex h-auto items-end bg-gradient-to-t from-white via-white static ">
          <a
            className="pointer-events-auto flex place-items-center gap-2 p-0"
            href="/"
            rel=""
          >
            <Image
              className='w-8 lg:w-10'
              src="/home/logo.png"
              sizes={100} 
              alt="AI photos"
              width={0}
              height={0}
              priority
            />
              <span className='font-semibold'>AI ProShots</span>
          </a>
        </div>
        <ul className={`${menuCollapseSwitch ? collapsePaneStyle : 'lg:flex max-lg:hidden grow justify-end gap-x-8 mr-8'}`}>
          <li className='cursor-pointer group-max-md:leading-loos block px-3 py-4'> How it works </li>
          <li className='cursor-pointer group-max-md:leading-loos block px-3 py-4'> Pricing </li>
          <li className='cursor-pointer group-max-md:leading-loos block px-3 py-4'> Contact us </li>
          <li className='cursor-pointer group-max-md:leading-loos block px-3 py-4'> Log in </li>
        </ul>
        <nav className='flex flex-between gap-x-11 text-[1.125rem]'>
          <div className='flex gap-x-8'>
            <span className='cursor-pointer block bg-[--theme-blue] px-6 md:px-[40px] lg:px-[60px] py-[3px] rounded-[50px] text-white'>Try it</span>
            <Image
              onClick={handleSetMenuCollapseSwitch}
              className="w-6 h-6 lg:hidden"
              src="/home/menu.png"
              alt=""
              width={0}
              height={0}
              sizes='100%'
              priority
            />
          </div>
        </nav>
      </header>

      
      <article className='w-full flex flex-col items-center py-[4rem] sm:py-[6rem] md:py-[8rem] lg:py-[10rem]'>
        <h1 className='z-0 font-semibold text-[--theme-gray] text-6xl max-[270px]:text-4xl max-[340px]:text-5xl md:text-8xl lg:text-[9.5rem] xl:text-[12.5rem]'>AI ProShots</h1>
        <div className='z-1 relative w-full h-[52px] md:h-[67px] bg-[--theme-darkblue] top-[-10px] md:top-[-20px] lg:top-[-30px] xl:top-[-40px] flex justify-around items-end'>
          <span className='hidden sm:block text-xs sm:text-sm md:text-base text-white'>Unleash the power of AI.</span>
          <span className='hidden sm:block tittle-line h-[1px] md:h-[2px] w-40 bg-white mb-1 lg:mb-4'/>
        </div>
      </article>
      
      <div className='px-6 flex flex-col items-center lg:px-24 md:px-10'>  
        <article className='text-[2.25rem] sm:text-[3.4375rem] font-semibold text-center '>
          <strong>
            <div>Revolutionize</div>
            your product photos with AI
          </strong>
        </article>

        <article className='max-w-[68.9375rem] py-10 md:py-14 lg:py-20 items-stretch gap-x-[3.625rem] gap-y-10 grid grid-cols-1 md:grid-cols-2'>
          <div className='w-full'>
            <Image
              className="h-[30rem] rounded-[30px] object-cover w-full"
              src="/home/product-demo.png"
              width={0}
              height={0}
              sizes='100%'
              priority
              alt="Generate photos"
            />
          </div>
          <div className='flex flex-col gap-y-6'>
            <div className='w-full h-full border border-[#767676] border-solid rounded-[1.875rem] p-10 text-4xl'>
              My product on a soft surface with pillows and flowers. Luxury, bright.
            </div>
            <span className='text-white block bg-[--theme-darkblue] rounded-[30px] text-center py-5 font-medium text-3xl md:text-4xl cursor-pointer '>Generate</span>
          </div>
        </article>

        <article className='max-w-none w-full md:max-w-[68.9375rem] py-10 md:py-20 grid grid-cols-[1fr_1fr_1fr] gap-x-4 md:gap-x-[2rem] gap-y-6 pb-20 sm:pb-40 lg:pb-60'>
          <Image
            className="cursor-pointer h-auto w-full rounded-[30px] col-start-1 col-end-1"
            src="/home/custom-left-top-product.png"
            alt=""
            width={0}
            height={0}
            sizes='100%'
            priority
          />
          <Image
            className="cursor-pointer h-auto w-full rounded-[30px] col-start-1 col-end-1"
            src="/home/custom-left-bottom-product.png"
            alt=""
            width={0}
            height={0}
            sizes='100%'
            priority
          />
          {/* max-w-[220%] */}
          <Image
            className="max-w-[none] w-full rounded-[30px] col-[2/4] row-[1/3] "
            src="/home/default-product.png"
            alt=""
            width={0}
            height={0}
            sizes='100%'
            priority
          />
        </article>

        <article className='pb-20 sm:pb-40 md:pb-60 lg:pb-80 max-w-[68.9375rem] w-full sm:text-xl'>
          <p className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.4375rem] font-semibold text-center ">How it works</p>
          {/* rounded-[40px] border-[3px] border-[--theme-black] */}
          {/* bg-[url('/home/border-left-top.png'),url('/home/border-top-right.png'),url('/home/border-right-bottom.png'),url('/home/border-left-bottom.png')] */}
          <div
            className={`
              bg-no-repeat grid grid-cols-2 py-[3.3125rem] bg-[length:'15%,_15%,_15%_50%']
              px-6 sm:px-10 md:px-12  gap-y-12 gap-x-4 md:gap-x-20
              bg-[url('/home/border-left-top.png'),url('/home/border-top-right.png'),url('/home/border-right-bottom.png'),url('/home/border-left-bottom.png')] bg-left-top
            `}
            style={bgPotions}
          >
            <div>
              <d className='flex items-center mb-6 gap-x-4 sm:gap-x-8 md:gap-x-[2.625rem]'>
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl '>Step 1</span>
                <Image
                  className="inline w-6 md:w-9 h-[1.2rem] md:h-[1.875rem]"

                  src="/home/camera.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes='100%'
                  priority
                />
              </d>
              <div className='text-base min-w-[365px]:text-lg sm:text-xl md:text-2xl'>Submit your product image.</div>
            </div>

            <div>
              <div className='flex items-center mb-6 gap-x-4 sm:gap-x-8 md:gap-x-[2.625rem]'>
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl '>Step 2</span>
                <Image
                  className="inline w-6 md:w-[1.875rem] h-6 md:h-7"
                  src="/home/pen.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes='100%'
                  priority
                />
              </div>
              <div className='text-base min-w-[365px]:text-lg sm:text-xl md:text-2xl'>Write down what you want.</div>
            </div>

            <div>
              <div className='flex items-center mb-6 gap-x-4 sm:gap-x-8 md:gap-x-[2.625rem]'>
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl '>Step 3</span>
                <Image
                  className="inline w-7 h-7 md:w-9 md:h-9"
                  src="/home/setting.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes='100%'
                  priority
                />
              </div>
              <div className='text-base min-w-[365px]:text-lg sm:text-xl md:text-2xl'>Follow the instruction to optimize.</div>
            </div>

            <div>
              <div className='flex items-center mb-6 gap-x-4 sm:gap-x-8 md:gap-x-[2.625rem]'>
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl '>Step 4</span>
                <Image
                  className="inline w-6 md:w-[1.875rem] h-6 md:h-[1.875rem]"
                  src="/home/pic.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes='100%'
                  priority
                />
              </div>
              <div className='text-base min-w-[365px]:text-lg sm:text-xl md:text-2xl'>Get your perfect images.</div>
            </div>
          </div>
          <div className='text-xl sm:text-2xl w-40 sm:w-60 md:w-[18.75rem] h-10 sm:h-14 rounded-[50px] text-white bg-[--theme-blue] flex justify-center items-center cursor-pointer mx-auto mt-[-1.875rem]'>Free to Try</div>
        </article>

        <article className='pb-20 sm:pb-40 md:pb-60 lg:pb-80'>
          <p className='text-center text-[2.25rem] sm:text-[3.4375rem] row-start-1 col-start-1 col-end-2 pb-[3.125rem]'>AI ProShots vs. Others</p>
          <p className='text-center text-2xl pb-10 sm:pb-16 md:pb-[5.3125rem]'>Real experiment done with the same image, same prompt, and same time.</p>
          <div className='grid grid-cols-2 gap-x-4 md:gap-x-[6.5rem] pb-16 sm:pb-20 md:pb-24 lg:pb-[8.25rem]'>
            <div className='text-2xl sm:text-3xl md:text-4xl text-center pb-4'>AI ProShots</div>
            <div className='text-2xl sm:text-3xl md:text-4xl text-center pb-4'>Another Website</div>
            <div>
              <Image
                className="block w-auto rounded-[30px] col-start-2 col-end-2 row-start-1 row-end-3"
                src="/home/default-product.png"
                alt=""
                width={0}
                height={0}
                sizes='100%'
                priority
              />
            </div>
            <div>
              <Image
                className="block w-auto rounded-[30px] col-start-2 col-end-2 row-start-1 row-end-3"
                src="/home/default-product.png"
                alt=""
                width={0}
                height={0}
                sizes='100%'
                priority
              />
            </div>
          </div>
          <div className='text-xl md:text-2xl w-full text-center'>AI ProShots is aimed to generate professional quality images.</div>
        </article>
      </div>


      <article className='text-white bg-[--bg-shallow-blue] w-full grid grid-cols-4 mb-32'>
        <div className='inline bg-[--bg-blue] col-span-4 md:col-span-3 px-6 py-14 lg:pl-[4.625rem] lg:pr-[3.125rem]'>
          <p className='text-4xl sm:text-5xl md:text-5xl lg:text-[3.4375rem] pb-4'>Why did the chicken cross the road?</p>
          <p className='text-4xl sm:text-5xl md:text-5xl lg:text-[3.4375rem] pb-14'>To get our FREE tier!</p>
          <p className='text-2xl sm:text-3xl md:text-4xl pb-[6.4375rem]'>
            Yep, you read that right! Free to start. Our free tier is so good, even chickens are crossing roads for it! 
          </p>
          <div className='rounded-[50px] md:h-[3.4375rem] bg-white w-full md:w-[18.75rem] text-center text-black leading-[3.4375rem] text-2xl font-medium cursor-pointer'>Join Now</div>
        </div> 
      </article>
      
      
      <div className='text-4xl sm:text-5xl md:text-5xl lg:text-[3.4375rem] font-semibold text-center max-w-3xl mb-16 px-4 sm:px-0'>
        How does Generative AI help with Product Photos?
      </div>
      <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[68.9375rem] mb-32 px-8 sm:px-10 lg:px-12 xl:px-0'>
        AI inspires and augments human creativity.
        It helps generate new ideas and designs. Meanwhile,
        it automates and accelerates the process of testing different ideas.
        With just a few clicks, you will see various versions of design.
        And you can modify and enhance the design from there much faster.
      </div>


      <article className='px-6 lg:max-w-[68.9375rem] w-full mb-30 md:mb-40 lg:mb-60'>
        <div className='text-center text-4xl sm:text-6xl lg:text-[3.4375rem] font-semibold pb-16 sm:pb-20 md:pb-24 lg:pb-[122px]'>Questions?</div>
        <div className='flex flex-col w-full border-b-2 border-[#3D3D3D] mb-[30px]'>
          <div className='w-full flex justify-between items-center cursor-pointer pb-10' onClick={ handleSetFirstCollapseSwitch }>
            <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Is AI ProShots free to use?</span>
            <Image
              className={`${firstCollapseSwitch ? 'rotate-180' : ''} cursor-pointer h-3 sm:h-4 md:h-[1.5625rem] w-6 sm:w-8 md:w-[3.125rem]`}
              src="/common/black-Inverted-triangle.png"
              alt=""
              width={0}
              height={0}
              sizes='100%'
              priority
            />
          </div>
          <div className='text-base sm:text-xl md:text-2xl'>
            {firstCollapseSwitch &&
              <div>
                <div className='pb-6'>Yes, absolutely. A clean and great quality product photo will help a lot.</div>
              </div>}
          </div>
        </div>
        <div className='flex flex-col w-full border-b-2 border-[#3D3D3D] mb-[30px]'>
          <div className='w-full flex justify-between items-center cursor-pointer pb-10' onClick={ handleSetSecondCollapseSwitch }>
            <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>How does AI ProShots work?</span>
            <Image
              className={`${secondCollapseSwitch ? 'rotate-180' : ''} cursor-pointer h-3 sm:h-4 md:h-[1.5625rem] w-6 sm:w-8 md:w-[3.125rem]`}
              src="/common/black-Inverted-triangle.png"
              alt=""
              width={0}
              height={0}
              sizes='100%'
              priority
            />
          </div>
          <div className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            {secondCollapseSwitch &&
              <div>
                <div className='pb-6'>Simply upload a clean product photo and describe your desired scene or background to the AI. Our system will then generate new, high-quality images using our unique algorithm.</div>
              </div>}
          </div>
        </div>
        <div className='flex flex-col w-full border-b-2 border-[#3D3D3D] mb-[30px]'>
          <div className='w-full flex justify-between items-center cursor-pointer pb-10' onClick={ handleSetThirdCollapseSwitch }>
            <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>What sets AI ProShots apart in terms of image quality?</span>
            <Image
              className={`${thirdCollapseSwitch ? 'rotate-180' : ''} cursor-pointer h-3 sm:h-4 md:h-[1.5625rem] w-6 sm:w-8 md:w-[3.125rem]`}
              src="/common/black-Inverted-triangle.png"
              alt=""
              width={0}
              height={0}
              sizes='100%'
              priority
            />
          </div>
          <div className='text-base sm:text-xl md:text-2xl'>
            {thirdCollapseSwitch &&
              <div>
                <div className='pb-6'>AI ProShots uses a specialized algorithm optimized for beauty and skincare products. This ensures that the generated images meet high-quality standards, setting us apart from other AI image generation websites.</div>
              </div>}
          </div>
        </div>
        <div className='flex flex-col w-full border-b-2 border-[#3D3D3D] mb-[30px]'>
          <div className='w-full flex justify-between items-center cursor-pointer pb-10' onClick={ handleSetFourthCollapseSwitch }>
            <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{`What if I don't have a clean product photo?`}</span>
            <Image
              className={`${fourthCollapseSwitch ? 'rotate-180' : ''} cursor-pointer h-3 sm:h-4 md:h-[1.5625rem] w-6 sm:w-8 md:w-[3.125rem]`}
              src="/common/black-Inverted-triangle.png"
              alt=""
              width={0}
              height={0}
              sizes='100%'
              priority
            />
          </div>
          <div className='text-base sm:text-xl md:text-2xl'>
            {fourthCollapseSwitch &&
              <div>
                <div className='pb-6'>No worries! You can ship your product to us, and our professional setup will capture high-quality photos for you. This ensures that you have the best input for the AI to generate stunning images for your product.</div>
              </div>}
          </div>
        </div>
      </article>

      <footer className='bg-[--theme-darkblue] w-full text-white py-[3.5rem]'>
        <div className='text-center text-[2rem] font-semibold sm:mb-[7.1875rem]'>AI ProShots</div>
        <article className='flex justify-around max-sm:hidden'>
          <div className='flex gap-x-[4.125rem] text-sm'>
            <span className='cursor-pointer'> Terms & Conditions </span>
            <span className='cursor-pointer'> Privacy Policy </span>
            <span className='cursor-pointer'> Sitemap </span>
            <span className='cursor-pointer'> Contact Us </span>
          </div>
          <span>© 2023 AI ProShots All Rights Reserved</span>
        </article>
      </footer>
    </div>
  )
}
