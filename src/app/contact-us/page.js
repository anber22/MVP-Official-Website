 "use client"; // this is a client component

function ContactUs () {
  return (
    <div className="min-h-screen">
      <div className='px-[10dvw] py-10 md:py-30'>
        <p className="text-[36px] md:mt-[100px] mb-[80px]">Contact Us</p>
        <article>
          <div className="flex">
            <div className="flex">
              <div className="mr-4">Your Name</div>
              <input className="mr-16" type="text" />
            </div>
            <div className="flex">
              <div className="mr-4">Email</div>
              <input type="email" name="" id="" />
            </div>
          </div>
          <div>
            <p>Message</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="text-sm text-white w-[100px] h-[30px] rounded-md border-black border-[1px] shadow-lg shadow-black/30 bg-[#3B73E8]">Submit</button>
        </article>
      </div>
    </div>
  )
}

export default ContactUs