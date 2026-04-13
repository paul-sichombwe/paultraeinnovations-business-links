import Image from 'next/image'
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiGlobeAlt, HiMail, HiPhone } from 'react-icons/hi'

const websiteUrl = 'https://paultraeinnovations.com'
const emailUrl = 'mailto:info@paultraeinnovations.com'
const phoneUrl = 'tel:+260971717275'
const whatsappUrl =
  'https://wa.me/260971717275?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.'

const primaryLinks = [
  {
    title: 'Website',
    subtitle: 'paultraeinnovations.com',
    href: websiteUrl,
    icon: HiGlobeAlt,
  },
  {
    title: 'Email',
    subtitle: 'info@paultraeinnovations.com',
    href: emailUrl,
    icon: HiMail,
  },
  {
    title: 'WhatsApp',
    subtitle: 'Chat with Paultrae Innovations',
    href: whatsappUrl,
    icon: FaWhatsapp,
  },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/paultraeinnovations/',
    icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61572122697105',
    icon: FaFacebookF,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@paultraeinnovations?_r=1&_t=ZS-95TTs8k7ILF',
    icon: FaTiktok,
  },
]

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-glow page-glow-top" aria-hidden="true" />
      <div className="page-glow page-glow-bottom" aria-hidden="true" />

      <section className="bio-shell">
        <header className="hero-card">
          <div className="logo-wrap">
            <div className="logo-aura" aria-hidden="true" />
            <div className="logo-frame">
              <Image
                src="/branding/paultrae-logo-transparent.png"
                alt="Paultrae Innovations logo"
                width={108}
                height={108}
                priority
              />
            </div>
          </div>

          <div className="hero-copy">
            <h1>PAULTRAE INNOVATIONS</h1>
            <p className="tagline">CONNECT. CREATE. UPGRADE.</p>
            <div className="founder-block">
              <p className="founder-name">Paul Sichombwe</p>
              <p className="founder-role">Founder / CEO</p>
              <p className="founder-role founder-role-subtle">Computer Consultant</p>
            </div>
          </div>
        </header>

        <section className="links-stack" aria-label="Primary business links">
          {primaryLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <span className="link-icon-wrap">
                  <Icon className="link-icon" />
                </span>
                <span className="link-copy">
                  <span className="link-title">{link.title}</span>
                  <span className="link-subtitle">{link.subtitle}</span>
                </span>
                <span className="link-arrow">
                  <FaArrowRight />
                </span>
              </a>
            )
          })}
        </section>

        <a
          href={phoneUrl}
          className="business-line-card"
          aria-label="Call Paultrae Innovations business line"
        >
          <span className="business-line-label">Business Line</span>
          <span className="business-line-value">
            <HiPhone />
            <span>+260971717275</span>
          </span>
        </a>

        <section className="social-card" aria-label="Social links">
          <p className="social-title">Follow Paultrae Innovations</p>
          <div className="social-grid">
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Icon className="social-icon" />
                  <span>{social.label}</span>
                </a>
              )
            })}
          </div>
        </section>
      </section>
    </main>
  )
}
