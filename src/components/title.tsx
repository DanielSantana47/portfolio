import { TitleType } from "@/types/title"

export const Title = ({label}:TitleType)=> {
    return(
        <div className="mb-0">
                <h2 className="text-7xl inline-block pb-6 font-bold">{label}</h2>
                <div className="w-52 border-b-4 border-primary"></div>
            </div>
    )
}