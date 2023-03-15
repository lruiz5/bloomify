import { useState } from "react";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";

const products = [
  {
    id: "enQ7lRYW-uU",
    scientificName: "Pothos",
    commonName: "Snow Queen",
    size: "6in. Pot",
    price: 15,
    rarity: "common",
  },
  {
    id: "N7oHWhK9UDM",
    scientificName: "Senecio rowleyanus",
    commonName: "String of Pearls",
    size: "4in. Pot",
    price: 12,
    rarity: "common",
  },
  {
    id: "OSBEqWnoDYo",
    scientificName: "Scindapsus pictus",
    commonName: "Satin Pothos",
    size: "4in. Pot",
    price: 15,
    rarity: "common",
  },
  {
    id: "MBsReSZ2WNM",
    scientificName: "Dracaena trifasciata",
    commonName: "Snake Plant",
    size: "4in. Pot",
    price: 30,
    rarity: "common",
  },
  {
    id: "bwsTJMnhcwE",
    scientificName: "Monstera deliciosa",
    commonName: "Swiss Cheese Plant",
    size: "8in. Pot",
    price: 80,
    rarity: "uncommon",
  },
  {
    id: "TNTZ9XRisjQ",
    scientificName: "Ficus lyrata",
    commonName: "Fiddle Leaf Fig",
    size: "6in. Pot",
    price: 60,
    rarity: "uncommon",
  },
];

export const ProductsPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All Products (15)
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              onClick={() => setShowFilter(!showFilter)}
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {showFilter && <FilterBar setVisible={() => setShowFilter()} />}
    </main>
  );
};
