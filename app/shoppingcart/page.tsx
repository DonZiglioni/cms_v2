"use client"
import React, { useState, useEffect } from 'react'
import CartItem from '@/components/CartItem'
import { useAppContext } from '@/context'
import { fetchProduct } from '../action'
function page() {
    const { cart, setCart } = useAppContext()
    const [cartItems, setCartItems] = useState()

    // useEffect(() => {
    //     cart.map(async (item: any) => {
    //         let res: any = await fetchProduct(item.id);
    //         setCartItems(res)
    //         console.log("RES:::", res);

    //     });
    // }, [])

    return (
        <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <section className="flex items-center justify-center flex-col">
                <h1 className='font-bold text-3xl'>CART</h1>
                <ul>
                    {cart.map((item: any, index: number) => {
                        return <CartItem id={item.id} />
                    })}
                </ul>

            </section>

        </main>
    )
}

export default page