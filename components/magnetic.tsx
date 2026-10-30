'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'

type MagneticProps = {
  children: ReactNode
  className?: string
  /** Fração do deslocamento do cursor aplicada ao elemento. */
  strength?: number
  /** Deslocamento máximo em px. */
  max?: number
}

/** Atrai o conteúdo levemente na direção do cursor; volta ao lugar com um leve "mola". */
export function Magnetic({ children, className, strength = 0.3, max = 10 }: MagneticProps) {
  const inner = useRef<HTMLDivElement>(null)

  const enabled = () => window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches
  const clamp = (n: number) => Math.max(-max, Math.min(max, n))

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = inner.current
    if (!el || !enabled()) return
    const rect = event.currentTarget.getBoundingClientRect()
    const dx = clamp((event.clientX - (rect.left + rect.width / 2)) * strength)
    const dy = clamp((event.clientY - (rect.top + rect.height / 2)) * strength)
    el.style.transition = 'transform 120ms ease-out'
    el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
  }

  const handleLeave = () => {
    const el = inner.current
    if (!el) return
    el.style.transition = 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)'
    el.style.transform = ''
  }

  // O contêiner externo fica parado para a área de captura não fugir do cursor.
  return (
    <div onPointerMove={handleMove} onPointerLeave={handleLeave} className={className}>
      <div ref={inner} className="w-full">
        {children}
      </div>
    </div>
  )
}
