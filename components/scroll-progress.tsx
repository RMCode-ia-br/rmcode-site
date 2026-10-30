'use client'

import { useEffect, useRef } from 'react'

/** Barra fina no topo que mostra o quanto da página já foi percorrido. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (ref.current) ref.current.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        ref={ref}
        style={{ transform: 'scaleX(0)' }}
        className="h-full origin-left bg-linear-to-r from-primary via-neon to-accent"
      />
    </div>
  )
}
