'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "../../img/Pics/logo.png";
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <header className="text-white py-2 fixed w-full top-0 z-50 shadow-lg">
            <div className="container mx-auto flex items-center justify-between relative">
                <a className="flex items-center" href="#">
                    <Image 
                        src={logo} 
                        alt="Logo" 
                        width={50} 
                        height={50} 
                        className="rounded-full"
                    />
                    <span className="ml-4 text-xl font-bold whitespace-nowrap" style={{ color: '#fff' }}>Quality Solutions</span>
                </a>
                <nav className={`lg:flex items-center ${isOpen ? 'flex' : 'hidden'}`}>
                    <button className="nav-button" onClick={() => scrollToSection('hero')}>Home</button>
                    <button className="nav-button" onClick={() => scrollToSection('about')}>About Us</button>
                    <button className="nav-button" onClick={() => scrollToSection('cvs')}>CVS</button>
                    <button className="nav-button" onClick={() => scrollToSection('experience')}>Experience</button>
                    <button className="nav-button" onClick={() => scrollToSection('contact')}>Contact</button>
                </nav>
                <button 
                    className="lg:hidden text-white focus:outline-none absolute top-0 right-0 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}