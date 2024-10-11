import { ArrowUpDown, MonitorDown } from 'lucide-react'
import Image from 'next/image'
import anyDeskImg from '../../../public/images/AnyDesk.png'
import teamViewerImg from '../../../public/images/TeamViewer.png'
import whatsAppImg from '../../../public/images/WhatsApp.png'
import PagePerguntas from './PagePerguntas'

export default function newTest() {
  return (
    <div className="mx-auto max-h-max w-full text-slate-300">
      <div className="mt-16 flex h-full w-full justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-700 to-blue-900 py-4">
        <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text px-1 font-alt text-4xl text-transparent">
          Central de atendimento
        </h1>
        <a
          href="https://wa.me/556999705453"
          rel="noopener noreferrer"
          target="_blank"
          className="hidden items-center justify-center gap-2 text-center font-alt text-4xl xl:flex"
        >
          <Image
            src={whatsAppImg}
            alt="WhatsApp"
            className="w-10 object-cover"
          />
          (69)99970-5453
        </a>
        <a href="">(69)3535-6826</a>
      </div>
      <div className="flex flex-col items-center justify-center py-10 text-2xl">
        <h1 className="font-alt text-3xl">Downloads Importantes</h1>
        <div className="grid grid-cols-4 gap-8 p-10">
          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-lg shadow-blue-300 outline outline-offset-2">
            <span className="font-alt">Acesso Remoto</span>
            <div className="flex flex-col gap-2 py-4 text-base">
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <a href="">
                  <Image
                    src={teamViewerImg}
                    alt="Team Viewer"
                    className="w-36 object-cover p-2"
                  />
                </a>
              </span>
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <a href="">
                  <Image
                    src={anyDeskImg}
                    alt="AnyDesk"
                    className="w-36 object-cover p-2"
                  />
                </a>
              </span>
            </div>
          </div>

          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-lg shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">MIDAS</span>
            <div className="flex flex-col gap-4 py-4 text-lg">
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <a href="" className="flex gap-4 p-2">
                  <MonitorDown className="" />
                  <p className="text-slate-800">Instalação</p>
                </a>
              </span>
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <a href="" className="flex gap-2 p-2">
                  <ArrowUpDown />
                  <p className="text-slate-800">Atualização</p>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <PagePerguntas />
    </div>
  )
}
