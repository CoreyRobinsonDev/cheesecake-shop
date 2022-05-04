import {Link, Redirect} from 'react-router-dom';
import {useState} from 'react';
import './orders.css'

const OrdersSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');
  const adminUser = process.env.REACT_APP_USERNAME;
  const adminPassword = process.env.REACT_APP_PASSWORD;
  
  const handleSubmit = () => {
    if (username === adminUser && password === adminPassword) {
      setRedirect(<Redirect to='/orders' />)  
    } else {
      setRedirect(<Redirect to='/' />)  
    }
  }
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
export default OrdersSignIn;