import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { Search } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="h-2/3 w-full bg-blue-500 px-16 py-24">
        <div></div>
        <p>Texto 1</p>
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
