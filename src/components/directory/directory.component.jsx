import CategoryItems from '../category-item/category-item.component.jsx';
import './directory.style.scss';

const Directory = ({categories}) =>{
    return (
        <div className="directory-container">
        {categories.map((category)=>(
           <CategoryItems key={category.id} category={category}/>
        ))} 
       </div>
    );
}
export default Directory;