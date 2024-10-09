import PageMidasHeader from './PageMidasHeader'
import PageMidasHero from './PageMidasHero'
import { SettingsTabs } from './SettingsTabs'

export default function pageMidas() {
  return (
    <div className="mx-auto max-h-max w-full text-slate-300">
      <PageMidasHeader />
      <PageMidasHero />
      {/* <PageMidasBody /> */}
      <SettingsTabs />
    </div>
  )
}
