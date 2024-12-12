'use client';

import { companyName } from '@/utlis/variables';
import React, { useEffect, useRef } from 'react';
import Typical from 'react-typical';
import Button from '../Button/Button';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiPhone } from 'react-icons/ci';
import { MdLanguage } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const steps = [
        'مناهج تربوية مبتكرة', 1500,
        'مناهج تعزز القيم', 1500,
        'تبني الهوية', 1500,
        'مناهج ذات أثر عميق', 1500,
    ];

    const image1 = useRef();
    const image2 = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.to(image1.current, {
                scrollTrigger: {
                    trigger: '#trigger',
                    start: 'top 30%',
                    end: 'bottom 50%',
                    scrub: true,
                },
                x: -10,
                y: -30,
                duration: 3,
                ease: 'power1.out',
            });

            gsap.to(image2.current, {
                scrollTrigger: {
                    trigger: '#trigger',
                    start: 'top 20%',
                    end: 'bottom 40%',
                    scrub: true,
                },
                x: -20,
                y: 10,
                duration: 5,
                ease: 'power1.out',
            });
        }
    }, []);

    return (
        <div id="header" className="md:h-screen md:py-0 py-14 flex flex-col justify-center items-center">

            <div className='md:hidden absolute w-full top-0 p-3 px-4 flex gap-2 justify-between items-center'>
                <h1 className='font-bold'>{companyName}</h1>

                <ul className='flex gap-3 items-center'>
                    <li className='flex gap-1 items-center cursor-pointer'>
                        <IoIosHelpCircleOutline size={20} className='my-auto' />
                    </li>
                    <li className='flex gap-1 items-center cursor-pointer'>
                        <MdLanguage size={20} className='my-auto' />
                    </li>
                </ul>
            </div>

            <div id="trigger" className="flex gap-8 items-center w-full max-w-5xl md:p-5 p-2 md:flex-row flex-col">
                {/* Right */}
                <div className="flex flex-col gap-2 md:w-1/2">
                    <h1 className="text-4xl font-bold" style={{ lineHeight: '2em' }}>
                        <p className="text-2xl">
                            <span className="text-blue-500">{companyName}</span> مبدعين في,
                        </p>
                        <Typical steps={steps} loop={Infinity} wrapper="p" />
                    </h1>
                    <p className="text-gray-500">
                        متخصصة في تصميم مناهج تربوية بأساليب علمية وعملية، تقدم خدماتها للمدارس والمؤسسات التعليمية.
                    </p>
                    <div className="mt-3 flex gap-2 items-center">
                        <Button text={'الخطط المتاحة'} />
                        <Button text={'تواصل معنا'} variant={'link'} />
                    </div>
                </div>
                {/* Left */}
                <div className="md:flex flex-col md:w-1/2 h-full relative hidden">
                    <img
                        ref={image1}
                        src="/kids-hero.jpeg"
                        className="absolute shadow-md lg:w-[300px] w-[250px] top-0 rounded-xl -right-[20px]"
                        alt="kids learning"
                    />
                    <img
                        ref={image2}
                        src="/kids-hero-2.jpeg"
                        className="absolute shadow-md lg:w-[250px] w-[200px] -top-[40px] rounded-xl left-0"
                        alt="kids learning"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
