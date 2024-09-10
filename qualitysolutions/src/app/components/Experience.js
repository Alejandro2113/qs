// components/Experience.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import A1 from '../../img/Pics/costamadeira.png';
import A2 from '../../img/Pics/dimanco.png';
import A3 from '../../img/Pics/oceanblueluxury.png';
import A4 from '../../img/Pics/Barriocolombiano.png';
import Icon from '../components/Icon'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import './Experience.css'; // Importa el archivo de animaciones


export default function Experience() {
  return (
   <section className="py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link href="https://costa-madeira-7o6r.vercel.app/" passHref>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-purple-300">
              <Image src={A1} alt="Costa Madeira" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Watch Project</span>
              </div>
            </div>
          </Link>
          <h3 className="text-2xl font-semibold mt-4 text-purple-400 border-b-2 border-purple-400 pb-2 animate-bounceIn">Costa Madeira</h3>
          <p className="text-gray-700 font-bold">Freelance | <span className="font-bold">May 2021 - Present</span></p>
          <p className="text-gray-700 mb-4">
            A website for a lotification in El Salvador aimed at connecting with visitors to facilitate communication with the sales team. Developed using Next.js.
          </p>
          <div className="flex space-x-4 mt-4">
            <Icon name="nextjs" />
            <Icon name="tailwindcss" />
            <Icon name="bootstrap" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link href="https://dimanco.net" passHref>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-yellow-300">
            <Image src={A2} alt="Dimanco" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Watch Project</span>
              </div>
            </div>
          </Link>
          <h3 className="text-2xl font-semibold mt-4 text-yellow-400 border-b-2 border-yellow-400 pb-2 animate-bounceIn">Dimanco</h3>
          <p className="text-gray-700 font-bold">Freelance | <span className="font-bold">January 2022 - Present</span></p>
          <p className="text-gray-700 mb-4">
            A website for a construction company in Sonsonate, El Salvador. Focused on SEO and customer contact. Developed using React and JavaScript with Bootstrap.
          </p>
          <div className="flex space-x-4 mt-4">
            <Icon name="react" />
            <Icon name="javascript" />
            <Icon name="bootstrap" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link href="https://oceanblueluxury.com" passHref>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-orange-300">
            <Image src={A3} alt="Dimanco" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Watch Project</span>
              </div>
            </div>
          </Link>
          <h3 className="text-2xl font-semibold mt-4 text-orange-400 border-b-2 border-orange-400 pb-2 animate-bounceIn">Ocean Blue Luxury</h3>
          <p className="text-gray-700 font-bold">Freelance | <span className="font-bold">January 2022 - Present</span></p>
          <p className="text-gray-700 mb-4">
          A website developed for a luxury limousine and travel company in Los Angeles. The site is integrated with the API of the luxury travel and transportation management system and the LIMOANYWHERE booking system.
          </p>
          <div className="flex space-x-4 mt-4">
            <Icon name="wordpress" />
            <Icon name="javascript" />
            <Icon name="bootstrap" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link href="https://barriocolombianoo.vercel.app" passHref>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-yellow-300">
            <Image src={A4} alt="BarrioColombiano" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Watch Project</span>
              </div>
            </div>
          </Link>
          <h3 className="text-2xl font-semibold mt-4 text-yellow-400 border-b-2 border-yellow-400 pb-2 animate-bounceIn">Barrio Colombiano</h3>
          <p className="text-gray-700 font-bold">Freelance | <span className="font-bold">September 2024 - November 2024</span></p>
          <p className="text-gray-700 mb-4">
          A web directory developed in Next.js, Tailwind, Prisma, and PostgreSQL, aimed at promoting the businesses stored in the database. It includes a login system and also has a client view.
          </p>
          <div className="flex space-x-4 mt-4">
            <Icon name="nextjs" />
            <Icon name="javascript" />
            <Icon name="tailwindcss" />
            <Icon name="postgresql" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
