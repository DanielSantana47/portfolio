import { ProjectType } from "@/types/project"

export const Project1 = ({body,src,title,site}:ProjectType)=> {
    return(
        <div className="w-full flex justify-center gap-16">
                <div className="flex-1">
                    <h1 className="text-6xl font-semibold mb-8">{title}</h1>
                    <p className="text-xl mb-16">{body}</p>
                    <div className="flex gap-16">
                        <a href="" className="w-52 text-center py-3 text-2xl bg-black rounded-md shadow-lg  shadow-black/30 text-white font-semibold hover:bg-zinc-900 hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                            Código
                        </a>
                        <a href={site} className="w-52 text-center py-3 text-2xl bg-primary shadow-lg shadow-black/30 rounded-md text-white font-semibold hover:bg-red-500 hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                            Site
                        </a>
                    </div>
                </div>
                <a href={site} target="_blank" className="flex-1 rounded-xl overflow-hidden border border-zinc-400">
                    <img src={src} alt="" className="hover:scale-110 transition-all duration-500"/>
                </a>

            </div>
    )
}