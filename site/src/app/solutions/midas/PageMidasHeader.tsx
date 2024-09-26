import Image from 'next/image'
import erpImg from '../../../../public/images/Midas-menu.png'

export default function PageMidasHeader() {
  return (
    <div>
      <div className="gap-2 text-pretty xl:flex-col">
        <div className="mt-16 flex h-full w-full justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-700 to-emerald-700 py-4">
          <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text px-1 font-alt text-6xl text-transparent">
            MIDAS
          </h1>
          <h2 className="flex items-center justify-center text-center font-alt text-4xl">
            A nossa solução mais{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-300 bg-clip-text px-1 text-transparent">
              completa para sua empresa.
            </span>
          </h2>
        </div>

        <div className="items-center text-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={erpImg}
              alt="Sistema MIDAS"
              className="h-4/6 w-4/6 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-r from-emerald-700 via-sky-700 to-blue-900 px-72 py-4">
        <h1 className="mb-4 text-center font-alt text-4xl">
          Simples de operar, tornando as vendas de balcões em atendimento
          rápido, prático, eficiente e seguro.
        </h1>
      </div>
    </div>
  )
}
