import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 && cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            title={cartItem.name}
            price={cartItem.price}
            quantity={cartItem.quantity}
            total={cartItem.totalPrice}
            id={cartItem.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
