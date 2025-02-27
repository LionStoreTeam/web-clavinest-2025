"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { TypeAnimation } from "react-type-animation";

export function GridImages() {
    return (
        <div className="h-screen w-full my-10 flex flex-col md:mb-32">
            <h1 className="text-[30px] font-extrabold md:text-[50px] xl:text-[70px]">
                <TypeAnimation
                    sequence={[
                        'Clavinest',
                        1000,
                        'Sus Presentaciones',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </h1>
            <LayoutGrid cards={cards} />
        </div>
    );
}



const cards = [
    {
        id: 1,
        className: "md:col-span-2",
        thumbnail:
            "https://images.pexels.com/photos/9774615/pexels-photo-9774615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        className: "col-span-1",
        thumbnail:
            "/bottle-1.png",
    },
    {
        id: 3,
        className: "col-span-1",
        thumbnail:
            "/bottle-2.png",
    },
    {
        id: 4,
        className: "md:col-span-2",
        thumbnail:
            "/bottle-3.png",
    },
];
