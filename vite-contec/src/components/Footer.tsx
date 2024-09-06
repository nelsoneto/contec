import contecLogo from '../assets/logo.svg'
export function Footer() {
  return (
    <div className="flex min-h-full justify-between bg-black px-64 py-32">
      <div className="flex flex-col">
        <div className="flex items-center justify-center font-baijamjuree-bold">
          <img
            src={contecLogo}
            alt="Contec Sistemas"
            className="h-auto w-auto"
          />
          <span className="max-w-0 overflow-hidden text-nowrap px-2 text-xl lg:max-w-56">
            <span className="pl-4 lg:pl-0">CONTEC SISTEMAS</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-baijamjuree-bold">Navegue</span>
        <a href="">Lojas de confecções</a>
        <a href="">Supermercados</a>
        <a href="">Panificadoras</a>
        <a href="">Oficinas</a>
        <a href="">Mat. para construções</a>
        <a href="">Industrias</a>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-baijamjuree-bold">Navegue</span>
        <a href="">Inicio</a>
        <a href="">Blog</a>
        <a href="">Suporte</a>
        <a href="">Produtos</a>
      </div>
      <div>
        <span>Vendas</span>
      </div>
    </div>
  )
}
