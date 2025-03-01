"use server";
// import AnimeCard from "@/components/AnimeCard";
// import { AnimeProp } from "@/components/AnimeCard";
import StickerCard from "@/components/StickerCard";
import { StickerProp } from "@/components/StickerCard";
import CartItem from "@/components/CartItem";

export const fetchProducts = async (page: number) => {
    const printfulKey = 'CORGJctw2BuzedyKDNjl3PVoXUH9n6Nqu5xJVDRo'
    const response = await fetch(`https://api.printful.com/store/products?offset=${page}&limit=8?`, {
        headers: {
            'Authorization': `Bearer ${printfulKey}`
        }
    });
    let data = await response.json()

    const getInfo = async (productID: any) => {
        const productInfo = await fetch(`https://api.printful.com/store/products/${productID.id}`, {
            headers: {
                'Authorization': `Bearer ${printfulKey}`
            }
        });
        let info = await productInfo.json()
        // console.log(info.result.sync_product);
        return info.result

    }


    return data.result.map(async (item: StickerProp, index: number) => {
        const result = await getInfo(item);
        return <StickerCard key={item.id} sticker={await result.sync_product} variants={await result.sync_variants} index={index} />
    })
}

export const fetchProduct = async (id: number) => {
    const printfulKey = 'CORGJctw2BuzedyKDNjl3PVoXUH9n6Nqu5xJVDRo'

    const getInfo = async (productID: any) => {
        console.log("FETCHING", id);
        const productInfo = await fetch(`https://api.printful.com/store/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${printfulKey}`
            }
        });
        const info = await productInfo.json()
        console.log(info.result.sync_variants);

        return { res: info.result.sync_variants }

    }
    getInfo(id)

    // return data.result.map(async (item: StickerProp, index: number) => {
    //     const result = await getInfo(item);
    //     return <StickerCard key={item.id} sticker={await result.sync_product} variants={await result.sync_variants} index={index} />
    // })
}