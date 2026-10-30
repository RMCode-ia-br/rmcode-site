'use client'

import type { ElementType, PointerEvent, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SpotlightProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
}

/** Cartão com um brilho suave que acompanha o cursor (estilo definido em globals.css). */
export function Spotlight({ children, className, as = 'div' }: SpotlightProps) {
  const Tag = as as ElementType

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    // Compensa a escala aplicada no hover para o brilho ficar sob o cursor.
    const scale = el.offsetWidth ? rect.width / el.offsetWidth : 1
    el.style.setProperty('--mx', `${(event.clientX - rect.left) / scale}px`)
    el.style.setProperty('--my', `${(event.clientY - rect.top) / scale}px`)
  }

  return (
    <Tag onPointerMove={handlePointerMove} className={cn('spotlight', className)}>
      {children}
    </Tag>
  )
}
