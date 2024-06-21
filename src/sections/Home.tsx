import bull_logo from '../assets/images/bull_logo.svg'
import bull from '../assets/images/bull.svg'
import bull_dark from '../assets/images/bull_dark.svg'

export default function Home() {
    return (
        <div id="home" className='section px-10 sm:px-32 py-20 sm:py-40 relative bg-black flex flex-row items-center place-content-between'>
            <div className='max-w-2xl flex flex-col items-center sm:items-start text-center sm:text-left space-y-6'>
                <div className="text-white text-2xl sm:text-4xl font-black">Building the next big community on Solana blockchain</div>
                <div className="text-gray text-base sm:text-2xl">
                    Collaboration is the new competition
                    Together, let’s grow the <span className="text-purple">block</span> a <span className="text-green">chain</span> at a time!
                </div>
                <div className="rounded-full p-2 border border-purple flex flex-row items-center cursor-pointer">
                    <img className='w-8 sm:w-10' src={bull_logo}></img>
                    <a className='px-6 text-xl sm:text-4xl font-bold text-white cursor-pointer' href='https://raydium.io/swap/?inputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputCurrency=9EKEh1CHMKmyvBTY6qYZm7kgRJE18tCbaY1ZbpdELbVr&inputAmount=1&fixed=in'>Buy</a>
                </div>
            </div>
            <img className='hidden sm:block opacity-30 xl:opacity-100 absolute top-40 right-32 mix-blend-screen' src={bull}></img>
            <img className='sm:hidden absolute w-3/4 left-1/2 transform -translate-x-1/2 mix-blend-screen' src={bull_dark}></img>
        </div>
    )
}