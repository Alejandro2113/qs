import Link from 'next/link';
import Image from 'next/image';
import A2 from './Pics/moisesperfil.png';


export default function MoisesGonzalesCV() {
  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">Moises Gonzales&apos;s CV</h1>
      <div className="bg-white shadow-xl rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Professional Summary</h2>
            <p className="text-lg text-gray-700">Expert backend developer with extensive experience in building scalable and efficient server-side applications. Specialized in Node.js and Express, with a strong focus on API development and database management.</p>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>RESTful API Design</li>
              <li>SQL</li>
              <li>Docker</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Work Experience</h2>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Lead Backend Developer - Data Systems Inc.</h3>
              <p className="italic text-gray-600">January 2020 - Present</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-lg text-gray-700">
                <li>Architected and developed scalable backend systems using Node.js and Express</li>
                <li>Designed and implemented RESTful APIs for various client applications</li>
                <li>Optimized database queries and improved overall system performance</li>
              </ul>
            </div>
          </div>

          <Link href="/">
            <button className="mt-6 bg-blue-500 text-white hover:bg-blue-400 hover:shadow-xl transition-transform transform hover:scale-105 py-3 px-6 rounded-lg">Back to Team</button>
          </Link>
        </div>
        
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-110 shadow-lg">
            <Image src={A2} alt="Moises Gonzales" width={192} height={192} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
