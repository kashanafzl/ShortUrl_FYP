import React from 'react'
import './Footer.css'

import facebookimg from '../../../Assets/Img/facebook.svg'
import instragramimg from '../../../Assets/Img/instragram.svg'
import twitterimg from '../../../Assets/Img/twitter.svg'
import githubimg from '../../../Assets/Img/github.svg'

export default function Footer() {
  return (
    <>
    <div className='footermain'>
        <div>
            <h1>URL Shortnening</h1>

            <div className='iconsmaindiv'>
                <img src={facebookimg} alt="" />
                <img src={instragramimg} alt="" />
                <img src={twitterimg} alt="" />
                <img src={githubimg} alt="" />
            </div>
        </div>

        <div>
            <ul className='footerlinks'>
                <li><a href="/">Plans & Pricing</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Privacy</a></li>
            </ul>
        </div>

      
    </div>
    

    </>
  )
}
