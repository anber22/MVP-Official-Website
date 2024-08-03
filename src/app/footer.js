"use client"; // this is a client component
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const state = {
  menuList: [
    {title: 'How it works', path: ''},
    {title: 'Blog', path: 'Blog'},
    {title: 'Pricing', path: ''},
    {title: 'Log in', path: ''}
  ]
}

export default function Header() {
  

  return (
    <footer className='bg-[--theme-darkblue] w-full text-white py-[3.5rem]'>
      <div className='text-center text-2xl sm:text-[2rem] font-semibold sm:mb-[7.1875rem]'>AI ProShots</div>
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
  )
}