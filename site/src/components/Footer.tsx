import { Mail, MapPin, Phone } from 'lucide-react'
export function Footer() {
  return (
    <div className="absolute max-h-full w-full">
      <div className="grid grid-cols-1 gap-8 bg-slate-950 px-10 py-16 xl:grid-cols-3 xl:justify-items-center xl:px-24 xl:py-32">
        <div className="flex w-60 flex-col gap-3">
          <span className="font-alt">Contato</span>
          <span className="flex-1 items-center gap-4 md:flex">
            <MapPin className="h-3 w-3 md:h-4 md:w-4" />{' '}
            <p className="w-36 text-xs md:text-sm">
              Rua Jacundá 4284 Ariquemes Rondônia.
            </p>
          </span>
          <span className="flex-1 items-center gap-4 md:flex">
            <Phone className="h-3 w-3 md:h-4 md:w-4" />
            <p className="text-xs md:text-sm">(69)3535-6826</p>
          </span>
          <span className="flex-1 items-center gap-4 md:flex">
            <Mail className="h-3 w-3 md:h-4 md:w-4" />
            <p className="text-xs md:text-sm">contato@contecsistemas.com.br</p>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-alt">Seguimentos</span>
          <a href="">Lojas de confecções</a>
          <a href="">Supermercados</a>
          <a href="">Panificadoras</a>
          <a href="">Oficinas</a>
          <a href="">Mat. para construções</a>
          <a href="">Industrias</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-alt">Navegue</span>
          <a href="">Inicio</a>
          <a href="">Blog</a>
          <a href="">Suporte</a>
          <a href="">Produtos</a>
        </div>
      </div>
      <div className="flex h-20 w-full items-center justify-center bg-slate-950 text-[12px] sm:text-sm">
        <h1 className="text-center">
          © 2024 Contec Sistemas - Todos os direitos reservados
        </h1>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-teal-300 via-blue-400 to-blue-500"></div>
    </div>
  )
}
