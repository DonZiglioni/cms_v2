"use client"
import React, { useEffect, useState } from 'react'
import { StickerProp } from './StickerCard'
import Image from 'next/image'
import Dropdown from './Dropdown'
import RadioButtonsGroup from './RadioButtons'

function CartItem({ sticker, size, variants, quantity, modifyQuantity, sync_id, modifySize }: any) {
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [selectedVariant, setSelectedVariant] = React.useState(0);
    const [selectedQuantity, setSelectedQuantity] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value
        console.log(value);
        modifySize(value, sync_id);
        setSelectedValue(event.target.value);
        switch (value) {
            case "a":
                setSelectedVariant(0)
                break;
            case "b":
                setSelectedVariant(1)
                break;
            case "c":
                setSelectedVariant(2)
                break;
            case "d":
                setSelectedVariant(3)
                break;
            default:
                break;
        }
    };

    const handleQuantity = (num: number) => {
        if (num === 1) {
            //console.log("adding");
            modifyQuantity(1, sync_id)
            setSelectedQuantity(selectedQuantity => selectedQuantity + 1)
            // console.log(selectedQuantity);

        } else if (num === -1) {
            // console.log("removing", selectedQuantity);
            if (selectedQuantity === 1) {
                return;
            } else {
                modifyQuantity(-1, sync_id)
                setSelectedQuantity(selectedQuantity => selectedQuantity - 1)
                //  console.log(selectedQuantity);
            }
        }
    }

    useEffect(() => { }, [quantity])

    return (
        <div className='border-b-1 border-[rgba(255,255,255,.1)] py-1 h-20 w-full flex flex-row justify-between items-center'>
            <div className='w-[50%] flex gap-4 pl-4  h-full'>
                <Image src={variants[0].files[0].preview_url} height={70} width={70} alt={sticker.name} className='rounded-lg bg-[rgba(255,255,255,.25)] object-contain' />
                <div className='pt-2'>
                    <h1 className='text-white'>{sticker.name}</h1>
                    <div className='w-full '>
                        <RadioButtonsGroup variants={variants} selectedValue={selectedValue} handleChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className='w-[25%] h-full pt-2 '>
                <p>
                    SIZE: {variants[selectedVariant].size}
                </p>
                <p>
                    PRICE: {variants[selectedVariant].retail_price}
                </p>
            </div>
            <div className='w-[25%] h-full flex items-center justify-center flex-col'>
                <p>Quantity</p>
                <div className='flex items-center gap-4 justify-center'>
                    <p className='cursor-pointer' onClick={() => handleQuantity(-1)}>-</p>
                    {selectedQuantity}
                    <p className='cursor-pointer' onClick={() => handleQuantity(1)}>+</p>
                </div>
                <h1 className='text-white'>${variants[selectedVariant].retail_price * selectedQuantity}</h1>
            </div>
        </div>
    )
}

export default CartItem