import codsoftCertificate from '../assets/certificates/codsoft-certificate.jpeg'
import coirplusCertificate from '../assets/certificates/coirplus-certificate.jpg'

export const internships = [
  {
    id: 'codsoft-java',
    role: 'Java Development Intern',
    company: 'CodSoft',
    duration: 'Internship Program',
    description:
      'Worked on Java application development and problem-solving projects focused on backend logic, object-oriented programming, and clean architecture practices.',
    responsibilities: [
      'Developed Java mini-projects',
      'Built ATM interface application',
      'Practiced OOP concepts and debugging',
      'Improved backend problem-solving skills',
    ],
    technologies: ['Java', 'OOP', 'GitHub'],
    certificate: {
      label: 'View Certificate',
      file: codsoftCertificate,
    },
  },
  {
    id: 'coirplus-fullstack',
    role: 'Full Stack Development Internship Project',
    company: 'CoirPlus',
    duration: 'Internship Project',
    description:
      'Developed the PremiumBills invoice management platform to automate billing workflows, PDF invoice generation, and responsive financial management operations.',
    responsibilities: [
      'Built full-stack invoice management system',
      'Automated PDF invoice generation',
      'Integrated Excel-based workflows',
      'Developed responsive UI and backend APIs',
    ],
    technologies: ['React.js', 'Flask', 'Python', 'Excel Integration', 'GitHub'],
    certificate: {
      label: 'View Certificate',
      file: coirplusCertificate,
    },
  },
]
