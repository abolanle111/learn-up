import React from 'react'
import { Link } from 'react-scroll'
import Button from '../layout/Button'
import hero from '/images/hero.jpg'

const Home = () => {
  return (
    <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5  mt-10'>
        <div className='md:w-2/4 text-center'>
            <h2 className='text-5xl font-semibold leading-tight'>Master Skills,Achieve Greatness!</h2>

            <p className='text-start mt-5'>Welcome to our vocational learning institute! Get ready to 
                embark on an exicting of skill development and career advancement.
                We are here to support you every step of the way!
            </p>

            <Link to='/' spy={true} smooth={true} duration={500}>
                <Button title='Learn More'/>
            </Link>
        </div>

        <div className='w-full md:w-2/4 mx-16'>
            <img src={hero} alt="hero" />
        </div>
    </div>
  )
}

export default Home