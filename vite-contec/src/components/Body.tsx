import {
  BrickWall,
  Coffee,
  Factory,
  Shirt,
  ShoppingCart,
  Wrench,
} from 'lucide-react'

export function Body() {
  return (
    <div className="h-auto bg-slate-900">
      <div className="flex h-full w-full flex-col items-center space-y-2 bg-pattern bg-center bg-no-repeat px-6 py-8 xl:px-60 xl:py-10">
        <div className="flex flex-col gap-10 text-center font-baijamjuree-bold md:px-10">
          <h1 className="text-3xl md:text-5xl">
            Conheça nosso softwares e os diversos segmentos que eles oferecem
            soluções:
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            excepturi asperiores quasi temporibus fugiat nemo perspiciatis
            tenetur, dolores quo delectus est nulla quod alias magnam enim modi
            fuga eos expedita?
          </p>
        </div>

        <div className="grid grid-cols-3 justify-center gap-8 py-14 text-center font-baijamjuree-bold text-xs md:text-2xl xl:gap-32">
          <div>
            <a
              href="/solutions"
              className="flex flex-col items-center justify-center gap-6"
            >
              Lojas de confecções
              <Shirt className="h-8 w-8 md:h-16 md:w-16" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <h1>Supermercados</h1>
            <ShoppingCart className="h-8 w-8 md:h-16 md:w-16" />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <h1>Panificadoras</h1>
            <Coffee className="h-8 w-8 md:h-16 md:w-16" />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <h1>Oficinas</h1>
            <Wrench className="h-8 w-8 md:h-16 md:w-16" />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1>Materiais para construções</h1>
            <BrickWall className="h-8 w-8 md:h-16 md:w-16" />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <h1>Industrias</h1>
            <Factory className="h-8 w-8 md:h-16 md:w-16" />
          </div>
        </div>
      </div>
    </div>
  )
}
