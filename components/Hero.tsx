import Image from "next/image";
import FlipWordsReal from "./FlipWordsReal";
import CartIcon from "./CartIcon";

function Hero() {

    return (
        <header className="bg-hero bg-center z-20 bg-cover bg-no-repeat bg-black  sticky top-0 sm:p-8 py-8 px-4 flex justify-center lg:items-center text-center max-lg:flex-col w-full sm:gap-16 gap-0">
            <div className="flex-1 flex flex-col items-center sm:flex-row gap-2">
                <Image
                    src="./The_middle_finger.svg"
                    alt="logo"
                    width={25}
                    height={25}
                    className="object-contain z-10"
                />
                <FlipWordsReal />
            </div>
            <CartIcon />
        </header>
    );
}

export default Hero;