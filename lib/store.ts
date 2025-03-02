import { StickerProp } from '@/components/StickerCard';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
    sticker: StickerProp;
    name: string;
    quantity: number;
    size: string;
    sync_id: number;
}

interface CartState {
    items: CartItem[];
    addItem: (sticker: StickerProp) => void;
    removeItem: (sync_id: number) => void;
}

const useCartStore = create(
    persist(
        (set, get): any => ({
            items: [],
            addItem: () => { },
        }),
        {
            name: 'cart', // name of the item in the storage (must be unique)
            // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)