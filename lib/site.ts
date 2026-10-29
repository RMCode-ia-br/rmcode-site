export const WHATSAPP_URL = 'https://api.whatsapp.com/send?1=pt_BR&phone=5522981260570'
export const CONTACT_EMAIL = 'contato@rmcode.ia.br'

// Troque pelo endpoint do seu serviço, ex.: 'https://api.web3forms.com/submit' ou 'https://formspree.io/f/SEU_ID'
export const CONTACT_FORM_ACTION = 'https://api.web3forms.com/submit'

export function whatsappLink() {
  return WHATSAPP_URL
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
] as const
