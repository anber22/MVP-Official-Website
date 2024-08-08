"use client"; // this is a client component
import { useState } from 'react'
import Link from 'next/link'

const state = {
  menuList: [
    {title: 'Terms & Conditions', path: 'terms-and-conditions'},
    {title: 'Privacy Policy', path: 'privacy-policy'},
    {title: 'Sitemap', path: '/'},
    {title: 'Contact Us', path: 'contact-us'}
  ]
}

export default function Header() {
  

  return (
    <footer className='bg-[--theme-darkblue] w-full text-white py-[3.5rem]'>
      <div className='text-center text-2xl sm:text-[2rem] font-semibold sm:mb-[7.1875rem]'>AI ProShots</div>
      <article className='flex justify-around max-sm:hidden'>
        <div className='flex gap-x-[4.125rem] text-sm'>
          {
            state.menuList.map((menuItem, index) => {
              return (
                <li className='cursor-pointer group-max-md:leading-loos block px-3 py-4' key={index}>
                  <Link href={menuItem.path}>
                    {menuItem.title}
                  </Link>
                </li>
              )
            })
          }
        </div>
        <span>© 2024 AI ProShots All Rights Reserved</span>
      </article>
    </footer>
  )
}