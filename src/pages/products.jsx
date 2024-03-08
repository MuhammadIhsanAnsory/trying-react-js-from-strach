import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect } from "react";
import { useRef } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-2/3 flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  image={product.image}
                  id={product.id}
                ></CardProduct.Header>
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl font-bold">Cart</h1>
          <TableCart products={products}></TableCart>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
