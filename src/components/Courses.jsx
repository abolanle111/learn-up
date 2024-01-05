import React from 'react'
import Heading from '../layout/Heading'
import woodWork from '/images/woodwork.jpg'
import culinary from '/images/culinary.jpg'
import barbering from '/images/barbering.jpg'
import fashion from '/images/fashion.jpg'
import plumbing from '/images/plumbing.jpg'
import interior from '/images/interior.jpg'
import CourseCard from '../layout/CourseCard'


const Courses = () => {
  return (
    <div className='min-h-[70vh] flex flex-col  items-center md:mx-32 mx-5  mt-10'>
            <Heading title1='Our' title2='Courses'/>

            <div className='flex flex-wrap justify-center gap-6 mt-6 '>
                <CourseCard img={woodWork} title='Woodwork/Carpentry' paragraph='Learn the art of crafting and building structures
                using wood,from furniture to intricate designs'/>
                <CourseCard img={culinary} title='Culinary Arts' paragraph='Delve into the culinary arts,learning the art of food
                preparation,cooking techniques and creating delicious dishes'/>
                <CourseCard img={barbering} title='Barbering/Hairstyling' paragraph='Explore the world of hair care, styling, grooming, mastering 
                techniques to create stunning looks for clients'/>
                <CourseCard img={fashion} title='Fashion Design' paragraph='Explore the world of fashion,from designing garments to
                sewings and bringing your creative visions to life'/>
                <CourseCard img={plumbing} title='Plumbing' paragraph='Learn the art of crafting and building structures
                using wood,from furniture to intricate designs'/>
                <CourseCard img={interior} title='Interior Design' paragraph='Learn the art of creating aesthetically pleasing and functional
                spaces,transforming interiors into beautiful and inviting environments' className=""/>
            </div>
    </div>
  )
}

export default Courses