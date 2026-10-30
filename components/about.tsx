import { ShieldCheck, Rocket, Cpu, Users, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const PILLARS: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Cpu, title: 'Excelência técnica', description: 'Stack moderna, código limpo e boas práticas de engenharia.' },
  { icon: Rocket, title: 'Inovação contínua', description: 'Pesquisa constante em IA aplicada a problemas de negócio.' },
  { icon: ShieldCheck, title: 'Segurança e confiança', description: 'Proteção de dados e conformidade com a LGPD.' },
  { icon: Users, title: 'Parceria próxima', description: 'Comunicação clara do diagnóstico à evolução do produto.' },
]

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="sobre-title"
            eyebrow="Sobre a RMCode"
            title={
              <>
                Engenharia de software com <span className="text-gradient">visão de futuro</span>.
              </>
            }
          />
          <Reveal delay={150} className="mt-6 flex flex-col gap-5 leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A RMCode é especialista em desenvolvimento de software sob medida e soluções corporativas com Inteligência
              Artificial. Unimos profundo conhecimento técnico e visão estratégica para transformar desafios complexos em
              produtos digitais robustos, inteligentes e escaláveis.
            </p>
            <p>
              Acreditamos que a tecnologia certa, construída do jeito certo, é o que separa empresas que acompanham o
              mercado daquelas que o lideram.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-4 self-end sm:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={index * 100} className="rounded-2xl border border-border bg-card/60 p-6">
              <pillar.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
