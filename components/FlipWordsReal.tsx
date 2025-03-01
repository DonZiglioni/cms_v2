import React from 'react'
import { FlipWords } from './ui/flip-words'
function FlipWordsReal() {
  const words = ["STICKERS!", "FAGGOT!", "RETARD!", "TRANNY!", "KAREN!", "CHINK!", "BITCH!", "NOW!"];

  return (
    <div className="flex items-center px-4 z-20">
      <div className="text-4xl font-bold text-neutral-100 dark:text-neutral-900">
        CANCEL ME
        <FlipWords words={words} className='text-red-500 font-bold' />
      </div>
    </div>
  )
}

export default FlipWordsReal