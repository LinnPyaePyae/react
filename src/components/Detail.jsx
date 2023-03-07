import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { MdPublic } from "react-icons/md";
import Footer from "./Footer";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [instruction, setInstruction] = useState(true);
  const [ingredient, setIngredient] = useState([]);

  const changeInstru = () => {
    setInstruction(!instruction);
  };

  //   const changeIngre = () => {
  //     setIngre(!ingre);
  //   };

  useEffect(() => {
    const ingredients = [
      { id: 1, name: detail.strIngredient1 },
      { id: 2, name: detail.strIngredient2 },
      { id: 3, name: detail.strIngredient3 },
      { id: 4, name: detail.strIngredient4 },
    ];
    setIngredient(ingredients);
  }, [detail]);
  //   console.log(detail);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setDetail(meals[0]);
    console.log(meals[0]);
  };

  return (
    <div className="lg:flex sm:block mt-24 justify-around ">
      <img
        src={detail.strMealThumb}
        alt=""
        className="detailimg w-[400px] h-[400px]  mb-10 rounded-lg mt-20"
      />

      <div className="detailmeal w-[50%] mt-10">
        <h2 className="text-3xl text-gray-700 font-semibold mb-5  tracking-wide ">
          {detail.strMeal}
        </h2>
        <h2 className="text-2xl text-gray-600 font-semibold flex tracking-wide mb-3">
          <MdPublic className="text-xl mt-2 text-gray-400 mr-1 mb-5"></MdPublic>
          {detail.strArea}
        </h2>

        <button
          className="bg-[orangered] px-3 py-2 rounded-lg mb-5"
          onClick={changeInstru}
        >
          see instructions
        </button>

        <p className="text-gray-500 tracking-wide leading-8 instruction">
          {instruction ? "" : detail.strInstructions}
        </p>

        <p className="mt-3 mb-4 text-xl">Ingredients</p>

        {ingredient?.map((item) => {
          return (
            <ul key={item.id} className="m-3 list-square">
              <li>{item.name}</li>
            </ul>
          );
        })}

        <a href={detail.strYoutube} className="flex">
          <p className="mt-1 ml-3">Youtube : </p>
          <BsYoutube className="text-4xl text-red-600 ml-2"></BsYoutube>
        </a>
      </div>
    </div>
  );
};

export default Detail;
