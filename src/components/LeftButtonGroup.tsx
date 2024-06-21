import telegram from '../assets/images/telegram.png'
import twitter from '../assets/images/twitter.png'
import discord from '../assets/images/discord.png'

export default function LeftButtonGroup() {
    return (
        <div className="h-0 pl-4 flex flex-col space-y-6 sticky top-32 sm:top-64 z-20">
            <a className='hover:animate-bounce w-10 sm:w-16' href='https://t.me/BullSolanaOfficial'><img src={telegram}></img></a>
            <a className='hover:animate-bounce w-10 sm:w-16' href='https://twitter.com/bullsolana__'><img src={twitter}></img></a>
            <a className='hover:animate-bounce w-10 sm:w-16' href='https://discord.io/BullSolana'><img src={discord}></img></a>
        </div>
    )
}