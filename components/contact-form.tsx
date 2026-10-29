import { Send } from 'lucide-react'
import { CONTACT_FORM_ACTION } from '@/lib/site'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30'

export function ContactForm() {
  return (
    <form action={CONTACT_FORM_ACTION} method="POST" className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Seu nome completo"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="voce@empresa.com.br"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Conte um pouco sobre o seu projeto ou desafio..."
          className={cn(fieldClass, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Send className="size-4" aria-hidden="true" />
        Enviar mensagem
      </button>
    </form>
  )
}
