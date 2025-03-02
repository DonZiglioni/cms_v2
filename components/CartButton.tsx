"use client"
import React, { useState } from 'react'
import { useAppContext } from '@/context'

function CartButton({ variants, sticker }: any) {
    const { cart, setCart } = useAppContext()
    // const [items, setItems] = useState<any[]>([])
    const [isAdded, setIsAdded] = useState(false)

    const removeFromCart = () => {

    }

    const addToCart = () => {
        if (isAdded) {
            let tempCart = cart
            for (let i = 0; i < tempCart.length; i++) {
                // console.log(cart[i]);
                if (sticker.id === tempCart[i].sticker.id) {
                    tempCart.splice(i, 1)
                    setCart(tempCart)
                    setIsAdded(!isAdded)
                    console.log("NEW???", tempCart.length);
                }
            }
        } else {
            let newItem = {
                sticker: sticker,
                variants: variants,
                quantity: 1,
                size: 'a',
                sync_id: variants[0].sync_product_id
            }
            // console.log("Leggo: ", newItem);
            setCart((cart: any) => [...cart, newItem])
            setIsAdded(!isAdded)

        }
    }

    return (
        <div
            className={`flex flex-row gap-2 justify-end w-full`}
            onClick={() => {
                addToCart()
                console.log(cart);

            }}
        >
            <p className={`text-base hover:bg-[rgba(255,255,255,0.1)] cursor-pointer rounded-xl px-3 py-1 font-bold text-[#FFAD49]  ${isAdded ? "border-2 border-green-400" : null}`}>
                {isAdded ? "Remove" : "Add to cart"}
            </p>
        </div>
    )
}

export default CartButton