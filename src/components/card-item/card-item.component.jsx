import './card-item.scss';


const CardItem = ({ cardItem }) => {
  const { imageUrl, price, name, quantity } = cardItem;

  return (
    <div className='card-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
      {/* <img src={imageUrl} alt={`${name}`} /> */}
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CardItem;

// const CardItem = ({cardItem}) => {
//     const {name , imgUrl , price, quantity} = cardItem;
//       return (
//         <div className='card-item-container'>
//            <img src={imgUrl} alt={`${name}`} />
//            <div className='item-details'>
//            <span className='name'>{name}</span>
//             <span className='price'>{quantity} x ${price}</span>
//            </div>
//             {/* <h2>{name}</h2> */}
//         </div>
//       )
// }

// export default CardItem;