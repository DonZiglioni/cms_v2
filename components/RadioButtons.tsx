"use client"
import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function RadioButtons({ variants, selectedValue, handleChange }: any) {


    return (
        <div className='flex flex-row  w-full -mt-2'>
            <div className='flex flex-row  justify-baseline  items-center'>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    sx={{ color: 'white' }}
                // inputProps={{ 'aria-label': 'A' }}
                />
                <p className='text-white font-light text-sm' >{variants[0].size}</p>
            </div>
            <div className='flex flex-row  justify-baseline items-center'>
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    sx={{ color: 'white' }}
                // inputProps={{ 'aria-label': 'B' }}
                />
                <p className='text-white font-light text-sm' >{variants[1].size}</p>
            </div>
            <div className='flex flex-row  justify-baseline items-center'>
                <Radio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value="c"
                    name="radio-buttons"
                    sx={{ color: 'white' }}
                // inputProps={{ 'aria-label': 'A' }}
                />
                <p className='text-white font-light text-sm' >{variants[2].size}</p>
            </div>
            <div className='flex flex-row  justify-baseline items-center'>
                <Radio
                    checked={selectedValue === 'd'}
                    onChange={handleChange}
                    value="d"
                    name="radio-buttons"
                    sx={{ color: 'white' }}
                // inputProps={{ 'aria-label': 'A' }}
                />
                <p className='text-white font-light text-sm' >{variants[3].size}</p>
            </div>
        </div>
    );
}