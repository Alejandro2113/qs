import Image from 'next/image';
import LOGO from "../../img/Pics/logo.png";
import fondo  from "../../img/Pics/fondo.jpg"

export default function Hero() {
  return (
    <section className="relative  text-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={fondo}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative container mx-auto text-center z-10 px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg animate-scale-in">
            <Image
              src={LOGO}
              alt="Quality Solutions Logo"
              layout="intrinsic"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left md:pl-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 animate-fade-in-up">
            Welcome to Quality Solutions
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 animate-fade-in-up animate-delay-200">
            Your partner in achieving quality and excellence.
          </p>
          
          <p className="text-lg md:text-xl animate-fade-in-up animate-delay-400">
            We specialize in delivering high-quality solutions tailored to your needs. Whether you’re looking to revamp your website or start a new project, we’ve got you covered.
          </p>
        </div>
      </div>
    </section>
  );
}
