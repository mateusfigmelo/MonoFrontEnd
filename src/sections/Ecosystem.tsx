import bull_logo from '../assets/images/bull_logo.svg'
import bull_logo_dark from '../assets/images/bull_logo_dark.svg'
import line from '../assets/images/line.svg'

export default function Ecosystem() {
    return (
        <div id="ecosystem" className="section bg-black px-10 sm:px-20 pb-10 relative flex flex-row items-center text-center sm:text-left place-content-between">
            <div>
                <img className='opacity-30 xl:opacity-100 hidden sm:block absolute top-1/2 left-32 transform -translate-y-1/2 mix-blend-screen' src={bull_logo} width={360} height={360}></img>
                <img className='sm:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen' src={bull_logo_dark} width={300} height={300}></img>
            </div>
            <div className='z-10 max-w-3xl flex flex-col items-center sm:items-start space-y-6'>
                <div className='text-2xl sm:text-4xl font-black text-green'>BULL SOLANA ECOSYSTEM</div>
                <div className='text-base sm:text-2xl text-white'>Bull Solana is a community token built on the Solana blockchain ecosystem with a limited supply of 10 billion tokens.</div>
                <div className='text-base sm:text-2xl text-white'>$BULL is a project with the goal of becoming the largest operational platform in DeFi and the crypto-space as a whole, building a competitive crypto ecosystem.</div>
                <div className='text-base sm:text-2xl text-white'><span className='text-green'>Vision:</span> We aim to become a Solana ambasador for positive news and also serve as a bull eye, watching over every other token and NFTs in the blockchain.</div>
                <div className='text-base sm:text-2xl text-white'><span className='text-green'>Mission: </span> Our mission is to build a cooperative community and social token on the Solana blockchain. We’re building a system that helps users get easy access to the crypto world.
                    In the long run, we will be building easy-to-understand services that anyone (crypto experts/novice) can use to trade tokens and NFTs on Solana, learn about the blockchain industry, and DeFi, while avoiding dangerous schemes within the space.
                </div>
                <img className='pt-4' src={line}></img>
            </div>
        </div>
    )
}