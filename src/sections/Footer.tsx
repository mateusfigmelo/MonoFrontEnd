import dexlab from '../assets/images/dexlab.svg'
import coingecko from '../assets/images/coingecko.svg'
import raydium from '../assets/images/raydium.svg'
import coinmarketcap from '../assets/images/coinmarketcap.svg'
import jupiter from '../assets/images/jupiter.svg'

export default function Footer() {
    return (
        <div className="bg-green px-10 py-12 flex flex-row items-center justify-between flex-wrap">
            <img className='my-4' src={dexlab}></img>
            <img className='my-4' src={coingecko}></img>
            <img className='my-4' src={raydium}></img>
            <img className='my-4' src={coinmarketcap}></img>
            <img className='my-4' src={jupiter}></img>
        </div>
    )
}