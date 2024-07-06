import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import contecLogo from '../assets/logo.svg'

export function Navbar() {
  const Links = [
    { id: 1, name: 'Quem somos?', link: '/' },
    { id: 2, name: 'Soluções', link: '/' },
    { id: 3, name: 'Suporte', link: '/' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed left-0 top-0 z-50 w-full shadow-md">
      <div className="items-center justify-between bg-slate-800 px-7 py-2 md:flex md:px-10">
        {/* logo section */}
        <div className="flex cursor-pointer items-center gap-1 text-2xl font-bold">
          <img
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
          className={`absolute left-0 z-[-1] w-full bg-slate-800 pb-12 pl-9 transition-all duration-500 ease-linear md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${open ? 'top-12' : 'top-[-490px]'}`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className="my-7 py-2 font-semibold md:my-0 md:ml-8"
            >
              <a
                href={link.link}
                className="rounded border-2 border-transparent px-3 py-2 text-zinc-100 duration-500 hover:border-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="rounded border-2 border-transparent bg-blue-600 px-3 py-1 font-semibold text-zinc-100 duration-500 hover:border-blue-400 md:static md:ml-8">
            Entrar
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  )
}
