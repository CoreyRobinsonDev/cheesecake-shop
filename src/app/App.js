
import { Route, Switch } from 'react-router-dom';

import Header from '../components/header/Header';
import Items  from '../components/items/Items';
import Footer from '../components/footer/Footer';
import OrdersSignIn from '../components/orders/OrdersSignIn';
import './App.css';
import OrderForm from '../components/items/OrderForm';

const App = () => {
  return <>
    <Header />
    <Switch>
      <Route exact path="/" component={Items} />
      <Route path='/strawberry' >
        <OrderForm product='strawberry' />
      </Route>
      <Route path='/oreo' >
        <OrderForm product='oreo' />
      </Route>
      <Route path='/sundae' >
        <OrderForm product='sundae' />
      </Route>
      <Route path='/sign-in' component={OrdersSignIn} />
    </Switch>
   <Footer />
  </>
}

export default App;