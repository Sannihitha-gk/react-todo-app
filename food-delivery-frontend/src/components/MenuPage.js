import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenu } from "../services/api";

function MenuPage({ addToCart }){

  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    getMenu(id).then(data => setMenu(data));
  },[id]);

  return (
    <div>
      <h2>Menu</h2>

      {menu.map(item => (
        <div key={item.id}>
          <p>{item.food_name} - ₹{item.price}</p>
          <button onClick={()=>addToCart(item)}>Add to Cart</button>
        </div>
      ))}

    </div>
  );
}

export default MenuPage;