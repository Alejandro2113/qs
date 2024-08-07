import Image from 'next/image';
import Icon from './Icon';
import TEAM from "../../img/Pics/team.jpg";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary animate-fade-in animate-delay-1000">
          About Us
        </h2>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0 animate-slide-in-left animate-delay-500">
            <Image
              src={TEAM}
              alt="Team working together"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg leading-relaxed mb-4 animate-fade-in animate-delay-1000">
              We are a passionate team of designers, developers, and strategists dedicated to crafting beautiful and functional digital experiences. Our mission is to help businesses and individuals bring their ideas to life through innovative design and cutting-edge technology.
            </p>
            <p className="text-lg leading-relaxed mb-6 animate-fade-in animate-delay-1500">
              With years of experience in the industry, we pride ourselves on our ability to understand our clients&apos; needs and deliver solutions that exceed their expectations. Whether you&apos;re looking to build a new website, revamp an existing one, or create a unique digital product, we&apos;re here to help.
            </p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary animate-fade-in animate-delay-2000">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 animate-fade-in animate-delay-2500">
            <Icon name="innovativedesign" />
            <h4 className="text-xl font-bold text-accent mb-2 animate-slide-in-up animate-delay-3000">
              Innovative Design
            </h4>
            <p>We create unique and visually stunning designs that stand out.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 animate-fade-in animate-delay-3000">
            <Icon name="developer" />
            <h4 className="text-xl font-bold text-accent mb-2 animate-slide-in-up animate-delay-3500">
              Cutting-Edge Technology
            </h4>
            <p>Our solutions are built with the latest technologies for optimal performance.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 animate-fade-in animate-delay-3500">
            <Icon name="customersupport" />
            <h4 className="text-xl font-bold text-accent mb-2 animate-slide-in-up animate-delay-4000">
              Dedicated Support
            </h4>
            <p>We provide ongoing support to ensure your success.</p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary animate-fade-in animate-delay-4000">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 animate-slide-in-left animate-delay-4000">
            <Icon name="webdesign" />
            <h4 className="text-xl font-bold text-accent mb-2">
              Web Design
            </h4>
            <p>Creating visually appealing and user-friendly websites.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 animate-slide-in-left animate-delay-4500">
            <Icon name="itsolutions" />
            <h4 className="text-xl font-bold text-accent mb-2">
              IT Solutions
            </h4>
            <p>Providing comprehensive IT solutions for businesses.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 animate-slide-in-left animate-delay-5000">
            <Icon name="seo" />
            <h4 className="text-xl font-bold text-accent mb-2">
              SEO Optimization
            </h4>
            <p>Improving your website&apos;s visibility on search engines.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 animate-slide-in-left animate-delay-5500">
            <Icon name="digitalmarketing" />
            <h4 className="text-xl font-bold text-accent mb-2">
              Digital Marketing
            </h4>
            <p>Boosting your online presence and engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
