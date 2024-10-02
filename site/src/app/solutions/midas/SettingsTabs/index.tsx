'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

import Image from 'next/image'
import cadastroImg from '../../../../../public/images/Cadastro.png'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="h-screen w-full py-10"
      defaultValue="tab1"
    >
      <Tabs.List className="flex justify-center gap-4" aria-label="Categoria">
        <TabItem
          value="tab1"
          title="Cadastros"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Produtos/Serviços"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Pedido"
          isSelected={currentTab === 'tab3'}
        />
        <TabItem
          value="tab4"
          title="Ordem de Serviços"
          isSelected={currentTab === 'tab4'}
        />
        <TabItem value="tab5" title="PDV" isSelected={currentTab === 'tab5'} />
        <TabItem value="tab6" title="NF-e" isSelected={currentTab === 'tab6'} />
        <TabItem
          value="tab7"
          title="Financeiro"
          isSelected={currentTab === 'tab7'}
        />
        <TabItem
          value="tab8"
          title="Entradas/Compras"
          isSelected={currentTab === 'tab8'}
        />
        <TabItem
          value="tab9"
          title="Relatórios"
          isSelected={currentTab === 'tab9'}
        />
      </Tabs.List>

      <div className="w-auto border-t border-slate-700" />
      <Tabs.Content
        className="flex flex-col items-center justify-center"
        value="tab1"
      >
        <div className="grid grid-cols-2 py-10">
          <div className="flex items-center justify-center px-10">
            <ul className="list-disc">
              <li>oaskoasdkfoaskdf</li>
              <li>oaskoasdkfoaskdf</li>
              <li>oaskoasdkfoaskdf</li>
              <li>oaskoasdkfoaskdf</li>
              <li>oaskoasdkfoaskdf</li>
            </ul>
          </div>
          <div className="flex w-full justify-start bg-slate-500 px-10">
            <Image src={cadastroImg} alt="Cadastro de Pessoas" className="" />
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content
        className="flex flex-col items-center justify-center"
        value="tab2"
      >
        <span>tdasfasdfsaab2</span>
      </Tabs.Content>
      <Tabs.Content
        className="flex flex-col items-center justify-center"
        value="tab3"
      >
        <span>tab3</span>
      </Tabs.Content>
    </Tabs.Root>
  )
}
