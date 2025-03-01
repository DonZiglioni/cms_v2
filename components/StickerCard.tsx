import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import CartButton from "./CartButton";
export interface StickerProp {
    id: string;
    name: string;
    image: {
        original: string;
    };
    thumbnail_url: string;
    price: number;
    price_id: number;
    other: string;
}

interface Prop {
    sticker: StickerProp;
    index: number;
    variants: any;
}

const varients = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

function StickerCard({ sticker, index, variants }: Prop) {

    let transImg = variants[0].files[0].preview_url
    let minPrice = variants[0].retail_price
    let maxPrice = variants[variants.length - 1].retail_price
    return (
        <MotionDiv
            variants={varients}
            initial="hidden"
            animate="visible"
            transition={{
                delay: index * 0.25,
                ease: "easeInOut",
                duration: 0.5
            }}
            viewport={{ amount: 0 }}
            className="max-w-sm rounded relative w-full">
            <div className="relative w-full h-[37vh] bg-[rgba(255,255,255,0.5)] rounded-xl shadow-amber-700 shadow-md ">
                <Image
                    src={transImg}
                    alt={sticker.name}
                    fill
                    objectFit="contain"
                    className="rounded-xl"
                />
            </div>
            <div className="py-4 flex flex-col gap-3">
                <div className="flex justify-between items-center gap-1">
                    <div className="py-1 px-2 bg-[#161921] rounded-sm w-full text-center">
                        <p className="text-white text-xl font-bold capitalize">
                            {sticker.name}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex flex-row gap-2 w-full items-center">
                        <p className="text-base text-white font-bold">
                            ${minPrice} - ${maxPrice}
                        </p>
                    </div>
                    <CartButton variants={variants} sticker={sticker} />
                </div>
            </div>
        </MotionDiv>
    );
}

export default StickerCard;
