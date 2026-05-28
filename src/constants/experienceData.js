import codsoftCertificate from '../assets/certificates/codsoft-certificate.jpeg'
import coirplusCertificate from '../assets/certificates/coirplus-certificate.jpg'

export const internships = [
  {
    id: 'coirplus-fullstack',
    role: 'Full Stack Development Internship Project',
    company: 'CoirPlus',
    duration: 'Internship Project',
    description:
      'Built and deployed a full-stack billing system with instant PDF invoice generation and dynamic product pricing retrieval from Excel via Google Cloud API with <2ms low-latency processing.',
    responsibilities: [
      'Built full-stack billing system',
      'PDF invoice generation',
      'Integrated Excel-based workflows',
      'Developed responsive UI and backend APIs',
    ],
    technologies: ['React.js', 'Flask', 'Python', 'Excel Integration', 'GitHub'],
    certificate: {
      label: 'View Certificate',
      file: coirplusCertificate,
    },
  },
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
  
]
