import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
      {children}
    </div>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-3xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">Add To Cart</Button>
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
