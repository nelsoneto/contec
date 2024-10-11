import { ArrowUpDown, Download, MonitorDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import anyDeskImg from '../../../public/images/AnyDesk.png'
import teamViewerImg from '../../../public/images/TeamViewer.png'
import whatsAppImg from '../../../public/images/WhatsApp.png'
import PagePerguntas from './PagePerguntas'

export default function newTest() {
  return (
    <div className="mx-auto max-h-max w-full text-slate-300">
      <div className="mt-16 flex h-full w-full items-center justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-700 to-blue-900 py-4 pt-6">
        <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text px-1 font-alt text-4xl text-transparent">
          Suporte técnico
        </h1>
        <Link
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
        </Link>
        <a href="">(69)3535-6826</a>
      </div>
      <div className="flex flex-col items-center justify-center py-10 text-2xl">
        <h1 className="font-alt text-3xl">Downloads Importantes:</h1>
        <div className="grid grid-cols-4 gap-8 p-10">
          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">Acesso Remoto</span>
            <div className="flex flex-col gap-2 py-4 text-base">
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/AcessoRemoto.exe"
                  download="AcessoRemoto.exe"
                >
                  <Image
                    src={teamViewerImg}
                    alt="Team Viewer"
                    className="w-36 object-cover p-2"
                  />
                </Link>
              </span>
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <Link href="downloads/AnyDesk.exe" download="AnyDesk.exe">
                  <Image
                    src={anyDeskImg}
                    alt="AnyDesk"
                    className="w-36 object-cover p-2"
                  />
                </Link>
              </span>
            </div>
          </div>

          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">MIDAS 2.21</span>
            <div className="flex flex-col gap-1 text-base">
              <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="downloads/midas_221_firebird5_setup.exe"
                  download="midas_221_firebird5_setup.exe"
                  className="flex gap-4 p-2"
                >
                  <MonitorDown className="" />
                  <p className="font-bold text-slate-800">Instalação</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="downloads/midas_221_update.exe"
                  download="midas_221_update.exe"
                  className="flex gap-2 p-2"
                >
                  <ArrowUpDown />
                  <p className="font-bold text-slate-800">Atualização</p>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">Versões</span>
            <div className="flex flex-col gap-1 text-lg">
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/MIDAS 2.20B2447.zip"
                  download="MIDAS 2.20B2447.zip"
                  className="flex gap-4 p-2"
                >
                  <Download className="" />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS2.20B2447
                  </p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/MIDAS 2.20B2446.zip"
                  download="MIDAS 2.20B2446.zip"
                  className="flex gap-4 p-2"
                >
                  <Download className="" />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS2.20B2446
                  </p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/MIDAS 2.19R1B2418.zip"
                  download="MIDAS 2.19R1B2418.zip"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS2.19R1B2418
                  </p>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2">
            <span className="flex justify-center font-alt">Utilitários</span>
            <div className="flex flex-col gap-1 text-base">
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/Firebird-2.5.9.27139_0_Win32.exe"
                  download="Firebird-2.5.9.27139_0_Win32.exe"
                  className="flex gap-2 p-2"
                >
                  <Download className="" />
                  <p className="font-bold text-slate-800">Firebird-2.5.9</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/Firebird-5.0.0.1306-0-windows-x64.exe"
                  download="Firebird-5.0.0.1306-0-windows-x64.exe"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="font-bold text-slate-800">Firebird-5.0.0</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="downloads/ifb.exe"
                  download="ifb.exe"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="font-bold text-slate-800">IFB</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <PagePerguntas />
    </div>
  )
}
