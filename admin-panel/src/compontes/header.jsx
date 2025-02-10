import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex items-center justify-between w-full container bg-amber-50 padding shadow-lg">
      <Link to="/">
        <h1 className=" text-4xl font-bold m-y">Billing Software </h1>
      </Link>

      <Link
        to="/all-produt"
        className=" w-30 h-10 bg-black text-white text-xl  rounded-lg m-y flex items-center justify-center"
      >
        All Products
      </Link>
    </div>
  );
};

export default Header;
