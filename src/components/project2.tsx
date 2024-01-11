import { ProjectType } from "@/types/project"

export const Project2 = ({body,src,title,site}:ProjectType)=> {
    return(
        <div className="w-full flex justify-center gap-6">
                <a href={site} target="_blank" className="flex-1 border border-zinc-400 rounded-xl overflow-hidden">
                    <img src={src} alt="" className="hover:scale-110 h-[500px] object-left object-cover transition-all duration-500"/>
                </a>
                <div className="flex-1 p-6">
                    <h3 className="text-5xl font-semibold mb-8">{title}</h3>
                    <p className="text-lg mb-16">{body}</p>
                    <div className="flex gap-16 mb-10">
                        <a href="" className="w-40 text-center py-3 text-2xl bg-zinc-800 rounded-md shadow-lg  shadow-black/30 text-white font-semibold hover:bg-primary hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                            Código
                        </a>
                        <a href={site} className="w-40 text-center py-3 text-2xl bg-zinc-800 shadow-lg shadow-black/30 rounded-md text-white font-semibold hover:bg-primary hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                            Site
                        </a>
                    </div>
                </div>

            </div>
    )
}