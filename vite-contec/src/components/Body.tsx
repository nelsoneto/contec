import {
  BrickWall,
  Coffee,
  Factory,
  Headset,
  Shirt,
  ShoppingCart,
  Wrench,
} from 'lucide-react'

export function Body() {
  return (
    <div className="h-auto">
      <div className="h-auto bg-slate-900 text-zinc-300">
        <div className="flex h-full w-full flex-col items-center space-y-2 bg-pattern bg-center bg-no-repeat px-6 py-8 xl:px-60 xl:py-10">
          <div className="flex flex-col gap-10 text-left font-baijamjuree-bold md:px-10 md:text-center">
            <h1 className="text-3xl md:text-5xl">
              Conheça nosso softwares e os diversos segmentos que eles oferecem
              soluções:
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              excepturi asperiores quasi temporibus fugiat nemo perspiciatis
              tenetur, dolores quo delectus est nulla quod alias magnam enim
              modi fuga eos expedita?
            </p>
          </div>

          <div className="grid justify-center gap-8 px-4 py-14 text-center font-baijamjuree-bold sm:grid-cols-2 md:text-lg xl:grid-cols-3">
            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <a
                href="/solutions"
                className="flex flex-col items-center justify-center gap-6"
              >
                CONFECÇÕES
                <Shirt className="h-8 w-8 md:h-16 md:w-16" />
              </a>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <a
                href="/solutions"
                className="flex flex-col items-center justify-center gap-6"
              >
                SUPERMERCADOS
                <ShoppingCart className="h-8 w-8 md:h-16 md:w-16" />
              </a>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <a
                href="/solutions"
                className="flex flex-col items-center justify-center gap-6"
              >
                PANIFICADORAS
                <Coffee className="h-8 w-8 md:h-16 md:w-16" />
              </a>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <a
                href="/solutions"
                className="flex flex-col items-center justify-center gap-6"
              >
                OFICINAS
                <Wrench className="h-8 w-8 md:h-16 md:w-16" />
              </a>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <a
                href="/solutions"
                className="flex flex-col items-center justify-center gap-6"
              >
                MATERIAIS PARA CONSTRUÇÕES
                <BrickWall className="h-8 w-8 md:h-16 md:w-16" />
              </a>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <a
                href="/solutions"
                className="flex flex-col items-center justify-center gap-6"
              >
                INDUSTRIAS
                <Factory className="h-8 w-8 md:h-16 md:w-16" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 px-8 py-8 text-zinc-300 lg:px-60">
        <div className="sm:flex sm:items-center sm:justify-around sm:gap-12">
          <div className="flex h-52 w-80 flex-col items-center justify-center gap-8 text-center">
            <Headset className="h-10 w-10" />
            <div className="flex flex-col gap-2 font-baijamjuree-bold">
              <h2 className="text-2xl text-blue-300">Suporte</h2>
              <p className="">
                Suporte técnico rápido e personalizado, sem limites de chamadas
                e atendimento no local nas regiões.
              </p>
            </div>
          </div>
          <div className="flex h-52 w-80 flex-col items-center justify-center gap-8 text-center">
            <Headset className="h-10 w-10" />
            <div className="flex flex-col gap-2 font-baijamjuree-bold">
              <h2 className="text-2xl text-blue-300">Suporte</h2>
              <p className="">
                Suporte técnico rápido e personalizado, sem limites de chamadas
                e atendimento no local nas regiões.
              </p>
            </div>
          </div>
          <div className="flex h-52 w-80 flex-col items-center justify-center gap-8 text-center">
            <Headset className="h-10 w-10" />
            <div className="flex flex-col gap-2 font-baijamjuree-bold">
              <h2 className="text-2xl text-blue-300">Suporte</h2>
              <p className="">
                Suporte técnico rápido e personalizado, sem limites de chamadas
                e atendimento no local nas regiões.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
