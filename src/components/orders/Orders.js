import { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Order from './Order';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  let totalStrawberry = useRef(0);
  let totalOreo = useRef(0);
  let totalSundae = useRef(0);
  let total = useRef(0);
  let net = useRef(0);
  const adminUser = process.env.REACT_APP_USERNAME;
  const adminPassword = process.env.REACT_APP_PASSWORD;

  useEffect(() => {
    Axios.get('https://cheesecake-shop.herokuapp.com/orders').then((res) => {
      setOrders(res.data);
    })
  }, [])

  useEffect(() => {
    orders.forEach(order => {
      total.current += order.quantity
      switch (order.flavor) {
        case 'strawberry':
          totalStrawberry.current += order.quantity;
          break;
        case 'oreo':
          totalOreo.current += order.quantity;
          break;
        case 'sundae':
          totalSundae.current += order.quantity;
          break;
        default:
          break;
      }
    })
    net.current = total.current * 10;
  }, [orders])
  const handleSubmit = () => {
    if (username === adminUser && password === adminPassword) {
      setIsSignedIn(true)  
    } else {
      setRedirect(<Redirect to='/' />)  
    }
  }
  if (!isSignedIn) {
    return <section className='sign-in-container'>
      <h2 className='sign-in-header'>Sign In</h2>
      <form onSubmit={handleSubmit} className='sign-in'>
        <input className='username' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input className='password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className='submit-btn' type='submit'>Login</button>
      </form>
      <Link to='/' className='back-btn'>Back</Link>
      {redirect}
      
    </section>
  }

 
  return <section className='orders-container'>
    <Link to='/' className='back-btn'>Back</Link>
    <span className='table-header'><p>Name</p><p>Flavor</p><p>Quantity</p><p>Edit | Delete</p></span>
    <div className='total-container'>
      <span className='total-strawberry'><span>Total Strawberry:</span><span>{totalStrawberry.current}</span></span>
      <span className='total-oreo'><span>Total Oreo:</span><span>{totalOreo.current}</span></span>
      <span className='total-sundae'><span>Total Sundae:</span><span>{totalSundae.current}</span></span>
      <span className='total'><span>Total Jars:</span><span>{total.current}</span></span>
      <span className='net-income'><span>Potential Net Income:</span><span>${net.current}</span></span>
    </div>
    {
      orders.map((order, key) => <Order key={key} name={order.name} flavor={order.flavor} qty={order.quantity} notes={order.notes} hasPaid={order.hasPaid} id={order._id} />)
    }
    <Link to='/' className='back-btn'>Back</Link>
  </section>
}
export default Orders;