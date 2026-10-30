import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { HeroBackground } from '@/components/hero-background'
import { Magnetic } from '@/components/magnetic'
import { Reveal } from '@/components/reveal'
import { TypeWriter } from '@/components/type-writer'
import { whatsappLink } from '@/lib/site'

const STATS: { to?: number; suffix?: string; text?: string; label: string }[] = [
  { to: 100, suffix: '%', label: 'Projetos sob medida' },
  { text: 'IA', label: 'Aplicada ao negócio' },
  { to: 24, suffix: '/7', label: 'Automação contínua' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <HeroBackground />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Software + Inteligência Artificial
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            O futuro do seu negócio é <TypeWriter text="escrito em código" /> e movido por IA.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            A RMCode cria software sob medida e soluções corporativas com Inteligência Artificial que automatizam processos,
            geram inteligência a partir dos seus dados e aceleram a transformação digital da sua empresa.
          </p>
        </Reveal>

        <Reveal delay={360} className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Magnetic className="w-full sm:w-auto">
            <a
              href="#contato"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Iniciar meu projeto
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-card sm:w-auto"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={520} className="mt-20 w-full max-w-3xl">
          <dl className="grid w-full grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/40 backdrop-blur">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 px-3 py-5 md:py-6">
                <dt className="text-xs text-muted-foreground md:text-sm">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {stat.to !== undefined ? <CountUp to={stat.to} suffix={stat.suffix} delay={600} /> : stat.text}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
