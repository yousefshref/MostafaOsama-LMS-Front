'use client';
import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

const Parteners = () => {

    useEffect(() => {
        gsap.to('#parteners', {
            scrollTrigger: {
                trigger: '#parteners',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: -3,
            },
            backgroundColor: '#f7f7f750',
            duration: 10,
            ease: 'power1.out',
        })
    }, [])

    const parteners = [
        'https://placehold.co/600x400/EEE/31343C',
        'https://placehold.co/600x400/EEE/31343C',
        'https://placehold.co/600x400/EEE/31343C',
        'https://placehold.co/600x400/EEE/31343C',
    ]
    return (
        <Swiper style={{ padding: '10px' }} id='parteners' centeredSlides={true} spaceBetween={40}>
            <SwiperSlide className='flex my-auto flex-col w-full md:max-w-[180px] max-w-[150px] p-2 mx-auto'>
                <strong>نفتخر ان يكونو شركائنا</strong>
            </SwiperSlide>
            {parteners.map((item, index) => (
                <SwiperSlide key={index} className='w-full md:max-w-[200px] max-w-[100px] mx-auto'>
                    <img src={item} alt="" className='w-full' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Parteners
