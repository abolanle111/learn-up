import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='bg-black text-yellow py-2 px-5 rounded-2xl mt-4  hover:shadow hover:shadow-black  transition-all'>
            {props.title}
        </button>
    </div>
  )
}

export default Button;