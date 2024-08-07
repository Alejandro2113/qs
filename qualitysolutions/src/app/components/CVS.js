import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import A2 from '../../img/Pics/moisesperfil.png';
import A3 from '../../img/Pics/marcosperfil.png';

export default function CVS() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-600 via-gray-800 to-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 animate-fadeIn">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
        {/* Marcos Bonilla's CV */}
        <Link href="/marcosbonilla" legacyBehavior>
          <a className="group block p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <Image src={A3} alt="Profile picture of Marcos Bonilla" width={100} height={100} className="w-24 h-24 rounded-full border-2 border-blue-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Marcos Bonilla</h2>
                <p className="text-gray-600">Frontend Developer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">Marcos is a seasoned frontend developer with a knack for creating stunning user interfaces using modern technologies like React and TailwindCSS.</p>
            <Link href="/marcosbonilla">
              <button className="mt-4 bg-blue-500 text-white hover:bg-blue-400 py-2 px-4 rounded">Go to CV</button>
            </Link>
            <div className="mt-4 flex space-x-4 justify-center">
              <a href="https://github.com/Dogor0555" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/marcos-bonilla-navarrete-ab955b2a2/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </a>
        </Link>
        {/* Moises Gonzales's CV */}
        <Link href="/moises-gonzales" legacyBehavior>
          <a className="group block p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <Image src={A2} alt="Profile picture of Moises Gonzales" width={100} height={100} className="w-24 h-24 rounded-full border-2 border-blue-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Moises Gonzales</h2>
                <p className="text-gray-600">Backend Developer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">Moises excels at building scalable backend systems and APIs. His expertise includes Node.js and database optimization.</p>
            <Link href="/moises-gonzales">
              <button className="mt-4 bg-blue-500 text-white hover:bg-blue-400 py-2 px-4 rounded">Go to CV</button>
            </Link>
            <div className="mt-4 flex space-x-4 justify-center">
              <a href="https://github.com/Alejandro2113" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/alejandro-gonzalez-35b0092ba/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
