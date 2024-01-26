import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: "1",
    name: "Sepatu Nike",
    price: "Rp 1.000.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro, laudantium nihil `,
  },
  {
    id: "2",
    name: "Sepatu Adidas",
    price: "Rp 2.300.000",
    image: "/images/shoes.jpg",
    description: `Consectetur adipisicing elit. Provident porro, laudantium nihil `,
  },
];

const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const ProductsPage = () => {
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
