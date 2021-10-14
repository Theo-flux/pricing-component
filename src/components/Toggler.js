import React,{useContext} from 'react';
import './Toggler.css'
import {Context} from '../Context'

export default function Toggler() {
  const {isToggled, handleChange} = useContext(Context)

  return(
    <div className="toggle">
      <small>Monthly Billing</small>
      <label className="switch">
        <input
          name = "isToggled"
          type="checkbox"
          checked={isToggled}
          onChange={handleChange}
        />
        <span className="toggler" />
      </label>
      <small>Yearly Billing</small>
      <p className="discount">-25%</p>
    </div>
  )
}
