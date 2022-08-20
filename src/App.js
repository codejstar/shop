// import CategoryItems from './components/category-item/category-item.component.jsx';
// import Directory  from './components/directory/directory.component.jsx';
import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component.jsx'; 
import Nav from './routes/Nav/Navigation.component';
import Authentication from './routes/authentication/authentication.jsx'
import Shop from './routes/shop/shop.component.jsx';
import Checkout from './routes/check-out/checkout.component.jsx';
import './index.scss';
const App = () => {

//   const categories =  [
//       {
//         "id": 1,
//         "title": "hats",
//         "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
//       },
//       {
//         "id": 2,
//         "title": "jackets",
//         "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
//       },
//       {
//         "id": 3,
//         "title": "sneakers",
//         "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
//       },
//       {
//         "id": 4,
//         "title": "womens",
//         "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
//       },
//       {
//         "id": 5,
//         "title": "mens",
//         "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
//       }
//     ];

  // const Navigation = () =>{
  //    return (
  //     <div>
  //       <div>
  //         <h1>This is a Navigation bar</h1>
  //       </div>
  //       <Outlet/>
  //     </div>
  //    );
  // }

  // const  Shop =() =>{
  //   return (
  //    <div>
  //   <h1>this is shoping page</h1>
  //     </div>
  //   );
  // };

  return (
    <> 
     {/* <div className="categories-container">
     {categories.map((category)=>(
        <CategoryItems key={category.id} category={category}/>
     ))} 
    </div> */}

    {/* <Directory categories={categories}/> */}
    
      <Routes>
      <Route path='/' element={<Nav/>}>
      <Route index element={<Home />}/> 
      <Route path='shop' element={<Shop/>} /> 
      <Route path='auth' element={<Authentication/>} /> 
      <Route path='checkout' element={<Checkout/>}/>
       </Route>
      </Routes>

    </> 
  );
}

export default App;
