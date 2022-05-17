
import { Route, Switch } from 'react-router-dom';

import Header from '../components/header/Header';
import Items  from '../components/items/Items';
import OrderForm from '../components/items/OrderForm';
import Orders from '../components/orders/Orders';
import Success from '../components/success/Success';
import './App.css';

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
      <Route path='/orders' component={Orders} />
      <Route path='/success' component={Success} />
    </Switch>
  </>
}

export default App;