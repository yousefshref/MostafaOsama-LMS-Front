'use client';
import React, { useEffect } from 'react'
import { IoIosArrowDown, IoIosHelpCircleOutline } from 'react-icons/io'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { CiBookmark, CiHome, CiPhone } from 'react-icons/ci'
import { MdLanguage, MdOutlineAttachMoney } from 'react-icons/md'
import { companyName } from '@/utlis/variables'

const Navbar = () => {
    const [height, setHeight] = React.useState();

    useEffect(() => {
        const handleScroll = () => {
            setHeight(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={`
            transition-all
            flex gap-4 items-center justify-between z-30 fixed md:top-0 h-fit bottom-3 md:shadow-none shadow-md left-0 right-0 md:w-full duration-500 mx-auto md:rounded-none rounded-xl
            ${height > 50 ? 'shadow-md bg-indigo-700 text-white md:w-full md:px-5 md:py-4 w-[95%] px-5 py-4' : 'bg-white w-0 md:py-4 md:px-5 py-0 px-0 overflow-hidden'}
        `}>
            <h1 className='font-bold text-lg'>{companyName}</h1>
            <ul className='flex gap-5 items-center'>
                <li className='cursor-pointer'>
                    <p className='md:block hidden'>الرئيسية</p>
                    <CiHome size={20} className='my-auto md:hidden block' />
                </li>
                <li className='cursor-pointer'>
                    <p className='md:block hidden'>من نحن</p>
                    <IoIosInformationCircleOutline size={20} className='my-auto md:hidden block' />
                </li>
                <li className='cursor-pointer'>
                    <p className='md:block hidden'>التعريف بالمنهج</p>
                    <CiBookmark size={20} className='my-auto md:hidden block' />
                </li>
                <li className='cursor-pointer'>
                    <p className='md:block hidden'>الخطط</p>
                    <MdOutlineAttachMoney size={20} className='my-auto md:hidden block' />
                </li>
                <li className='flex gap-1 items-center cursor-pointer'>
                    <p className='md:block hidden'>المزيد</p>
                    <IoIosArrowDown />
                </li>
            </ul>
            <ul className='md:flex gap-5 items-center hidden'>
                <li className='flex gap-1 items-center cursor-pointer'>
                    <p>الدعم</p>
                    <IoIosHelpCircleOutline size={20} className='my-auto' />
                </li>
                <li className='flex gap-1 items-center cursor-pointer'>
                    <p>اللغة</p>
                    <MdLanguage size={20} className='my-auto' />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
