import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import { Link } from "react-router-dom";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      {/* Header Section */}
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900"></p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89HOR2HxrCZ8jqhplTixgcdmGo_tAQkESHw&usqp=CAU"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Love Feel Fresh, live an{" "}
            <span className="text-red-600">Good Health</span>
          </h2>
          <p className="py-3 text-base">
            At Feel Fresh Produce Hub, we believe in more than just providing
            fresh produce. We're committed to sustainability, environmental
            conservation, and supporting local communities. With every purchase,
            you're not just bringing home the finest fruits and vegetables;
            you're contributing to a healthier planet and a brighter future.
            Together, let’s nourish our bodies, protect our environment, and
            uplift our community.
          </p>
          <div className="mt-3">
            <Link
              to={"/signup"}
              className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Home Product Section */}
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((_, index) => {
                return (
                  <div
                    key={index + "loading"}
                    className="w-[200px] h-[250px] flex flex-col items-center justify-center border rounded-lg shadow-lg p-4"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pM2cVm5aP1LOpQmwK2y41Ohv81XUmeds5g&s"
                      alt="Loading"
                      className="w-24 h-24"
                    />
                    <p className="text-gray-400 mt-2">Fruits And Veg</p>
                  </div>
                );
              })}
        </div>
      </div>

      {/* Uncomment below for Fresh Yields Section */}
      {/* <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">Fresh Yields</h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((_, index) => (
                <div
                  key={index + "cartLoading"}
                  className="w-[200px] h-[250px] flex flex-col items-center justify-center border rounded-lg shadow-lg p-4"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Loading"
                    className="w-24 h-24"
                  />
                  <p className="text-gray-400 mt-2">Loading...</p>
                </div>
              ))}
        </div>
      </div> */}

      {/* All Product Section */}
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
