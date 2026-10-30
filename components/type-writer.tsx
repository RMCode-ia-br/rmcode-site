'use client'

import { useEffect, useState } from 'react'

type TypeWriterProps = {
  text: string
  /** Espera inicial em ms, para começar depois da entrada do título. */
  startDelay?: number
  /** Intervalo entre letras em ms. */
  speed?: number
}

/** Digita o texto letra a letra, mantendo o espaço reservado para o título não "pular". */
export function TypeWriter({ text, startDelay = 900, speed = 55 }: TypeWriterProps) {
  const chars = Array.from(text)
  // Começa completo (SSR, sem JS e movimento reduzido); a animação reinicia no cliente.
  const [count, setCount] = useState(chars.length)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const total = Array.from(text).length
    let interval = 0
    setCount(0)
    const timer = window.setTimeout(() => {
      let i = 0
      interval = window.setInterval(() => {
        i += 1
        setCount(i)
        if (i >= total) window.clearInterval(interval)
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(timer)
      window.clearInterval(interval)
    }
  }, [text, startDelay, speed])

  const typing = count < chars.length

  return (
    <span>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="text-gradient">
        {chars.map((char, i) => (
          <span key={i}>
            {typing && i === count && <span className="type-caret" />}
            <span style={{ opacity: i < count ? 1 : 0 }}>{char}</span>
          </span>
        ))}
      </span>
    </span>
  )
}
