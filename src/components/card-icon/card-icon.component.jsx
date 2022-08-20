import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext} from 'react';
import { CardContext } from '../context/card-context.component';
import  './card-icon.styles.scss'

const CardIcon = () => {
    const {isCardOpen,setIsCardOpen,cardItemCount} = useContext(CardContext);
    const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen)
      
    return(
        <div className='card-icon-container' onClick={toggleIsCardOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className='item-count'>{cardItemCount}</span>
        </div>
       );
};
export default CardIcon;