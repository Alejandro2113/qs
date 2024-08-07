import Link from 'next/link';
import Image from 'next/image';

import A3 from './Pics/marcosperfil.png';

export default function MarcosBonilla() {
  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">Marcos Bonilla&apos;s CV</h1>
      <div className="bg-white shadow-xl rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Professional Summary</h2>
            <p className="text-lg text-gray-700">Experienced frontend developer with a passion for creating intuitive and visually appealing user interfaces. Proficient in React, TailwindCSS, and modern JavaScript.</p>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Git</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Work Experience</h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Senior Frontend Developer - Tech Co.</h3>
              <p className="italic text-gray-600">January 2020 - Present</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-lg text-gray-700">
                <li>Developed and maintained multiple React-based web applications</li>
                <li>Implemented responsive designs using TailwindCSS</li>
                <li>Collaborated with backend developers to integrate RESTful APIs</li>
              </ul>
            </div>
          </div>

          <Link href="/">
            <button className="mt-6 bg-blue-500 text-white hover:bg-blue-400 hover:shadow-xl transition-transform transform hover:scale-105 py-3 px-6 rounded-lg">Back to Team</button>
          </Link>
        </div>
        
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-110 shadow-lg">
            <Image src={A3} alt="Marcos Bonilla" width={192} height={192} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
