import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, calculatePrice } from "../redux/cartSlice";
import { fetchProducts } from "../redux/productSlice";
// import { STATUSES } from "../redux/productSlice";
import Spinner from "./Spinner";
import Error from "./Error";
import  {toast } from "react-hot-toast";

function Product() {
  const { data: products, loading, error } = useSelector((state) => state.product);
  
  // const { data: products, status } = useSelector((state) => state.product);


  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();

    //   setProducts(data);
    // };

    // fetchProducts();
  }, []);

  const handleAdd = (options) => {
    dispatch(addCart(options));
    dispatch(calculatePrice());
    toast("Added To Cart");
  };

  // if (status === STATUSES.LOADING) {
  //   return <Spinner />
  // }

  // if (status === STATUSES.ERROR) {
  //   return <Error />
  // }

  if (loading === true) {
    return <Spinner />
  }

  if (error === true) {
    return <Error />
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          id={product.id}
          handler={handleAdd}
        />
      ))}
    </div>
  );
}

const ProductCard = ({ title, id, price, handler, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h5>${price}</h5>
      <button
        onClick={() => handler({ title, image, price, id, quantity: 1 })}
        className="btn"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
