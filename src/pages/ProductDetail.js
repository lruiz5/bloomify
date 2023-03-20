import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components/Elements/Rating";
import { getProduct } from "../utils";

export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useTitle(product.scientificName);
  const img_url = `https://source.unsplash.com/${id}/600x600`;
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProduct(id);
      //set product
      setProduct(data);
    }

    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find((current) => current.id === id);

    productInCart ? setIsInCart(true) : setIsInCart(false);
  }, [cartList, id]);
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.commonName}&nbsp;
          <span className="mb-5 italic text-2xl font-thin text-center text-gray-900 dark:text-slate-200">
            ({product.scientificName})
          </span>
        </h1>
        {/* <p className="mb-5 italic text-lg text-center text-gray-900 dark:text-slate-200">
          ({product.scientificName})
        </p> */}
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img
              className="rounded object-fill object-top"
              src={img_url}
              alt={product.commonName}
            />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {product.in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product.size}
              </span>
            </p>
            <p className="my-3">
              {!isInCart ? (
                <button
                  disabled={!product.in_stock}
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                  disabled={!product.in_stock}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
