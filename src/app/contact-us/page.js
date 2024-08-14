"use client"; // this is a client component
import { useState, route } from "react"
import Link from "next/link"
import { NextResponse } from 'next/server'

function ContactUs () {
  const [submitted, setSubmitted] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const handleSubmit = async () => {
    // setBtnDisabled(true)
    // setTimeout(() => {
    //   setSubmitted(true)
    // }, 1500)
    let data = {
      "userEmail": "zhk@com.com",
      "content": "zhk"
    }
    const res = await fetch("https://back-end-api.aiproshots.com/ai/email/contact-us", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImI1NjJiMDkzLTdmMzQtNDY1Yi05YjE0LWU4YmU2MWI4Mzc3YyJ9.dGSo9YtbdZ84tpqkQUtSk9r-MyxC6CBLBxpL9EovPpSO0NzGoSCCzoLTCGKnz8E9L5zCAefuCyigB_1UnyKteA'
      },
      // mode: 'cors',
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response.json(), 'sora', response.ok());
      
      return response.json()
    })
  }
  const goHome = () => {
    
  }
  return (
    <div className="min-h-screen">
      <div className="px-[10dvw] py-10 md:py-30">
        {
          !submitted ?
          <article>
            <p className="text-[36px] md:mt-[100px] mb-[80px]">Contact Us</p>
            <article>
              <div className="flex">
                <div className="flex">
                  <div className="mr-4">Your Name</div>
                  <input className="px-2 border border-1 border-[#C0C0C0] rounded-lg sm:mr-16" type="text" />
                </div>
                <div className="flex">
                  <div className="sm:mr-4">Email</div>
                  <input className="px-2 border border-1 border-[#C0C0C0] rounded-lg " type="email" name="" id="" />
                </div>
              </div>
              <div className="py-[30px]">
                <p className="pb-[20px]">Message</p>
                <textarea className="px-2 border border-1 border-[#C0C0C0] rounded-lg w-full sm:min-w-[500px] md:min-w-[670px]" name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button
                disabled={false}
                className="
                  cursor-pointer text-sm
                  text-white w-[100px] h-[30px] rounded-md
                  border-black border-[1px] shadow-lg shadow-black/30
                  bg-[#3B73E8]
                  hover:bg-blue-400 active:bg-blue-400 focus:ring
                "
                onClick={handleSubmit}
                type="button"
              >
                Submit
              </button>
            </article>
          </article>
          :
          <article>
            <div className="md:text-[36px] md:mt-[100px] mb-[80px]">
              <p className="">Thank you for contacting us!</p>
              <p className="">We will get back to you at our earliest convenience.</p>
            </div>
            <Link href="/">
              <p className="cursor-pointer text-sm text-[#3D3D3D] underline">Back to Home Page</p>
            </Link>
          </article>
        }
      </div>
    </div>
  )
}

export default ContactUs