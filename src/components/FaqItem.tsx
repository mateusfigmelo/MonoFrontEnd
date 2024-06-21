import { useState, useEffect } from 'react'
import arrow from '../assets/images/arrow.svg'

interface FaqItemProps {
    title: string,
    content: any
}

export default function FaqItem({ title, content }: FaqItemProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full rounded-2xl px-2 sm:px-10 border border-purple flex flex-col" onClick={() => setOpen(!open)}>
            <div className='py-2 sm:py-4 flex flex-row items-center justify-between'>
                <div className="pl-0 text-white text-base sm:text-2xl font-black">{title}</div>
                <img className='w-6 sm:w-10' src={arrow}></img>
            </div>
            {
                open && (
                    <div className='pb-6 text-sm sm:text-xl text-white'>
                        {content}
                    </div>
                )
            }
        </div>
    )
}