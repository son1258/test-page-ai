"use client"

interface Props {
    icon: string,
    title: string,
    description: string
}

export default function HeadComponent({ icon, title, description }: Props) {
    return (
        <div className="flex items-center justify-center flex-col mb-[4%]">
            <span className="font-roboto px-custom-14 py-custom-6 bg-white flex items-center justify-center gap-4 text-[#f46177] rounded-lg shadow leading-custom-21 mb-2 text-[10px] md:text-xs screen-1400:text-sm uppercase">
                <img src={icon} />{title}
            </span>
            <div className="w-full">
                <h2 className="screen-1400:text-5xl md:text-custom-40 screen-425:text-3xl screen-320:text-custom-26 text-2xl screen-1400:leading-custom-56 md:leading-custom-52 leading-custom-24 text-[#1a1a1a] font-feature font-[700] text-center">{description}</h2>
            </div>
        </div>
    )
}