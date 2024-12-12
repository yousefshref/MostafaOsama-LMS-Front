import React from 'react'
import Button from '../Button/Button'

const WhoWeHelp = () => {
    return (
        <div className='mt-14 md:p-5 p-2'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-2xl font-bold text-blue-500'>من نساعد بالتحديد؟</h3>
                <p className='text-gray-500'>نحن نقدم الخدمات للمدارس والمؤسسات التعليمية</p>

                <div className='grid grid-cols-2 gap-5 mt-8'>
                    <div className='flex flex-col gap-2 items-center w-full max-w-[450px] bg-gray-100 md:p-3 p-0.5 rounded-md py-10'>
                        <img src="/school.png" alt="school" className='w-32' />
                        <p className='text-center mt-1 md:text-base text-sm'>يمكن للمدارس او المؤسسات التعليمية والتربوية الاستفادة من منهجنا وتطوير الاطفال بطريقة حديثة ومسلية وجديدة</p>
                        <div className='mt-6 md:text-base text-xs'>
                            <Button text='تواصل معنا لمزيد من التفاصيل' variant='link' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center w-full max-w-[450px] bg-gray-100 md:p-3 p-0.5 rounded-md py-10'>
                        <img src="/family.png" alt="parents" className='w-32' />
                        <p className='text-center mt-1 md:text-base text-sm'>يمكن للمدارس او المؤسسات التعليمية والتربوية الاستفادة من منهجنا وتطوير الاطفال بطريقة حديثة ومسلية وجديدة</p>
                        <div className='mt-6 md:text-base text-xs'>
                            <Button text='تواصل معنا لمزيد من التفاصيل' variant='link' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeHelp
