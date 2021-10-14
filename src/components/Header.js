import React from 'react';
import './Header.css'
import Pattern from '../images/pattern-circles.svg'

export default function Header() {

  return(
    <header className="header container">
      <img src={Pattern} alt="pattern circles"/>
      <div className="caption">
        <h1>Simple traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
    </header>
  )
}
