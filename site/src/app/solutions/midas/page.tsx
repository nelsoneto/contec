import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import Image from 'next/image'
import erpImg from '../../../../public/images/Midas-menu.png'
import img2 from '../../../../public/images/perguntas.jpg'

export default function Hero() {
  return (
    <div className="mx-auto max-h-max w-full text-slate-300">
      <div className="gap-2 text-pretty xl:flex-col">
        <div className="mt-16 flex h-full w-full justify-center bg-gradient-to-r from-blue-900 via-sky-700 to-emerald-700 py-4">
          <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text px-1 font-alt text-6xl text-transparent">
            MIDAS
          </h1>
        </div>
        <div className="py-4 text-center">
          <h2 className="font-alt text-4xl">
            A nossa solução mais{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text px-1 text-transparent">
              completa para sua empresa.
            </span>
          </h2>
        </div>
      </div>

      <div className="flex w-auto flex-col space-y-8 bg-slate-950 py-4 xl:px-72">
        <div className="w-full">
          <div className="justify-cente flex flex-col items-center">
            <Image
              src={erpImg}
              alt="Sistema MIDAS"
              className="h-4/6 w-4/6 rounded-md border-8 border-slate-500 object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-10 py-4">
            <h1 className="text-justify text-lg">
              O sistema MIDAS é uma solução completa para a sua empresa. Simples
              de operar, tornando as vendas de balcões em atendimento rápido,
              prático, eficiente e seguro.
            </h1>
            <h2 className="py-4 font-alt text-4xl">
              Conheça as características técnicas do{' '}
              <span className="text-blue-400">MIDAS</span>
            </h2>
          </div>
          <div className="grid h-full w-full xl:grid-cols-2">
            <div className="w-full py-4 text-justify">
              <ul className="list-disc px-8">
                <li className="font-alt text-blue-400">Controle financeiro</li>{' '}
                <p>
                  Renegociações, fluxo de caixa, gestão de contas a pagar e a
                  receber, grupos de receitas e despesas, cenro de custo,
                  controle de comissões e vendas.
                </p>
                <li className="font-alt text-blue-400">Estoque</li>{' '}
                <p>
                  Cadastro, controle, histórico, movimentação, condicional,
                  importação do XML na entrada, com cadastramento automático do
                  produto, controle de unidades.
                </p>
                <li className="font-alt text-blue-400">Cadastros</li>
                <p>
                  Clientes, fornecedores, funcionários, convênios, contas e
                  bancos.
                </p>
                <li className="font-alt text-blue-400">Fiscal</li>
                <p>
                  Emissão Nota Fiscal Eletrônica, EFD IMCS/IPI (SPED Fiscal) e
                  EFD Contribuições, CT-e, CC-e, NFC-e, MDF-e.
                </p>
                <li className="font-alt text-blue-400">Produção</li>
                <p>
                  Cadastro de receitas para produtos idustrializado com baixa
                  automática de insumos na produção.
                </p>
                <li className="font-alt text-blue-400">Ordem de serviços</li>
                <p>Criação de controle sobre serviços prestados.</p>
              </ul>
            </div>
            <div className="w-full py-4 text-justify">
              <ul className="list-disc px-8">
                <li className="font-alt text-blue-400">Controle de entregas</li>{' '}
                <p>
                  Agendamento de entrega de produtos, relatórios de itens a
                  entregar e previsão de entregas.
                </p>
                <li className="font-alt text-blue-400">
                  Conferência de movimento
                </li>{' '}
                <p>
                  Conferência de saídas de produtos com leitura de código de
                  barras e impressão de etiquetas.
                </p>
                <li className="font-alt text-blue-400">Agendas</li>
                <p>
                  Agendamento de serviços com geração de ordem de serviços.
                  Agedamento de cobrança com emissão de cobrança.
                </p>
                <li className="font-alt text-blue-400">Força de Vendas</li>
                <p>Módulo PDV (supermercados) venda, Tablets e Smartphones.</p>
                <li className="font-alt text-blue-400">Atualização</li>
                <p>
                  Sistema atualizado com as últimas exigências relacioadas a
                  emissão de NF-e e NFC-e.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full items-center justify-center bg-slate-800 py-10 xl:grid-cols-2 xl:px-80">
        <div className="flex justify-center">
          <Image
            src={img2}
            alt="Perguntas frequentes"
            className="relative h-96 w-96 rounded-md border-8 border-slate-500 object-cover"
          />
        </div>
        <div className="font-alt text-xl">
          <h2 className="text-2xl text-blue-400">Perguntas Frequentes:</h2>
          <Disclosure>
            <DisclosureButton className="py-2 text-start">
              É preciso de internet para usar o sistema MIDAS?
            </DisclosureButton>
            <DisclosurePanel className="text-start text-blue-400">
              Não. Apenas para emissão de Notas.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="py-2 text-start">
              O MIDAS PDV é um produto separado?
            </DisclosureButton>
            <DisclosurePanel className="text-start text-blue-400">
              Não. O MIDAS PDV vem integrado com a instalação do MIDAS, entre em
              contato conosco para configurar.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="py-2 text-start">
              O suporte local é agendado?
            </DisclosureButton>
            <DisclosurePanel className="text-start text-blue-400">
              Sim. Pedimos para agendar com 1 dia de antecedencia.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="my-4 border-t border-slate-800"></div>
    </div>
  )
}
