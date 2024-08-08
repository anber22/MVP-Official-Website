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
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 300px))',
    gap: '100px'
  }

  return (
    <div className="min-h-screen">
      <article className='w-full flex flex-col justify-center relative'>
        <p className='z-0 ml-[10dvw] font-semibold text-[--theme-gray] text-[5rem] sm:text-[8rem] md:text-[10.5rem] lg:text-[12.5rem] xl:text-[18.75rem]'>Blogs</p>
        <div className='z-1 relative w-full h-[30px] sm:h-[32px] md:h-[67px] bg-[--theme-darkblue] top-[-60px] sm:top-[-101px] md:top-[-131px] lg:top-[-142px] xl:top-[-178px] flex items-end'>
          <span className='text-xs ml-[11dvw] sm:block sm:text-sm md:text-base text-white'>Resources about how AI can help you improve Product Images and Sales</span>
        </div>
      </article>

      <div style={gridAuto} className='px-[10dvw] py-10 md:py-30'>
        {
          lists.map((item, index) => {
            return (
              <article key={index} className="flex flex-col border border-solid border-black">
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