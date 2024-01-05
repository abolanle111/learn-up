import React from 'react'
import Heading from '../layout/Heading'
import ReviewCard from '../layout/ReviewCard'
import Decor from '/images/interiordecor.jpg'
import Carpentar from '/images/carpentar.jpg'
import hairStylist from '/images/hairstylist.jpg'


const Review = () => {
  return (
    <div className='min-h[80vh] flex flex-col items-center justify-center md:px-32 px-5 mt-10'>
        <Heading title1="Our" title2="Reviews"/>

        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReviewCard img={Decor}  paragraph='"Taking the interior decor course was the best decision i ever made! I learned
            how to transform any space into a beautiful and inviting environment Now i have my own successful interior 
            design business and i love every moment of it." -Sarah' />
            <ReviewCard img={Carpentar} paragraph='"I have always had the passion for working with wood,so i enrolled in a 
            woodwork vocational course. It was an incredible experience,i learned how to create stunning furniture
            pieces from scratch.Now i have my own Furniture Company and i get to do what i love every day." -Micheal'/>
            <ReviewCard img={hairStylist} paragraph='"Becoming a hairstylist was a dream come true for me.The vocational course 
            taught me everything from basic cuts to intricate updos.Now i own a trendy salon and i get to make people feel
            confident and beautiful everyday." -Emily'/>

        </div>
    </div>
  )
}

export default Review