import codsoftCertificate from '../assets/certificates/codsoft-certificate.jpeg'
import coirplusCertificate from '../assets/certificates/coirplus-certificate.jpg'
import flutterWorkshopCertificate from '../assets/certificates/Flutter_Workshop.jpeg'
import javaCertificate from '../assets/certificates/Spring.png'
import mongodb from '../assets/certificates/Introduction_To_MongoDB.jpeg'
import manipalhackathon from '../assets/certificates/Spring.png'
import python from '../assets/certificates/python.png'
import java from '../assets/certificates/Programming_in_java.png'
import conference from '../assets/certificates/ICEAISC.jpeg'

export const certificateData = [
  {
    id: 'java-cert',
    name: 'Java Certification',
    provider: 'Swayam - NPTEL(IIT Kharagpur)',
    link: java,
  },
  {
    id: 'spring-cert',
    name: 'Spring Framework Certification',
    provider: 'LinkedIn Learning',
    link: javaCertificate,
  },
  {
    id: 'mongodb-cert',
    name: 'Introduction to MongoDB Certificate',
    provider: 'MongoDB.Inc',
    link: mongodb,
  },
  {
    id: 'python-cert',
    name: 'Python Programming Certificate',
    provider: 'Infosys Springboard',
    link: python,
  },
  {
    id: 'conference-cert',
    name: 'International Conference on Edge AI, Intelligenta Analytics and Smart Computing - Participation Certificate',
    provider: 'ICEAISC',
    link: conference,
  },
  {
    id: 'flutter-cert',
    name: 'Flutter Workshop Certificate',
    provider: 'Workshop',
    link: flutterWorkshopCertificate,
  },
  {
    id: 'manipalhackathon-cert',
    name: 'Manipal Hackathon Participation Certificate',
    provider: 'Manipal University',
    link: manipalhackathon,
  },
  {
    id: 'coirplus-cert',
    name: 'Internship Completion Certificate - CoirPlus',
    provider: 'CoirPlus',
    link: coirplusCertificate,
  },
  {
    id: 'codsoft-cert',
    name: 'Internship Completion Certificate - CodSoft',
    provider: 'CodSoft',
    link: codsoftCertificate,
  },
]
