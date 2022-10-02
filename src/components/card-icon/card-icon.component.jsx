import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext} from 'react';
import { CardContext } from '../context/card-context.component';
import  {CartIconContainer, ItemCount} from'./card-icon.styles';

const CardIcon = () => {
    const {isCardOpen,setIsCardOpen,cardItemCount} = useContext(CardContext);
    const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen)
      
    return(
        <CartIconContainer onClick={toggleIsCardOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount as='span'>{cardItemCount}</ItemCount>
        </CartIconContainer>
       );
};
export default CardIcon;