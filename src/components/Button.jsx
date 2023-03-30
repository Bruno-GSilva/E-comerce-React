import React from 'react'

export default function Button(props) {
  return (
    <button className='font-bold text-sm rounded-lg bg-Primary px-10 py-2 text-DarkGray-60 tracking-[0.75px] mr-16 hover:scale-95 hover:bg-Tertiary'>
        {props.text}
    </button>
  )
}
