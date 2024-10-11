import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import img2 from '../../../public/images/perguntas.jpg'

export default function PagePerguntas() {
  return (
    <>
      <h2 className="flex justify-center bg-slate-800 py-6 font-alt text-3xl text-blue-400">
        Perguntas Frequentes:
      </h2>
      <div className="grid w-full items-center justify-center bg-slate-800 py-10 xl:grid-cols-2 xl:px-80">
        <div className="mb-4 flex items-center justify-center">
          <Image
            src={img2}
            alt="Perguntas frequentes"
            className="relative h-96 w-96 rounded-md border-8 border-slate-400 object-cover"
          />
        </div>
        <div className="mb-4 px-10 font-alt text-xl">
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between py-2 text-start">
              É preciso de internet para usar o sistema MIDAS?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="flex px-2 pb-4 text-start font-sans text-blue-400">
              Não. O MIDAS não é um sistema on-line. Internet seria necessário
              apenas para emissão de Notas.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between gap-4 py-2 text-start">
              O MIDAS PDV é um produto separado?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="px-2 pb-4 text-start font-sans text-blue-400">
              Não. O MIDAS PDV vem integrado com a instalação do proprio MIDAS,
              entre em contato conosco para configurar.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between gap-4 py-2 text-start">
              O suporte local tem que ser agendado?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="px-2 pb-4 text-start font-sans text-blue-400">
              Sim. Pedimos para agendar com 1 dia de antecedencia.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between gap-4 py-2 text-start">
              Quais são os tipos de Notas o MIDAS faz?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="px-2 pb-4 text-start font-sans text-blue-400">
              O MIDAS gera e transmite notas, NF-e, NFC-e, MDF-e, CT-e, NFS-e.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </>
  )
}
