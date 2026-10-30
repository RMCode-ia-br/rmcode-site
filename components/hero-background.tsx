'use client'

import { useEffect, useRef } from 'react'

/** Fundo do hero: grade e manchas de luz que flutuam e deslizam em parallax com o scroll. */
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const y = Math.min(window.scrollY, 900)
      ref.current?.style.setProperty('--py', String(y))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid hero-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="hero-blob absolute left-1/2 top-0 h-[480px] w-[900px] max-w-full -translate-x-1/2">
        <div className="hero-blob-inner size-full rounded-full bg-primary/20 blur-[140px]" />
      </div>
      <div className="hero-blob-slow absolute right-[6%] top-28 h-[320px] w-[420px] max-w-full">
        <div className="hero-blob-inner-slow size-full rounded-full bg-accent/15 blur-[120px]" />
      </div>
    </div>
  )
}
