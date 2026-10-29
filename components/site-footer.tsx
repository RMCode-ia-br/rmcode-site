import { Logo } from '@/components/logo'
import { NAV_LINKS } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <Logo />
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">
          {'© '}
          {new Date().getFullYear()} RMCode. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
