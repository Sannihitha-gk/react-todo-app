const BASE_URL = "http://127.0.0.1:8000";

export const getRestaurants = async () => {
  const res = await fetch(`${BASE_URL}/restaurants`);
  return res.json();
};

export const getMenu = async (id) => {
  const res = await fetch(`${BASE_URL}/menu/${id}`);
  return res.json();
};

export const createOrder = async (orderData) => {
  return fetch(`${BASE_URL}/create-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
};