import React from 'react'

const Button = ({ text, variant = 'fill', color = 'blue' }) => {
    return (
        <button
            id='button'
            onMouseEnter={() => {
                const underline = document.getElementById(`underline-${text?.replace(' ', '_')}`)
                if (underline) {
                    underline.style.width = '100%'
                }
            }}
            onMouseLeave={() => {
                const underline = document.getElementById(`underline-${text?.replace(' ', '_')}`)
                if (underline) {
                    underline.style.width = '20px'
                }
            }}
            className={`
                transition-all px-4 py-2 rounded-lg flex flex-col gap-2 h-fit
                ${variant === 'fill' ? `
                        ${color === 'blue' ? 'bg-blue-500' : ''}
                        ${color === 'orange' ? 'bg-orange-500' : ''}

                        ${color === 'blue' ? 'hover:bg-blue-600' : ''}
                        ${color === 'orange' ? 'hover:bg-orange-600' : ''}
                        
                        text-white 
                        
                        ${color === 'blue' ? 'active:bg-blue-500' : ''}
                        ${color === 'orange' ? 'active:bg-orange-500' : ''}
                        
                        `
                    : ''}
                    
                    ${variant === 'outline' ? `
                        bg-transparent border 
                        
                        ${color === 'blue' ? 'border-blue-500`' : ''}
                        ${color === 'orange' ? 'border-orange-500' : ''}

                        ${color === 'blue' ? 'text-blue-500`' : ''}
                        ${color === 'orange' ? 'text-orange-500' : ''}

                        ${color === 'blue' ? 'hover:bg-blue-500' : ''}
                        ${color === 'orange' ? 'hover:bg-orange-500' : ''}
                        
                        hover:text-white
                        ` : ''}

                    ${variant === 'link' ? `
                        ${color === 'blue' ? 'text-blue-500' : ''}
                        ${color === 'orange' ? 'text-orange-500' : ''}
                        ` : ''}
                    `}>
            <p>{text}</p>
            {
                variant === 'link' ? (
                    <span id={`underline-${text?.replace(' ', '_')}`} className={`
                        transition-all duration-500 h-0.5 w-[20px] 
                        ${color === 'blue' ? 'bg-blue-500' : ''}
                        ${color === 'orange' ? 'bg-orange-500' : ''}
                        rounded-full
                        `}></span>
                ) : null
            }
        </button>
    )
}

export default Button
