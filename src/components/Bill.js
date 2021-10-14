import React,{useContext} from 'react';
import './Bill.css'
import {Context} from '../Context'
export default function Bill() {
  const {amount, premium} = useContext(Context)

  return(
    <div className="bill">
      <h1>${amount}</h1><small> / {premium}</small>
    </div>
  )
}
