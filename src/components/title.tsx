import { TitleType } from "@/types/title"

export const Title = ({label}:TitleType)=> {
    return(
        <div className="mb-0">
                <h2 className="text-4xl sm:text-6xl md:text-7xl inline-block md:pb-6 pb-3 font-bold">{label}</h2>
                <div className="w-32 md:w-52 md:border-b-4 border-b-2 border-primary"></div>
            </div>
    )
}