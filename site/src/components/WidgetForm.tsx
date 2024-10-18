import { CloseButton } from './CloseButton'

export function WidgetForm() {
  return (
    <div className="relative mb-4 flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-zinc-900 p-4 shadow-lg md:w-auto">
      <header>
        <CloseButton />
      </header>
      Hello World
    </div>
  )
}
