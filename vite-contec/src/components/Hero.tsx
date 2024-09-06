import { useState } from 'react'
import heroImg from '../assets/responsive-contec.svg'

export function Hero() {
  const [isOpenDiaryButton, setIsOpenDiaryButton] = useState(false)

  function openDiaryButton() {
    setIsOpenDiaryButton(true)
  }

  function closeDiaryButton() {
    setIsOpenDiaryButton(false)
  }

  return (
    <section className="bg-slate-900 px-6 py-20 xl:px-72 xl:py-16">
      <div className="grid w-full items-center justify-center gap-7 rounded-lg p-10 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg px-2 py-2 text-center lg:text-left">
          <span className="rounded-md font-baijamjuree-bold text-2xl text-zinc-300 md:text-3xl lg:text-4xl">
            <span className="bg-blue-300 px-0 py-0 text-neutral-800">
              Conheça nossas soluções
            </span>{' '}
            sua gestão com nossas soluções que impulsionam resultados e
            eficiência.
          </span>
          <button
            onClick={openDiaryButton}
            className="mb-6 rounded-md bg-blue-600 px-4 py-3 text-base text-zinc-200 hover:ring-2 hover:ring-blue-200 hover:ring-offset-1"
          >
            Agenda uma demonstração gratis por 30 dias.
          </button>
          {isOpenDiaryButton && (
            <div className="space-y-2">
              <h1>Teste e avalie o MIDAS e PDVMIDAS por 30 dias</h1>
              <button
                onClick={closeDiaryButton}
                className="rounded-md bg-blue-600 px-4 py-2 text-lg text-zinc-200 hover:ring-2 hover:ring-blue-200 hover:ring-offset-1"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
        <div className="rounded-lg bg-blue-500 p-4 shadow-md ring-8 ring-blue-200">
          <img
            alt="city"
            src={heroImg}
            className="h-auto w-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
