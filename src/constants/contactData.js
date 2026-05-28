import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiDownload } from 'react-icons/fi'

export const contactItems = [
  {
    id: 'email',
    label: 'Email',
    value: 'mailsnehamarimuthu326@gmail.com',
    href: 'mailto:mailsnehamarimuthu326@gmail.com',
    icon: FiMail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sneha-marimuthu',
    href: 'https://linkedin.com/in/sneha-marimuthu',
    icon: FiLinkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/sneha-marimuthu',
    href: 'https://github.com/sneha-marimuthu',
    icon: FiGithub,
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
    icon: FiMapPin,
  },
]

export const resumeItem = {
  label: 'Resume',
  href: `${import.meta.env.BASE_URL}resume.pdf`,
  icon: FiDownload,
}

export const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
