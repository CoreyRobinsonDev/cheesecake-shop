import { useState, useEffect } from 'react';
import Axios from 'axios';

import Order from './Order';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/orders').then((res) => {
      setOrders(res.data);
    })
  }, [])
  console.log(orders);
  return <section className='orders-container'>
    <span className='table-header'><p>Name</p><p>Flavor</p><p>Quantity</p><p>Edit | Delete</p></span>
    {
      orders.map(order => <Order name={order.name} flavor={order.flavor} qty={order.quantity} notes={order.notes} hasPaid={order.hasPaid} id={order._id} />)
    }
  </section>
}
export default Orders;