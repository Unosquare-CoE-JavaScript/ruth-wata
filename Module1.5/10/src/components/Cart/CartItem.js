import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch()

  const increaseItemHandler = () =>{
    dispatch(cartActions.addItem())
  }

  const decreaseItemHandler= () => {
    dispatch(cartActions.removeItem())
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick= {decreaseItemHandler}>-</button>
          <button onClick= {increaseItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
