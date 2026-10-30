import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  id?: string
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{`// ${eyebrow}`}</p>
      <h2 id={id} className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
    </Reveal>
  )
}
