'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import Image from 'next/image'
import contecLogo from '../assets/logo.svg'

export function Header() {
  const Links = [
    { id: 1, name: 'Quem somos?', link: '/' },
    { id: 2, name: 'Soluções', link: '/' },
    { id: 3, name: 'Suporte', link: '/' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed left-0 top-0 z-50 w-full shadow-md">
      <div className="items-center justify-between bg-white px-7 py-2 md:flex md:px-10">
        {/* logo section */}
        <div className="flex cursor-pointer items-center gap-1 text-2xl font-bold">
          <Image
            src={contecLogo}
            alt="Contec Sistemas"
            className="h-auto w-auto"
          />
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer py-0 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </div>
        {/* linke items */}
        <ul
          className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${open ? 'top-12' : 'top-[-490px]'}`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className="my-7 py-2 font-semibold md:my-0 md:ml-8"
            >
              <a
                href={link.link}
                className="text-gray-800 duration-500 hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn rounded bg-blue-600 px-3 py-1 font-semibold text-white duration-500 hover:bg-blue-800 md:static md:ml-8">
            Entrar
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  )
}
