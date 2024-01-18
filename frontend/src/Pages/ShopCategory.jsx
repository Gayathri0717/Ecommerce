// import React, { useContext } from 'react'
// import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assests/dropdown_icon.png'
// // import Item from '../Components/Item/Item'
// import Item from '../Components/Item/Item';

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);
//   console.log("all_product:", all_product);

//   console.log("props.category:", props.category);
//   console.log("item.category:", item.category);



//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="" />
//       <div className='shopcategory-indexsort'>
//         <p><span>Showing 1-12</span>out of 36 products</p>
//         <div className="shopcategory-sort">Sort by
//           <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className='shopcategory-products'>
//         {all_product.map((item, i) => {
//           if (props.category===item.category) {
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//           }
//         else{
//           return null;
//         }
//         })}


//       </div>
//     </div>

//   )
// }

// export default ShopCategory
import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assests/dropdown_icon.png';
import Item from '../Components/Item/Item';
import all_product
 from '../Components/Assests/all_product';
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("all_product:", all_product);
  console.log("props.category:", props.category);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className='shopcategory-indexsort'>
        <p><span>Showing 1-12</span>out of 36 products</p>
        <div className="shopcategory-sort">Sort by
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((product, i) => {
          // Log information for each product
          console.log("product.category:", product.category);

          if (props.category===product.category) {
            return <Item key={i} />;
          } else {
            return <p>No match found for category: {props.category}</p>;
          }
          
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
