import { companyName } from '@/utlis/variables'
import React from 'react'
import Button from '../Button/Button'

const AboutUs = () => {
    return (
        <div className='md:p-5 p-2 mt-14 flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-1'>
                    <p className='text-orange-500 font-bold'>من تكون {companyName}؟</p>
                    <h3 className='text-2xl font-bold'>تــعرف علـيـــنا بــشكل اعمــــق.</h3>
                    <p className='text-gray-500 mt-3'>
                        شركة رائدة في تصميم وإنتاج المناهج التربوية ، تهدف إلى بناء القيم والشخصية وتعزيز الهوية الوطنية بأساليب مبتكرة تجمع بين التأصيل العلمي والجانب العملي التطبيقي. تقدم الشركة خدماتها للمدارس والمؤسسات التعليمية والتربوية
                    </p>
                    <div className='flex gap-4 mt-3'>
                        <Button text='تواصل معنا' variant='fill' color='orange' />
                        <Button text='مزيد من التفاصيل' variant='link' color='orange' />
                    </div>
                </div>

                <div>
                    <img src="/about-us.jpeg" alt="kids learning with manhag" className='rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
