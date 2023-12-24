"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function NavbarComponent() {
    const pathname = usePathname();

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarTop, setNavbarTop] = useState("0px");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                setNavbarTop("-top-20");
            } else {
                setNavbarTop("top-0");
            }

            setLastScrollTop(scrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    const navLink = [
        {
            name: 'Work',
            link: '/work'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Ideas',
            link: '/ideas'
        },
        {
            name: 'Careers',
            link: '/careers'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
    ];
    return (
        <header id='navbar' className={`bg-orange-500 z-10 w-screen px-16 fixed duration-300 ${navbarTop}`}>
            <nav className='flex justify-between'>
                <div className=''>
                    <Link href={"/"}>
                        <img className='w-20' src="/assets/images/suitmedia-logo1.png" alt="suitmedia" />
                    </Link>
                </div>
                <ul className='flex justify-center items-center gap-4'>
                    {navLink.map(({ link, name }) => (
                        <li key={name}><Link className={`text-white hover:font-semibold ${pathname === link ? 'underline':''}`} href={link}>{name}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavbarComponent