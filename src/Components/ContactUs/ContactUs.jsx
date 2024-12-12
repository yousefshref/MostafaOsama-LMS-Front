import React from 'react'
import { FaLocationArrow, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const ContactUs = () => {
    return (
        <div className='p-3 mt-14 bg-gray-100 flex flex-col gap-3 items-center justify-center'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-3xl font-bold'>اشعر بالحرية بتواصل معنا</h2>
                    <p className='text-gray-500'>لو لديك سؤال او استفسار او حتى شكوى لا تتردد في التواصل معنا في اي وقت</p>

                    <ul className='flex flex-col gap-4 mt-7'>
                        <li className='flex items-center gap-3'>
                            <div className='p-2 bg-orange-500 text-white rounded-full'>
                                <FaLocationArrow />
                            </div>
                            <p>مدينة الشروق ، القاهرة</p>
                        </li>
                        <li dir='ltr' className='flex items-center gap-3 justify-end'>
                            <p>+20 123 456 7897</p>
                            <div className='p-2 bg-orange-500 text-white rounded-full'>
                                <FaPhone />
                            </div>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='p-2 bg-orange-500 text-white rounded-full'>
                                <MdEmail />
                            </div>
                            <p>yb2005at@gmail.com</p>
                        </li>
                    </ul>
                </div>


                <form className='flex flex-col gap-3 p-3 bg-white rounded-md'>
                    <div className='flex gap-3 items-center w-full'>
                        <input className='p-3 rounded-md bg-blue-50 w-full' type="text" placeholder='الاسم الاول' />
                        <input className='p-3 rounded-md bg-blue-50 w-full' type="text" placeholder='الاسم الاخير' />
                    </div>
                    <input className='p-3 rounded-md bg-blue-50' type="text" placeholder='البريد الالكتروني' />
                    <input className='p-3 rounded-md bg-blue-50' type="text" placeholder='العنوان' />
                    <textarea className='p-3 rounded-md bg-blue-50' type="text" placeholder='الرسالة' />
                </form>
            </div>
        </div>
    )
}

export default ContactUs
