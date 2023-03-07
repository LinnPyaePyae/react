import React from "react";
import { TbHealthRecognition } from "react-icons/tb";
import { GiEnergySword } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";

const About = () => {
  return (
    <div className="flex ml-10 mr-10 mt-20 mb-20 gap-20">
      <div className="mt-10">
        <p className="text-3xl mb-10 mr-5 mt-2 ml-5 ">
          We Serve Best Quality Food
        </p>

        <div className="flex shadow-xl pb-5 pt-3">
          <div className="">
            <TbHealthRecognition className="text-4xl mr-5 mt-3 ml-3 text-[orangered]"></TbHealthRecognition>
          </div>
          <div className="">
            <p className="text-xl mb-2">Healthy Food</p>
            <p>
              We are available for Togo online orders and Delivery by our
              partner third-parties company. We have created Thai fusion food
              from our high-quality imported from US.
            </p>
          </div>
        </div>

        <div className="flex shadow-xl mt-5 pb-5 pt-3">
          <GiEnergySword className="text-4xl mr-5 mt-3 ml-3 text-[orangered]"></GiEnergySword>
          <div>
            <p className="text-xl mb-2">Fast Service</p>
            <p className="">
              For us,it's not just about bringing you good food from us.Also
              want to serve you the best and healthy meals.
            </p>
          </div>
        </div>

        <div className="flex shadow-xl mt-5 pb-5 pt-3">
          <GiHotMeal className="text-4xl mr-5 mt-3 ml-3 text-[orangered]"></GiHotMeal>
          <div>
            <p className="text-xl mb-2">Super Taste</p>
            <p>
              Try our delicious meals.I am sure that you will really like them.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="aboutimg">
        <img
          src="https://i.pinimg.com/564x/12/ac/60/12ac606896dfc98f4806b7acababed67.jpg"
          className="rounded-xl mt-20"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
