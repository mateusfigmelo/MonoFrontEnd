import logo from '../assets/images/logo.svg'
import hambur from '../assets/images/hambur.svg'
import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { Link } from 'react-scroll'

export default function Header() {
    const [open, setOpen] = useState(false)
    const { width } = useWindowSize()

    return (
        <div className="navBar bg-black px-4 sm:px-10 py-6 flex flex-row items-center justify-between z-20">
            <img className='w-40 sm:w-60' src={logo}></img>
            <div className="hidden lg:flex flex-row items-center space-x-4">
                <div className='text-2xl text-white font-bold cursor-pointer'><Link activeClass='active' to='home' spy={true} smooth={true} duration={500}>HOME</Link></div>
                <div className='text-2xl text-white font-bold cursor-pointer'><Link activeClass='active' to='ecosystem' spy={true} smooth={true} duration={500}>ECOSYSTEM</Link></div>
                <div className='text-2xl text-white font-bold cursor-pointer'><Link activeClass='active' to='roadmap' spy={true} smooth={true} duration={500}>ROADMAP</Link></div>
                <div className='text-2xl text-white font-bold cursor-pointer'><Link activeClass='active' to='tokenomics' spy={true} smooth={true} duration={500}>TOKENOMICS</Link></div>
                <div className='text-2xl text-white font-bold cursor-pointer'><Link activeClass='active' to='faqs' spy={true} smooth={true} duration={500}>FAQS</Link></div>
            </div>
            <img className='w-6 sm:w-10 lg:hidden' src={hambur} onClick={() => setOpen(!open)}></img>
            {
                open && width !== undefined && width < 1024 && (
                    <div className='absolute top-20 right-0 bg-black p-4 flex flex-col items-start z-20'>
                        <div className='text-base text-white font-bold cursor-pointer'><Link activeClass='active' to='home' spy={true} smooth={true} duration={500}>HOME</Link></div>
                        <div className='text-base text-white font-bold cursor-pointer'><Link activeClass='active' to='ecosystem' spy={true} smooth={true} duration={500}>ECOSYSTEM</Link></div>
                        <div className='text-base text-white font-bold cursor-pointer'><Link activeClass='active' to='roadmap' spy={true} smooth={true} duration={500}>ROADMAP</Link></div>
                        <div className='text-base text-white font-bold cursor-pointer'><Link activeClass='active' to='tokenomics' spy={true} smooth={true} duration={500}>TOKENOMICS</Link></div>
                        <div className='text-base text-white font-bold cursor-pointer'><Link activeClass='active' to='faqs' spy={true} smooth={true} duration={500}>FAQS</Link></div>
                    </div>
                )
            }
        </div>
    )
}