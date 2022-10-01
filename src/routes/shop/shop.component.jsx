// import SHOP_DATA from '../../shop-data.json';
// import {useContext } from "react";
// import { CategoriesContext } from "../../components/contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
// import CategoryPreview from "../../components/categories-preview/category-preview.component";
import {Routes , Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category';
import './shop.styles.scss';

import React from 'react'

const shop = () => {
  return (
     <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
     </Routes>
  );
};

export default shop;








// const Shop = () => {
// //  const {categoriesMap} = useContext(CategoriesContext);
//   return(
//     <div className="shop-container">
//      {
//         Object.keys(categoriesMap).map((title) =>{
//           const products = categoriesMap[title];
//            return (
//             <CategoryPreview key={title} title={title} products={products}/>
//            );
//       })}
//       </div>
//  );
// };
// export default Shop;

   //  {/* <Fragment key={title}>
   //      <h2>{title}</h2>
   //      <div className="product-container">
   //      {categoriesMap[title].map((product) =>(
   //       <ProductCard key={product.id} product={product}/>
   //      ))}
   //   </div>
   //   </Fragment> */}