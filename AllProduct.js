import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  // Filtered data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => [...filter]);
  };

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      {/* Category List */}
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList.length > 0 ? (
          categoryList.map((el) => (
            <FilterProduct
              category={el}
              key={el}
              isActive={el.toLowerCase() === filterby.toLowerCase()}
              onClick={() => handleFilterProduct(el)}
            />
          ))
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?cs=srgb&dl=pexels-alxs-3025236.jpg&fm=jpg"
              alt="Loading"
              className="w-12 h-12"
            />
          </div>
        )}
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter.length > 0
          ? dataFilter.map((el) => (
              <CardFeature
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}
              />
            ))
          : loadingArrayFeature.map((_, index) => (
              <div
                key={index}
                className="w-[200px] h-[250px] flex flex-col items-center justify-center border rounded-lg shadow-lg p-4"
              >
                <img
                  src="https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ="
                  alt="Loading"
                  className="w-24 h-24"
                />
                <p className="text-gray-400 mt-2">Loading...</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
