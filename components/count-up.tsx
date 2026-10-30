'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  suffix?: string
  duration?: number
  /** Atraso em ms depois que o número entra na tela. */
  delay?: number
}

export function CountUp({ to, suffix = '', duration = 1600, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    let raf = 0
    let timer = 0
    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - t, 4))))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          timer = window.setTimeout(run, delay)
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [to, duration, delay])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  )
}
