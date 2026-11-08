import React from 'react'

const Cart = ({ cart = [] }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Cart Total: {cart.length} item{cart.length === 1 ? '' : 's'}</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
