import Image from "next/image";
import { fetchProducts } from "./action";
import StickerCard from "@/components/StickerCard";
import { StickerProp } from "@/components/StickerCard";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await fetchProducts(0)
  return (

    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>

  );
}
