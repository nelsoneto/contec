import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export function Dropdown() {
  return (
    <Popover className="relative">
      <PopoverButton className="rounded-md border border-transparent px-3 py-2 text-zinc-100 hover:border-blue-400 focus:border-blue-400 focus:outline-none">
        Soluções
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="z-50 mt-2 flex flex-col space-y-4 rounded-md bg-slate-500 p-4 font-baijamjuree-regular"
      >
        <a className="rounded-md p-2 hover:bg-blue-400" href="/solutions">
          MIDAS
        </a>
        <a className="rounded-md p-2 hover:bg-blue-400" href="/solutions">
          PDVMIDAS
        </a>
        <a className="rounded-md p-2 hover:bg-blue-400" href="/solutions">
          Frigorifico
        </a>
        <a className="rounded-md p-2 hover:bg-blue-400" href="/solutions">
          Minério
        </a>
      </PopoverPanel>
    </Popover>
  )
}
