import CardProduct from "../components/Fragments/CardProduct";

const Products = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image={"/images/shoes.jpg"}></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru Rilis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          porro, laudantium nihil repellendus fuga maxime placeat aut eos minima
          consequuntur illum voluptates veniam enim! Temporibus fugiat odit
          expedita et libero!
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp 1.000.000"}></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image={"/images/shoes.jpg"}></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru Rilis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          porro, laudantium nihil repellendus fuga maxime placeat aut eos minima
          consequuntur illum voluptates veniam enim! Temporibus fugiat odit
          expedita et libero!
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp 1.000.000"}></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default Products;
