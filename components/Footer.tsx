import Image from "next/image";

function Footer() {
  return (
    <footer className="sticky bottom-0 sm:px-16 py-2 px-4 flex justify-center items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-center text-white">©2025 CancelMeStickers.com</p>
      <Image
        src="./The_middle_finger.svg"
        alt="logo"
        width={14}
        height={14}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        {/* <Image
          src="./instagram.svg"
          alt="logo"
          width={14}
          height={14}
          className="object-contain"
        /> */}
        {/* <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />

        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        /> */}
      </div>
    </footer>
  );
}

export default Footer;
