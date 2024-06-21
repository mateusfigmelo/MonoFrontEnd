import tokenomics from '../assets/images/tokenomics.svg'

export default function Tokenomics() {
    return (
        <div id="tokenomics" className="section py-8 sm:py-16 flex flex-col items-center bg-black">
            <div className="hidden sm:block text-2xl sm:text-5xl text-green font-black">TOKENOMICS</div>
            <div className="px-8 sm:px-10 md:px-20 lg:px-28 xl:px-32 py-4 sm:py-16 grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
                <div className="flex flex-col space-y-6">
                    <div className="text-2xl sm:text-4xl text-white font-black text-center sm:text-left">Token Distribution</div>
                    <div className="text-base sm:text-2xl text-gray text-center sm:text-left">
                        5% monthly token burn totalling 40% of the supply.<br />
                        Team will receive 30% of their distribution at launch while 70% will be vested over burn duration.
                    </div>
                </div>
                <div className='pl-4 mt-4 sm:mt-0 w-full flex flex-col items-end'>
                    <img src={tokenomics} className=""></img>
                </div>
            </div>
        </div>
    )
}