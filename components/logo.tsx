import { CodeXml } from 'lucide-react'

export function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="RMCode, voltar ao início">
      <span className="flex size-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
        <CodeXml className="size-4" aria-hidden="true" />
      </span>
      <span className="text-base font-semibold tracking-tight">
        RM<span className="text-primary">Code</span>
      </span>
    </a>
  )
}
