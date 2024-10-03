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
      className="relative p-2 font-alt text-lg hover:text-blue-400 data-[state=active]:text-blue-400"
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-blue-400"
        />
      )}
    </Tabs.Trigger>
  )
}
