"use client"; // this is a client component
import Image from 'next/image'

function Blog () {
  // blog list
  const lists = [
    {info: 'AI in Retail: Smarter Stores, Smarter Product Design', pic: '/blog/blog-1.png' },
    {info: 'What is an AI Product?', pic: '/blog/blog-2.png' },
    {info: 'What is an AI Product?', pic: '/blog/blog-2.png' },
  ]
  // style
  const gridAuto = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(0, 300px))',
    gap: '100px'
  }

  return (
    <div className="min-h-screen">
      <article className='w-full flex flex-col'>
        <p className='z-0 ml-[138px] font-semibold text-[--theme-gray] text-7xl sm:text-8xl md:text-[10.5rem] lg:text-[12.5rem] xl:text-[18.75rem]'>Blogs</p>
        <div className='z-1 mt-[-4rem] relative w-full h-[52px] md:h-[67px] bg-[--theme-darkblue] top-[-10px] md:top-[-20px] lg:top-[-30px] xl:top-[-40px] flex items-end'>
          <span className='text-xs ml-[138px] sm:block sm:text-sm md:text-base text-white'>Resources about how AI can help you improve Product Images and Sales</span>
        </div>
      </article>

      <div style={gridAuto} className='px-40 pt-40'>
        {
          lists.map((item) => {
            return (
              <article className="flex flex-col border border-solid border-black">
                <Image
                  className="h-max-[300px] object-cover w-full"
                  src={item.pic}
                  width={0}
                  height={0}
                  sizes='100%'
                  priority
                  alt="Blog"
                />
                <div className='flex flex-col px-8 py-1'>
                  <p className='py-10 h-min-full'>{item.info} </p>
                  <div className='underline cursor-pointer justify-self-end'>Read More</div>
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blog