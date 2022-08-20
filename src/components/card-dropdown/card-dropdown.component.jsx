import './card-dropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; //hook

import { CardContext } from '../context/card-context.component';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.component';


const CardDropdown = () => {
  const { cardItems } = useContext(CardContext);
  const navigate = useNavigate();

  const goToCheckOutHandler =() => {
    navigate('/checkout')
  }

  return (
    <div className='card-dropdown-container'>
      <div className='card-items'>
        {/* {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )} */}
        {cardItems.map(item => <CardItem key={item.id} cardItem={item}/>)}
      </div>
      <Button onClick={goToCheckOutHandler}>Check Out</Button>
    </div>
  );
};

export default CardDropdown;






// import './card-dropdown.styles.scss';
// import { useContext } from 'react';
// import { CardContext } from '../context/card-context.component';
// import Button from '../button/button.component';
// import CardItem from '../card-item/card-item.component';

// const CardDropdown = () => {
//   const {cardItems} = useContext(CardContext)
//       return(
//         <div className='card-dropdown-container'>
//           <div className='card-items'>
//           {/* {cardItems.length ? (
//           cardItems.map((cardItem) => (
//             <CardItem key={cardItem.id} cartItem={cardItem} />
//           ))
//         ) : (
//           <span className='empty-message'>Your cart is empty</span>
//         )} */}
//           {cardItems.map(item => <CardItem key={item.id} cartItem={item}/>)}
//           </div>
//            <Button>Check out</Button>
//         </div>
//       );
// };

// export default CardDropdown;