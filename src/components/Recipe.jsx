import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recipe.css";
import Footer from "./Footer";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const { meals } = await api.json();
    setRecipe(meals);
    // console.log(meals);
  };

  return (
    <div>
      <p className="text-2xl text-center mt-28">Hot Selling Recipes</p>
      <div className="flex flex-wrap justify-center mt-10 gap-10">
        {recipe.map((recipe) => {
          return (
            <div className="" key={recipe.idMeal}>
              <div className="relative parent overflow-hidden cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300">
                <div className="">
                  <img
                    src={recipe.strMealThumb}
                    className="w-[200px] h-[200px] rounded-lg"
                  />
                  <p className="text-xs text-center mt-5">{recipe.strMeal}</p>
                </div>

                <div className="child transition hover:ease-in-out duration-300">
                  <Link to={`/detail/${recipe.idMeal}`}>
                    <button className="absolute top-[40%] right-[30%] px-2 py-2 bg-[orangered] text-white rounded-lg transition ease-in-out duration-300 ">
                      View Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Recipe;
