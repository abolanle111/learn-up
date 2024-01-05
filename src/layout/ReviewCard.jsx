import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='w-full md:w-1/3  bg-white  border-2 md:border-none  p-5 cursor-pointer
    rounded-lg hover:shadow-lg transition-all'>
        <div>
            <p>{props.paragraph}
            </p>
        </div>
        <div className='flex flex-row justify-center'>
            <img className='rounded-full w-20 h-20 pt-2' src={props.img} alt="" />
        </div>
    </div>
  )
}

export default ReviewCard