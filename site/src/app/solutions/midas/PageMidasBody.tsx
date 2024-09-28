import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import Image from 'next/image'
import img2 from '../../../../public/images/perguntas.jpg'

export default function PageMidasBody() {
  return (
    <>
      <div className="grid w-full items-center justify-center bg-slate-800 py-10 xl:grid-cols-2 xl:px-80">
        <div className="mb-4 flex items-center justify-center">
          <Image
            src={img2}
            alt="Perguntas frequentes"
            className="relative h-96 w-96 rounded-md border-8 border-slate-500 object-cover"
          />
        </div>
        <div className="mb-4 px-10 font-alt text-xl">
          <h2 className="py-6 text-2xl text-blue-400">Perguntas Frequentes:</h2>
          <Disclosure>
            <DisclosureButton className="py-2 text-start">
              É preciso de internet para usar o sistema MIDAS?
            </DisclosureButton>
            <DisclosurePanel className="p-1 text-start font-sans text-slate-500">
              Não. O MIDAS não é um sistema on-line. Internet seria necessário
              apenas para emissão de Notas.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="py-2 text-start">
              O MIDAS PDV é um produto separado?
            </DisclosureButton>
            <DisclosurePanel className="p-1 text-start font-sans text-slate-500">
              Não. O MIDAS PDV vem integrado com a instalação do proprio MIDAS,
              entre em contato conosco para configurar.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="py-2 text-start">
              O suporte local tem que ser agendado?
            </DisclosureButton>
            <DisclosurePanel className="p-1 text-start font-sans text-slate-500">
              Sim. Pedimos para agendar com 1 dia de antecedencia.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </>
  )
}
