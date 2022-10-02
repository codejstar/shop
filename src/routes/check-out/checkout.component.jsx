import React from 'react'
import './checkout.styles.scss';
import { useContext } from 'react';
import { CardContext } from '../../components/context/card-context.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const {cardItems,cardTotal} = useContext(CardContext);
    return (
        <div className='checkout-container'>
        <div className='checkout-header'>
              <div className='header-block'>
                 <span>product</span>
              </div>

              <div className='header-block'>
              <span>Discription</span>
              </div>

              <div className='header-block'>
              <span>Quantity</span>
              </div>

              <div className='header-block'>
              <span>Price</span>
              </div>

              <div className='header-block'>
              <span>Remove</span>
              </div>
          </div>
            {/* <h1>I am the checkout page.</h1> */}
            {/* <div> */}
                {
                    cardItems.map((cardItem) =>(
                          <CheckoutItem key={cardItem.id} cardItem={cardItem}/>
                        ))
                        }
                <span className='total'>Total: ${cardTotal}</span>
            {/* </div> */}
        </div>
    );
}
export default Checkout;