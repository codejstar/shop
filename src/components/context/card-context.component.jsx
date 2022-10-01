import { createContext, useState, useEffect } from 'react';

export const addCardItem = (cardItems, productToAdd) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );

  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (cardItems, cardItemToRemove) => {
  //fIND THE card item to remove
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id ===  cardItemToRemove.id
  );

  //check if quentity equal to 1, if it remove that item form the card
 if(existingCardItem.quantity === 1) {
    return cardItems.filter(cardItem => cardItem.id !== cardItemToRemove.id);
 }

  // return back cartitems with matching cart item with reduced quantity
  return cardItems.map((cardItem) =>
      cardItem.id ===  cardItemToRemove.id
        ? { ...cardItem, quantity: cardItem.quantity - 1 }
        : cardItem
    );
}

const clearCardItem = (cardItems, cardItemToClear) => {
  return cardItems.filter(cardItem => cardItem.id !== cardItemToClear.id);
}

export const CardContext = createContext({
  isCardOpen: false,
  setIsOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard:() => {},
  clearItemFromCard:() => {},
  cardItemCount: 0,
  cardTotal: 0,
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardItemCount, setCardItemCount] = useState(0);
  const [cardTotal, setCardTotal] = useState(0);

  useEffect(() => {
    const count = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    )
    setCardItemCount(count);
  }, [cardItems]);

  useEffect(() => {
    const newCardTotal = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    )
    setCardTotal(newCardTotal);
  }, [cardItems]);

  const addItemToCard = (product) => {
    setCardItems(addCardItem(cardItems, product));
  };
  
    const removeItemToCard = (cardItemToRemove) =>{
    setCardItems(removeCardItem(cardItems, cardItemToRemove));
    };

    const clearItemFromCard = (cardItemToClear) => {
    setCardItems(clearCardItem(cardItems, cardItemToClear));
    };

  const value = { 
    isCardOpen, 
    setIsCardOpen, 
    cardItems, 
    addItemToCard,
    cardItemCount,
    removeItemToCard,
    clearItemFromCard,
    cardTotal
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};


// import { createContext, useState } from "react";

// const addCardItem = (cardItems,productToAdd) => {
//     const existingCardItem = cardItems.find(
//         (cardItem) => cardItem.id === productToAdd.id);
       
//     if(existingCardItem)
//     {
//       return cardItems.map((cardItem) => cardItem.id === productToAdd.id ?
//       {...cardItem, quatity: cardItem.quatity + 1}
//       : cardItem
//       );
//     }
   
//         return [...cardItems,{...productToAdd,quatity: 1}]
// }

// export const CardContext = createContext({
//     isCartOpen : false,
//     setIsCartOpen: () => {},
//      cardItems: [],
//      addItemToCard: () => {}
// }
// );


// export const CardProvider = ({children}) => {
    
//     const [isCartOpen,setIsCartOpen] = useState(false); 
//     const [cardItems,setCardItems] = useState([]);

//     const addItemToCard = (productToAdd) => {
//         setCardItems(addCardItem(cardItems,productToAdd));
//     }

//     const addItemToCart = (product) =>
//     setCartItems(addCartItem(cartItems, product));

//     const value = {isCartOpen,setIsCartOpen,addItemToCard,cardItems}
//     return <CardContext.Provider value={value}>{children}</CardContext.Provider>   
    
// };

