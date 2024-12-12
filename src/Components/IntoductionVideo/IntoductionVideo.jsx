import React from 'react'

import { FaRegCirclePlay } from "react-icons/fa6";


const IntoductionVideo = () => {
    return (
        <div style={{
            backgroundImage: `url('/introduction-video.jpg')`,
        }} className='flex flex-col md:p-5 p-3 relative justify-center bg-cover text-white bg-center h-[230px] items-center mt-14'>

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40' />

            <div className='text-white z-10 flex flex-col gap-2 items-center'>
                <strong className='text-2xl'>هل تريد معرفة تفاصيل اكثر؟</strong>
                <p>إليك فديو تعريفي لتكون على دراية من خدماتنا وهدفنا ومنهجنها.</p>
                <FaRegCirclePlay className='mt-5 cursor-pointer' size={50} />
            </div>
        </div>
    )
}

export default IntoductionVideo
