import { TechBoxType } from "@/types/techBoxType";
import { FaReact } from "react-icons/fa";

export const TechBox = ({icon, label}: TechBoxType)=> {
    return(
        <div className="flex items-center justify-center">
            <div className="bg-zinc-300/50 p-20 flex flex-col items-center justify-center rounded-lg group">
                {icon}
                <p className="font-bold mt-6 text-xl absolute translate-y-14 text-transparent group-hover:translate-y-20 group-hover:text-primary transition all duration-300 ">{label}</p>
            </div>
        </div>
    )
}