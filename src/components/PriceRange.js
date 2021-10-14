import React, {useContext} from 'react';
import './PriceRange.css'
import {Context} from '../Context'

export default function PriceRange(){
  const {billRange, handleRange} = useContext(Context)

  return(
    <div className="price-range">
      <input
        type="range"
        min="0"
        value={billRange}
        max="200"
        step="25"
        onChange={handleRange}
      />
      <div className="price-meter"></div>
    </div>
  )
}
