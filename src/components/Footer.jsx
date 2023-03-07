import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className=" mt-16">
        <div className="flex justify-center bg-orange-300 pb-2">
          <RiFacebookCircleLine className="text-black text-lg mr-5 mt-3"></RiFacebookCircleLine>
          <AiOutlineInstagram className="text-black text-lg mr-5 mt-3"></AiOutlineInstagram>
          <TiSocialTwitterCircular className="text-black  mt-3 text-xl"></TiSocialTwitterCircular>
        </div>
        <p className="text-center text-sm  pb-3 bg-orange-300">
          @ Copyright All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
