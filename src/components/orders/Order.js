import { FiEdit3 } from 'react-icons/fi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useState } from 'react';
import Axios from 'axios';
import './orders.css';

const Order = ({ name, flavor, qty, hasPaid, notes, id }) => {
  const [isPaid, setIsPaid] = useState(hasPaid);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [nameChange, setNameChange] = useState(name);
  const [flavorChange, setFlavorChange] = useState(flavor);
  const [qtyChange, setQtyChange] = useState(qty);
  const [isDeleted, setIsDeleted] = useState(false);

  const handlePay = () => {
    Axios.put('https://cheesecake-shop.herokuapp.com/update-order-pay', {
      id,
      hasPaid: !isPaid
    })
    setIsPaid(!isPaid);
  }

  const showButtons = () => {
    setIsButtonVisible(!isButtonVisible);
  }
  const enableEdit = () => {
    setIsEdit(!isEdit);
  }

  const confirmEdit = () => {
    Axios.put('https://cheesecake-shop.herokuapp.com/update-order', {
      id,
      name: nameChange,
      flavor: flavorChange,
      quantity: qtyChange
    })
    setIsEdit(false)
  }

  const deleteOrder = () => {
    Axios.delete(`https://cheesecake-shop.herokuapp.com/delete-order/${id}`);
    setIsDeleted(true);
  }

  if (isDeleted) return '';
  return <div className='customer-order-container' style={{background: isPaid ? 'rgba(56, 107, 45)': 'rgba(158, 1, 7)'}}>
    <button className='pay-btn' onClick={handlePay}><FaMoneyBillWave></FaMoneyBillWave></button>
    <div className='customer-info'>
      <h3 className='customer-name'>{nameChange}</h3>
      <p className='customer-flavor'>{flavorChange}</p>
      <p className='customer-qty'>{qtyChange}</p>
      <button className='edit-btn-icon' onClick={showButtons}><FiEdit3></FiEdit3></button>
    </div>
    <p className='customer-notes'>{notes}</p>
    <span className='edit-btn-container'>
      <input type='text' placeholder={name} value={nameChange} onChange={(e) => setNameChange(e.target.value)} className='edit-name' style={{display: isEdit ? 'inline': 'none'}} />
      <input type='text' placeholder={flavor} value={flavorChange} onChange={(e) => setFlavorChange(e.target.value)} className='edit-flavor' style={{display: isEdit ? 'inline': 'none'}} />
      <input type='text' placeholder={qty} value={qtyChange} onChange={(e) => setQtyChange(e.target.value)} style={{display: isEdit ? 'inline': 'none'}} className='edit-qty' />
    </span>
    <button className='confirm-btn' style={{display: isEdit ? 'block': 'none'}} onClick={confirmEdit}>Confirm</button>
    <button className='edit-btn' style={{display: isButtonVisible ? 'block': 'none'}} onClick={enableEdit}>Edit</button>
    <button className='delete-btn' style={{display: isButtonVisible ? 'block': 'none'}} onClick={deleteOrder} >Delete</button>
  </div>

}
export default Order;