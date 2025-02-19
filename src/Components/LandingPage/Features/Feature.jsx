import React from 'react'
import './Feature.css'

import handimg from '../../../Assets/Img/hand.svg'
import shorturlimg from '../../../Assets/Img/copy.svg'
import secureimg from '../../../Assets/Img/sequre.svg'
import reliableimg from '../../../Assets/Img/reliable.svg'


export default function Feature() {
  return (
    <div>
    <div className='fh1'>
        <h1>Features</h1>

       <div className="mainparentdiv">
       <div className='featurediv'>
            <img src={handimg} alt="" />
            <h2>Easy</h2>
            <p>ShorURL is easy and fast, enter the long link to get your shortened link</p>
        </div>
        <div className='featurediv'>
            <img src={shorturlimg} alt="" />
            <h2>Shortened</h2>
            <p>ShorURL is easy and fast, enter the long link to get your shortened link</p>
        </div>
        <div className='featurediv'>
            <img src={secureimg} alt="" />
            <h2>Secure</h2>
            <p>ShorURL is easy and fast, enter the long link to get your shortened link</p>
        </div>
        <div className='featurediv'>
            <img src={reliableimg} alt="" />
            <h2>Reliable</h2>
            <p>ShorURL is easy and fast, enter the long link to get your shortened link</p>
        </div>

       </div>

    </div>
    </div>
  )
}
