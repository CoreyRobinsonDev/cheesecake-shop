import { useTransition, animated } from 'react-spring';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../components/header/Header';
import Items  from '../components/items/Items';
import OrderForm from '../components/items/OrderForm';
import Orders from '../components/orders/Orders';
import Success from '../components/success/Success';
import './App.css';

const App = () => {
  const location = useLocation();
  const transtitions = useTransition(location, {
    from: {transform: 'translate3d(100%,0,0)', opacity: 0 },
    enter: {transform: 'translate3d(0%,0,0)', opacity: 1 },
    leave: {transform: 'translate3d(-50%,0,0)', opacity: 0}
  }) 

  return transtitions((props, item) => (
    <animated.div style={props}>
      <Header />
      <Switch location={item}>
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
    </animated.div>
  ))
}

export default App;