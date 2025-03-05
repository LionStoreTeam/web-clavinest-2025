import React from "react";
import Image from 'next/image';
import { BackgroundLines } from "@/components/ui/background-lines";



export function Hero() {
    return (
        <BackgroundLines className="my-5 flex flex-col justify-center items-center text-center">
            {/* <h2 className="mt-20 mb-10 text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-slate-600 dark:text-white font-sans tracking-tight">
                Alivia tus dolores físico
                <div className="my-5 mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="text-[#4f82c2]">
                        <span className="">Con Clavinest.</span>
                    </div>

                </div>
            </h2> */}
            <h1 className="text-4xl md:text-4xl lg:text-[80px] font-extrabold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700">
                <p className="p-2 text-slate-600">
                    Alivia tus dolores físicos
                </p>
                <br />
                <span className="hover:text-[#e3d3c6] transition-all ease-in-out duration-300">Con Clavinest.</span>
            </h1>
            <Image src="/logo-w.png" alt='' width={350} height={350} className="float pt-10 xl:pt-32" />
        </BackgroundLines>
    );
}
