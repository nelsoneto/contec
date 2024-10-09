'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative p-2 font-alt text-sm hover:bg-slate-800 hover:text-blue-400 data-[state=active]:bg-slate-800 data-[state=active]:text-blue-400"
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="bg-blue-400 xl:absolute xl:-bottom-0.5 xl:left-0 xl:right-0 xl:h-0.5"
        />
      )}
    </Tabs.Trigger>
  )
}
