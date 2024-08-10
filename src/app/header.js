"use client"; // this is a client component
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const state = {
  menuList: [
    {title: 'How it works', path: ''},
    {title: 'Blog', path: 'blog'},
    {title: 'Pricing', path: ''},
    {title: 'Log in', path: ''}
  ]
}
const collapsePaneStyle = 'z-3 top-[63px] sm:top-[55px] absolute left-[0] w-full bg-white max-lg:block text-red rounded-b-2xl shadow-xl'

export default function Header() {
  // miniMenu switch
  let [menuCollapseSwitch, setMenuCollapse] = useState(false)
  const handleSetMenuCollapseSwitch = () => setMenuCollapse(!menuCollapseSwitch)

  return (
    <header className="z-40 w-full items-center justify-between text-sm flex px-3 lg:px-12 sticky top-0 py-4 sm:pt-6 bg-white">
      <div className=" bottom-0 left-0 flex h-auto items-end bg-gradient-to-t from-white via-white static ">
        <a
          className="pointer-events-auto flex place-items-center gap-2 p-0"
          href="/"
          rel=""
        >
          <Image
            className="w-8 lg:w-10"
            src="/home/logo.png"
            sizes={100} 
            alt="AI photos"
            width={0}
            height={0}
            priority
          />
            <span className="font-semibold text-[18px] md:text-2xl">AI ProShots</span>
        </a>
      </div>
      <ul className={`${menuCollapseSwitch ? collapsePaneStyle : 'lg:flex max-lg:hidden grow justify-end gap-x-8 mr-8'}`}>
        {
          state.menuList.map((menuItem, index) => {
            return (
              <li className="cursor-pointer text-[18px] group-max-md:leading-loos block px-3 py-4" key={index}>
                <Link href={menuItem.path}>
                  {menuItem.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <nav className="flex flex-between gap-x-11 text-[1.125rem]">
        <div className="flex gap-x-8">
          <button className="text-[14px] md:text-[18px] cursor-pointer block bg-[--theme-blue] px-6 md:px-[40px] lg:px-[60px] py-[3px] rounded-[50px] text-white hover:bg-blue-400 active:bg-blue-400 focus:ring">Get Access</button>
          <Image
            onClick={handleSetMenuCollapseSwitch}
            className="w-6 h-6 lg:hidden"
            src="/home/menu.png"
            alt=""
            width={0}
            height={0}
            sizes="100%"
            priority
          />
        </div>
      </nav>
    </header>
  )
}