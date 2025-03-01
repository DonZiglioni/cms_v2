"use client"
import React, { useState } from 'react'
import { useAppContext } from '@/context'

function CartButton({ variants, sticker }: any) {
    const { cart, setCart } = useAppContext()
    const [items, setItems] = useState<any[]>([])
    const [isAdded, setIsAdded] = useState(false)

    const removeFromCart = () => {
        console.log("REMOVING", sticker)
        let tempCart = cart
        for (let i = 0; i < cart.length; i++) {
            if (sticker.title === cart[i].title) {
                tempCart.splice(i, 1)
                console.log("NEW CART", tempCart)
                setIsAdded(!isAdded)
            }
        }
    }

    const addToCart = (vars: any) => {
        if (isAdded) {
            removeFromCart()
            return;
        }
        console.log(sticker);
        console.log("CART: ", cart);
        let tempCart = cart
        console.log("1", tempCart);
        tempCart.push(sticker)
        console.log("2", tempCart);
        setIsAdded(!isAdded)
    }

    return (
        <div
            className="flex flex-row gap-2 justify-end  w-full"
            onClick={() => {
                addToCart(sticker)
            }}
        >
            <p className="text-base hover:bg-[rgba(255,255,255,0.1)] cursor-pointer rounded-xl px-3 py-1 font-bold text-[#FFAD49]">
                {isAdded ? "Remove" : "Add to cart"}

            </p>
        </div>
    )
}

export default CartButton