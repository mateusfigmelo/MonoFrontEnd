interface LeverageItemProps {
    image: any,
    title1: string,
    title2: string
}

export default function LeverageItem({ image, title1, title2 }: LeverageItemProps) {
    return (
        <div className="h-60 m-2 rounded-2xl bg-white py-10 flex flex-col items-center justify-center space-y-3" style={{ boxShadow: '0px 0px 30px 0px #00000040' }}>
            {image}
            <div className="text-base sm:text-2xl text-purple font-bold">{title1}</div>
            <div className="text-base sm:text-2xl text-gray font-bold">{title2}</div>
        </div>
    )
}