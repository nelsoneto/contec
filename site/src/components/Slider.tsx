'use client'
import { Circle } from '@phosphor-icons/react'
import { useCallback, useEffect, useRef, useState } from 'react'

type Item = {
  title: string
  description: string
  image: string
}

const items: Item[] = [
  {
    title: 'Ferrari',
    description:
      'Símbolo italiano, a Ferrari mescla arte e velocidade com seu emblemático vermelho e "cavallino rampante".',
    image:
      'https://images.pexels.com/photos/5759866/pexels-photo-5759866.jpeg?auto=compress&cs=tinysrgb',
  },
  {
    title: 'Lamborghini',
    description:
      'Com design audacioso, a Lamborghini proporciona uma combinação inigualável de adrenalina e elegância.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
  },
  {
    title: 'MC Laren',
    description:
      'Nascida da Fórmula 1, a McLaren é a quintessência da precisão britânica e inovação aerodinâmica.',
    image:
      'https://images.pexels.com/photos/6650819/pexels-photo-6650819.jpeg?auto=compress&cs=tinysrgb',
  },
]

export function Slider() {
  const [currentItem, setCurrentItem] = useState(0)

  const snapRef = useRef<HTMLDivElement>(null)

  const handleItemChange = useCallback(() => {
    const sizeContainer = snapRef.current?.scrollWidth ?? 0
    const sizeItem = (sizeContainer ?? 0) / items.length

    if (currentItem >= items.length - 1) {
      snapRef.current?.scrollBy({ left: -sizeContainer, behavior: 'smooth' })
      setCurrentItem(0)
    } else {
      snapRef.current?.scrollBy({ left: sizeItem, behavior: 'smooth' })
      setCurrentItem((currentItem) => currentItem + 1)
    }
  }, [currentItem])

  useEffect(() => {
    const interval = setInterval(handleItemChange, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [currentItem])

  return (
    <main className="">
      <div className="w-full pb-8 drop-shadow-lg">
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform gap-2 rounded-full bg-white/30 p-2 backdrop-blur-sm">
          {items.map((item) =>
            currentItem === items.indexOf(item) ? (
              <Circle
                key={item.title}
                size={10}
                color="#222222"
                weight="fill"
              />
            ) : (
              <Circle
                key={item.title}
                size={10}
                color="#222222"
                weight="regular"
              />
            ),
          )}
        </div>
        <div
          ref={snapRef}
          className="relative flex snap-x snap-mandatory overflow-x-hidden rounded-2xl"
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="flex min-w-full snap-center justify-center gap-2 rounded-2xl bg-cover bg-center bg-no-repeat p-3"
              style={{
                backgroundImage: `url(${item.image})`,
                height: '400px',
              }}
            >
              <div className="h-fit w-full rounded-lg bg-white/50 px-5 py-2 backdrop-blur-sm">
                <p className="text-lg font-bold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-900">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Slider
