import { FiEdit3 } from 'react-icons/fi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useState } from 'react';
import './orders.css';

const Order = ({ name, flavor, qty, hasPaid, notes, id }) => {
  const [isPaid, setIsPaid] = useState(hasPaid);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handlePay = () => {
    setIsPaid(!isPaid);
  }
  const showButtons = () => {
    setIsButtonVisible(!isButtonVisible);
  }
  return <div className='customer-order-container' style={{background: isPaid ? 'rgba(0, 255, 0, .5)': 'rgba(255, 0, 0, .5)'}}>
    <button className='pay-btn' onClick={handlePay}><FaMoneyBillWave></FaMoneyBillWave></button>
    <div className='customer-info'>
      <h3 className='customer-name'>{name}</h3>
      <p className='customer-flavor'>{flavor}</p>
      <p className='customer-qty'>{qty}</p>
      <button className='edit-btn-icon' onClick={showButtons}><FiEdit3></FiEdit3></button>
    </div>
    <p className='customer-notes'>{notes}</p>
    <button className='edit-btn' style={{display: isButtonVisible ? 'block': 'none'}}>Edit</button>
    <button className='delete-btn' style={{display: isButtonVisible ? 'block': 'none'}}>Delete</button>
  </div>
}
export default Order;