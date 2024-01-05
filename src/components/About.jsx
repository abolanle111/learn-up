import React from 'react'
import onboard from '/images/onboard.jpg'
import { Link } from 'react-scroll'
import Button from '../layout/Button'
import Heading  from '../layout/Heading'

const About = () => {
  return (
    <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5  md:mx-32 mx-5 mt-10'>
        <div className='w-full md:w-2/4 '>
            <img src={onboard} alt="" />
        </div>
        <div className='w-full md:w-2/4 text-center space-y-2 mx-16'>
            <Heading title1='About' title2='Us'/>
            <p>Our vocational learning program offers hands-on training in high-demand industries like woodwork,interior decor,
                fashion designing and other trades. With our industry-relevant curriculum and experienced instructors, you will 
                gain the skills needed to thrive in your chosen field.
            </p>

            <Link to='/' spy={true} smooth={true} duration={500}>
                <Button title='Learn More'/>
            </Link>
        </div>
    </div>
  )
}

export default About