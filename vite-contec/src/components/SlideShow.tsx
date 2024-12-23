import { useEffect, useState } from 'react'

export default function SlideShow() {
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 4 ? 1 : prev + 1))
    }, 5000)
    return () => clearInterval(int)
  }, [])

  return (
    <div className="relative flex h-[calc(100vh-70px)] w-screen flex-col">
      <div className="absolute top-16 h-full w-full">
        <img
          className="h-full w-full object-cover object-center"
          sizes="100vw"
          alt="Image"
          src={`../assets/img_${page}.jpg`}
        />
      </div>
      <div className="absolute bottom-8 left-10 rounded-md bg-slate-900 px-6 py-4 text-gray-200 opacity-70">
        <h2 className="font-alt text-4xl">Beautiful landscape</h2>
        <p className="text-2xl">The magic of nature!</p>
      </div>
    </div>
  )
}
