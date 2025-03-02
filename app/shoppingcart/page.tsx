"use client"
import React, { useState, useEffect } from 'react'
import CartItem from '@/components/CartItem'
import { useAppContext } from '@/context'
import { fetchProduct } from '../action'
import Link from 'next/link'
function page() {
    const { cart, setCart } = useAppContext()
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    const getTotal = (newCart: any) => {
        let total = 0;
        newCart.map((item: any) => {
            switch (item.size) {
                case "a":
                    total = total + (parseFloat(item.variants[0].retail_price) * item.quantity);
                    break;
                case "b":
                    total = total + (parseFloat(item.variants[1].retail_price) * item.quantity);
                    break;
                case "c":
                    total = total + (parseFloat(item.variants[2].retail_price) * item.quantity);
                    break;
                case "d":
                    total = total + (parseFloat(item.variants[3].retail_price) * item.quantity);
                    break;
                default:
                    break;
            }
        })
        setTotal(total)
    }

    const modifySize = (newSize: any, sync_id: number) => {
        let tempCart = cart
        for (let i = 0; i < tempCart.length; i++) {
            const element = tempCart[i];

            if (element.sync_id === sync_id) {
                element.size = newSize;
            }
        }
        console.log("New?", tempCart);
        getTotal(cart)

    }

    const modifyQuantity = (newQuantity: number, sync_id: number) => {
        let tempCart = cart
        for (let i = 0; i < tempCart.length; i++) {
            if (tempCart[i].sync_id === sync_id) {
                if (newQuantity === 1) {
                    tempCart[i].quantity++;
                } else if (newQuantity === -1) {

                    if (tempCart[i].quantity === 1) {
                        return;
                    } else {
                        tempCart[i].quantity--;
                    }
                }
            }
        }
        console.log("New?", tempCart);
        getTotal(cart)
    }


    useEffect(() => {
        getTotal(cart)
    }, [cart])

    return (
        <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <section className="flex items-center justify-center flex-col">
                <div className='w-full flex justify-between flex-row items-center px-24'>
                    <h1 className='font-bold text-3xl'>CART</h1>
                    <Link href='/'>
                        <h1 className='text-white bg-blue-900 py-2 px-4 rounded-xl'>Go Back</h1>
                    </Link>
                </div>
                <ul className="w-full h-auto">
                    {cart.map((item: any, index: number) => {
                        return <CartItem
                            key={index}
                            sticker={item.sticker}
                            variants={item.variants}
                            quantity={item.quantity}
                            sync_id={item.sync_id}
                            modifySize={modifySize}
                            modifyQuantity={modifyQuantity}
                            size={item.size}
                        />
                    })}
                </ul>
                <div className='text-green-400 py-1 pr-24 h-20 w-full flex flex-row justify-end items-center'>
                    SUBTOTAL: ${total}.00
                </div>
            </section>

        </main>
    )
}

export default page