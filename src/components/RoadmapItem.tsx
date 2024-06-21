import circle from '../assets/images/circle.svg'

interface RoadmapItemProps {
    title: string,
    content: string[]
}

export default function RoadmapItem({ title, content }: RoadmapItemProps) {
    return (
        <div className="h-60 sm:h-72 rounded-2xl p-4 sm:p-5 md:p-8 m-2 flex flex-col space-y-2" style={{ boxShadow: '0px 10px 20px 0px #00000026' }}>
            <div className='flex flex-row justify-between sm:flex-col items-center sm:items-start '>
                <div className="text-xl">{title}</div>
                <img className='w-6 sm:w-20' src={circle}></img>
            </div>
            <ul className='list-outside'>
                {
                    content.map((item, index) => (
                        <li key={index} className='text-xs'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}