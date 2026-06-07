import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>We are a trusted real estate platform committed to helping buyers, sellers,
  and renters find the perfect property. With verified listings, expert
  guidance, and a customer-first approach, we make the process of finding
  homes, apartments, and investment properties simple, secure, and efficient.</p>
            <p>For years, we have helped clients find properties that match their lifestyle and financial goals. From modern apartments and family residences to luxury villas and commercial spaces, our commitment is to deliver quality, trust, and value in every real estate transaction.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
