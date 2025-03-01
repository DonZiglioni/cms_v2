"use client"
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { JSX, useEffect, useState } from "react";
import { fetchProducts } from "@/app/action";
import StickerCard from "./StickerCard";

let page = 8;

export type AnimeCard = JSX.Element

function LoadMore() {
    const { ref, inView, entry } = useInView();
    const [data, setData] = useState<AnimeCard[]>([]);
    const [endList, setEndList] = useState<Boolean>(false);

    useEffect(() => {
        if (inView) {
            fetchProducts(page).then((res) => {
                setData([...data, ...res])

                page += 8
            })
        }
    }, [inView, data])

    return (
        <>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {data}
            </section>
            <section className="flex justify-center items-center w-full">
                <div ref={ref}>
                    {endList ? null :
                        <Image
                            src="./spinner.svg"
                            alt="spinner"
                            width={56}
                            height={56}
                            className="object-contain"
                        />
                    }
                </div>
            </section>
        </>
    );
}

export default LoadMore;
