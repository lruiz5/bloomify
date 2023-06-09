import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Rating } from "./Rating";
export const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const {
    id,
    commonName,
    scientificName,
    overview,
    rating,
    price,
    best_seller,
  } = product;
  const img_url = `https://source.unsplash.com/${id}/600x300`;

  useEffect(() => {
    const productInCart = cartList.find((current) => current.id === id);

    productInCart ? setIsInCart(true) : setIsInCart(false);
  }, [cartList, id]);
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}
        <img
          className="rounded-t-lg object-cover object-top max-h-64 w-full"
          src={img_url}
          alt="Featured Plant"
        />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {commonName}
          </h5>
        </Link>
        <p className="mb-3 italic font-light text-gray-700 dark:text-gray-400">
          ({scientificName})
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>

          {isInCart ? (
            <button
              disabled={!product.in_stock}
              onClick={() => removeFromCart(product)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          ) : (
            <button
              disabled={!product.in_stock}
              onClick={() => addToCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
