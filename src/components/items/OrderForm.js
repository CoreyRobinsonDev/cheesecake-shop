import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import './orderForm.css'


const OrderForm = ({product}) => {
  const [name, setName] = useState('');
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState('');
  const [redirect, setRedirect] = useState(<></>);

  const picture = product === 'strawberry' ? '/pictures/strawberry.webp'
    : product === 'oreo' ? '/pictures/oreo.webp'
      : '/pictures/sundae.jpg'
  const title = product === 'strawberry' ? 'Strawberry Cheesecake Crunch'
    : product === 'oreo' ? 'Oreo Cheesecake Crunch'
      : 'Cheesecake Sundae'

  const handleSubmit = () => {
    Axios.post('https://cheesecake-shop.herokuapp.com/order', {
      name,
      quantity: qty,
      notes,
      flavor: product,
      hasPaid: false
    }).then(
      setRedirect(<Redirect to='/success'></Redirect>)
    )
  }
  
  return <section className='order-container'>
    {redirect}
    <img className='img' src={picture} alt='' />
    <h3 className='title'>{title}</h3>
    <form onSubmit={handleSubmit} className='form'>  
      <label className='quantity-label'>Quantity</label>
      <input className='quantity' type='number' value={qty} onChange={(e) => setQty(e.target.value)} required/>
      <label className='name-label'>Name</label>
      <input className="name" type='text' value={name} onChange={(e) => setName(e.target.value)} required />
      <label className="notes-label">Notes (optional)</label>
      <textarea focus className="notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
      <button type='submit' className='order-btn'>Place Order</button>
    </form>
    <Link to='/' className='back-btn'>Back</Link>
  </section>
}
export default OrderForm;