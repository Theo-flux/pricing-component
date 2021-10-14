import React, {useContext} from 'react';
import './Card.css'
import PriceRange from './PriceRange'
import Bill from './Bill'
import Toggler from './Toggler'
import Footer from './Footer'
import {Context} from '../Context'

export default function Card() {
  const {billRange} = useContext(Context)

  return(
    <main className="main container">
        <h3>{billRange}K PAGEVIEWS</h3>
        <PriceRange/>
        <Bill/>
        <Toggler/>
        <Footer/>
    </main>
  )
}
