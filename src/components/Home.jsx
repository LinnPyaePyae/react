import React from "react";
import { useState, useEffect } from "react";
import { GiMeal } from "react-icons/gi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const [items, setItems] = useState([]);
  const [ingre, setIngre] = useState();
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const ingredients = [
        { id: 1, name: items.strIngredient1 },
        { id: 2, name: items.strIngredient2 },
        { id: 3, name: items.strIngredient3 },
        { id: 4, name: items.strIngredient4 },
        { id: 5, name: items.strIngredient5 },
        { id: 6, name: items.strIngredient6 },
      ];
      setIngre(ingredients);
    }, 100);
    return () => clearInterval(interval);
  }, [items]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const { meals } = await api.json();
    setItems(meals[0]);
    // console.log(meals[0]);
  };
  return (
    <div>
      <div className=" ml-16 mt-24 mr-20 mb-20 gap-10 flex">
        <div className="mt-10">
          <h1 className="text-5xl text-[orangered] mb-3 ">Order your</h1>
          <h1 className="text-4xl text-black">favourite foods</h1>

          <p className="mt-6 text-lg ">
            One of the very nicest things about life is the way we must
            regualrly stop whatever it is we are doing and devote our attention
            to
            <span className="text-[orangered] inline"> eating.</span>
          </p>
          <button className="bg-[orangered] text-white px-5 py-3 mt-10 rounded-full">
            Start Order Now
          </button>
        </div>

        <div className="mr-10 heroimage">
          <img
            src="https://img.freepik.com/premium-photo/female-chef-with-tray-food-hand-isolated-white_70216-4205.jpg?w=360"
            className="w-[500px] h-[400px]"
            alt=""
          />
        </div>
      </div>

      <div className="m-20 mt-10 ">
        <p className="text-2xl text-center mt-10 mb-10">Popular Random Meals</p>
        <div className="lg:flex sm:block  gap-16">
          <img
            src={items.strMealThumb}
            className="w-[350px] h-[350px] rounded-xl mr-12 mt-12 "
          />

          <div className="mt-16">
            <p className="text-2xl font-semibold">Meal's name</p>
            <div className="flex mt-3 mb-3">
              <GiMeal className="text-2xl text-gray-800 mr-1 mt-1"></GiMeal>
              <p className="text-xl text-[orangered] ">{items.strMeal}</p>
            </div>
            <p className="text-xl mt-6 mb-5">
              Here is the ingredients of the meal
            </p>
            {ingre?.map((recipe) => {
              return (
                <div key={recipe.id} className="">
                  <ul>
                    <li className="list-disc ml-10">{recipe.name}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link to="/recipe">
            <button className="px-3 py-2 bg-[orangered] text-white rounded-lg mt-20">
              See All Recipes
              <HiChevronDoubleRight className="text-white inline ml-1"></HiChevronDoubleRight>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
