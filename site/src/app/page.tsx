import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import SlideShow from '@/components/SlideShow'
import { Search } from 'lucide-react'

export default function Home() {
  return (
    <>
      <SlideShow />
      <div className="h-2/3 w-full bg-blue-500 px-16 py-24">
        <div className="grid grid-cols-2 items-center gap-4 py-28">
          <div className="w-auto text-wrap bg-slate-800">
            <p className="font-alt text-3xl text-gray-100">
              A Solução para automatizar processos e otimizar resultados em sua
              empresa.
            </p>
          </div>
          <div className="h-52 w-2/3 bg-slate-500">texto</div>
        </div>
      </div>
      <div className="h-2/3 w-full bg-blue-400 px-16 py-4">
        <p>Texto 2</p>
      </div>
      <div className="h-2/3 w-full divide-y-2 divide-gray-800 bg-blue-300 px-16 py-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <p>Texto 3</p>
      </div>
      <div className="mx-auto max-w-7xl">
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl />
        </InputRoot>
      </div>
    </>
  )
}
