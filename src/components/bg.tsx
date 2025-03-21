import Image from "next/image"

export const BG = ()=>{
    return (
        <div className="w-full">
            <Image src="/BG.png" width={1000} height={1000} alt="loading" className="w-full"/>
        </div>
    )
}