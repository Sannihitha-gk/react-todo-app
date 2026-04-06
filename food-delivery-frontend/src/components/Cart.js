import { createOrder } from "../services/api";

function Cart({ cart }){

  const total = cart.reduce((sum, item)=> sum + item.price, 0);

  function placeOrder(){
    createOrder({
      user: "test",
      total_price: total
    });
    alert("Order placed!");
  }

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item, index)=>(
        <p key={index}>{item.food_name}</p>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Cart;