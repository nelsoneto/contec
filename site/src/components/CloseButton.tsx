import { PopoverButton } from '@headlessui/react'
import { X } from 'lucide-react'

export function CloseButton() {
  return (
    <PopoverButton
      className="absolute right-5 top-5 hover:text-zinc-100"
      title="fechar forumlário"
    >
      <X className="h-6 w-6" />
    </PopoverButton>
  )
}
