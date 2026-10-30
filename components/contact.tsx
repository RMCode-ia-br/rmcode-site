import { Mail, MessageCircle, Globe, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'
import { CONTACT_EMAIL, whatsappLink } from '@/lib/site'

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative isolate overflow-hidden border-t border-border py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[800px] max-w-full -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            id="contato-title"
            eyebrow="Contato"
            title="Vamos construir algo extraordinário?"
            description="Conte sobre o seu desafio. Nossa equipe retorna com um diagnóstico inicial e os próximos passos para o seu projeto."
          />

          <Reveal delay={150} className="mt-10">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/10 p-5 transition-colors hover:bg-primary/15"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MessageCircle className="size-6" aria-hidden="true" />
              </span>
              <span className="flex flex-1 flex-col">
                <span className="font-medium">Fale direto no WhatsApp</span>
                <span className="text-sm text-muted-foreground">Atendimento rápido com um especialista</span>
              </span>
              <ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal as="ul" delay={250} className="mt-6 flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3 text-muted-foreground">
              <Mail className="size-4 text-accent" aria-hidden="true" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-foreground">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Globe className="size-4 text-accent" aria-hidden="true" />
              rmcode.ia.br
            </li>
          </Reveal>
        </div>

        <Reveal delay={200} className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur md:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
