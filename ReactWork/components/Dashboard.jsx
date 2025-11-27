import React, { useEffect, useState } from "react";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(0);
  const [price, setPrice] = useState(0);
  function increaseCart(num) {
    setCart((cart) => cart + 1);
    setPrice((price) => price + num);
  }
  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch("https://fakestoreapi.com/products/");
      const JSONData = await serverResponse.json();
      setData(JSONData);
    }
    fetchData();
  }, []);
  console.log(cart, price);
  return data.length === 0 ? null : (
    <>
      {data.map((element) => (
        <div className="book">
          <img src={element.image} alt="" />
          <p>Title: {element.title}</p>
          <p>Category {element.category}</p>
          <button onClick={() => increaseCart(element.price)}>
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
}
