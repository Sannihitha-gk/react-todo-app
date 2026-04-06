import { Link } from "react-router-dom";

function Navbar(){
  return (
    <div>
      <h2>Food App</h2>
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;