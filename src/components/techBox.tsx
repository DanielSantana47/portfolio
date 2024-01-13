import { DarkMode } from "@/context/darkMode";
import { TechBoxType } from "@/types/techBoxType";
import { useContext } from "react";
import { FaReact } from "react-icons/fa";

export const TechBox = ({icon, label}: TechBoxType)=> {
    const darkModeCtx = useContext(DarkMode)

    return(
        <div className="flex items-center justify-center">
            <div className={`${darkModeCtx?.darkMode == true ? 'bg-zinc-200' : 'bg-zinc-700'} p-12 sm:p-14 md:p-20 flex  flex-col items-center justify-center rounded-lg group shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300`}>
            <img src={icon} className="w-28"/>
                <p className={`font-bold mt-6 sm:text-xl text-md absolute translate-y-10 text-transparent group-hover:translate-y-16 sm:group-hover:translate-y-18 md:group-hover:translate-y-20 ${darkModeCtx?.darkMode == true ? 'group-hover:text-black' : 'group-hover:text-white'} transition all duration-300`}>{label}</p>
            </div>
        </div>
    )
}