"use client"
import React, { useState } from 'react'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                id="dropdownHelperRadioButton"
                className="text-white bg-[rgba(0,150,255,.5)] hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-0.5 text-center inline-flex items-center" type="button">
                Select Size
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* {isOpen ?
                <div className='h-50 w-50 bg-white z-30'>
                    open
                </div>
                :
                null
            } */}
        </div>
    )
}

export default Dropdown