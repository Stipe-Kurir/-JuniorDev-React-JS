import React from 'react'
import "./order.css"

const Order = (naziv) => {

  return (
    <div>
      <button className='btn'  value={naziv}  type="submit"  >Naruči</button>
    </div>
  )
}

export default Order
