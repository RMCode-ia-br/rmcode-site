import {
  Code2,
  BrainCircuit,
  LayoutDashboard,
  Smartphone,
  Plug,
  Cloud,
  Bot,
  Workflow,
  LineChart,
  FileSearch,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Service = {
  icon: LucideIcon
  tag: string
  title: string
  description: string
  items: { icon: LucideIcon; label: string }[]
  highlights: string[]
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    tag: '01',
    title: 'Desenvolvimento de Software Sob Medida',
    description:
      'Sistemas projetados exatamente para o seu fluxo de trabalho, com arquitetura escalável, segura e pronta para crescer junto com a sua empresa.',
    items: [
      { icon: LayoutDashboard, label: 'Sistemas web e plataformas SaaS' },
      { icon: Smartphone, label: 'Aplicativos mobile' },
      { icon: Plug, label: 'Integrações e APIs' },
      { icon: Cloud, label: 'Arquitetura em nuvem' },
    ],
    highlights: ['Levantamento e consultoria técnica', 'Entregas ágeis e transparentes', 'Suporte e evolução contínua'],
  },
  {
    icon: BrainCircuit,
    tag: '02',
    title: 'Soluções Corporativas com Inteligência Artificial (IA)',
    description:
      'Aplicamos IA de forma estratégica para automatizar operações, apoiar decisões e criar novas experiências para clientes e colaboradores.',
    items: [
      { icon: Bot, label: 'Agentes e assistentes inteligentes' },
      { icon: Workflow, label: 'Automação de processos com IA' },
      { icon: LineChart, label: 'Análise preditiva de dados' },
      { icon: FileSearch, label: 'IA sobre documentos internos' },
    ],
    highlights: ['Modelos de IA de última geração', 'Privacidade e governança de dados', 'ROI mensurável desde o início'],
  },
]

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title="Tecnologia que resolve problemas reais."
          description="Dois pilares complementares para levar sua operação a um novo patamar de eficiência e inovação."
        />

        <div className="service-grid mt-14 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 150} className="service-slot flex">
            <article
              className="service-card group relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-card/60 p-7 hover:border-primary/40 md:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/20"
              />
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">{service.tag}</span>
              </div>

              <h3 className="mt-8 text-balance text-2xl font-semibold tracking-tight md:text-3xl">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm"
                  >
                    <item.icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-col gap-2.5 border-t border-border pt-6">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
