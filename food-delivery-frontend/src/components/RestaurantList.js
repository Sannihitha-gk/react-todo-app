import { useEffect, useState } from "react";
import { getRestaurants } from "../services/api";
import { Link } from "react-router-dom";

function RestaurantList(){

  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    getRestaurants().then(data => setRestaurants(data));
  },[]);

  return (
    <div>
      {restaurants.map(r => (
        <div key={r.id}>
          <Link to={`/menu/${r.id}`}>
            <p>{r.name} - {r.location}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;