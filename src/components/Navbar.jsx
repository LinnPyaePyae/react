import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
// import { RxCrossCircled } from "react-icons/rx";

import { NavLink, useNavigate } from "react-router-dom";

import "./nav.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
  };

  return (
    <div>
      <div className="flex justify-around items-center p-3 mt-0 bg-[#f3f4f6] lg:fixed lg:top-0  lg:w-full  lg:z-10 lg:mb-10 navbar">
        <div className="flex">
          <NavLink to="/" className="active">
            <GiKnifeFork className="fork text-3xl text-orange-500 mr-2"></GiKnifeFork>
          </NavLink>

          <h5 className="text-xl logoname">Omnifood</h5>
        </div>

        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/about">
          <p>About</p>
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
        </NavLink>
        <NavLink to="/recipe">
          <p>Recipe</p>
        </NavLink>

        <form onSubmit={onSubmit} className="flex relative">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white px-5 py-2 rounded-lg border border-orange-400 input"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
