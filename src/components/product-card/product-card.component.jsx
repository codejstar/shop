/* eslint-disable */
import React from 'react'
import './product-card.styles.scss';
import { useContext } from 'react';
import Button,{ BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CardContext } from '../context/card-context.component';


const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCard} = useContext(CardContext);
    
    const addProductToCard = () => addItemToCard(product);
    return(

        <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
           <span className='name'>{name}</span>
           <span className='price'>{price}</span>
        </div>
        <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={addProductToCard}>Add to card</Button>
    </div>
    );
};

export default ProductCard;

// const ProductCard = ({ product }) => {
//     const { name, price, imageUrl } = product;
//     const { addItemToCard } = useContext(CardContext);
  
//     const addProductToCard = () => addItemToCard(product);
  
//     return (
//       <div className='product-card-container'>
//         <img src={imageUrl} alt={`${name}`} />
//         <div className='footer'>
//           <span className='name'>{name}</span>
//           <span className='price'>{price}</span>
//         </div>
//         <Button buttonType='inverted' onClick={addProductToCard}>
//           Add to card
//         </Button>
//       </div>
//     );
//   };
  
//   export default ProductCard;
