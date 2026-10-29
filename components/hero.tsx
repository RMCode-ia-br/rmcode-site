import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const STATS = [
  { value: '100%', label: 'Projetos sob medida' },
  { value: 'IA', label: 'Aplicada ao negócio' },
  { value: '24/7', label: 'Automação contínua' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
          <Sparkles className="size-3.5" aria-hidden="true" />
          Software + Inteligência Artificial
        </span>

        <h1 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          O futuro do seu negócio é <span className="text-gradient">escrito em código</span> e movido por IA.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          A RMCode cria software sob medida e soluções corporativas com Inteligência Artificial que automatizam processos,
          geram inteligência a partir dos seus dados e aceleram a transformação digital da sua empresa.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#contato"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Iniciar meu projeto
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-card sm:w-auto"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>

        <dl className="mt-20 grid w-full max-w-3xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/40 backdrop-blur">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1 px-3 py-5 md:py-6">
              <dt className="text-xs text-muted-foreground md:text-sm">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
