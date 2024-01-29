import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: "1",
    name: "Sepatu Nike",
    price: 1000000,
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro, laudantium nihil `,
  },
  {
    id: "2",
    name: "Sepatu Adidas",
    price: 2300000,
    image: "/images/shoes.jpg",
    description: `Consectetur adipisicing elit. Provident porro, laudantium nihil `,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: "1",
      qty: 0,
    },
  ]);

  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id,
        qty: 1,
      },
    ]);
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 flex">
          <h1 className="text-3xl font-bold">Cart</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul>
          <table>
            <tbody>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tbody>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty & product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
