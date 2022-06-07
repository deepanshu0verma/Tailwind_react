import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2 ">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 ">
        <div>
          <h6 className="font-bold uppercase pt-2 ">Solutions</h6>
          <ul>
            <li className="py-1">Networking</li>
            <li className="py-1">IT Security</li>
            <li className="py-1">HTML/CSS</li>
            <li className="py-1">React Js</li>
            <li className="py-1">Node Js</li>
            <li className="py-1">Mongo DB</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 ">Solutions</h6>
          <ul>
            <li className="py-1">Networking</li>
            <li className="py-1">IT Security</li>
            <li className="py-1">HTML/CSS</li>
            <li className="py-1">React Js</li>
            <li className="py-1">Node Js</li>
            <li className="py-1">Mongo DB</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 ">Solutions</h6>
          <ul>
            <li className="py-1">Networking</li>
            <li className="py-1">IT Security</li>
            <li className="py-1">HTML/CSS</li>
            <li className="py-1">React Js</li>
            <li className="py-1">Node Js</li>
            <li className="py-1">Mongo DB</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 ">Solutions</h6>
          <ul>
            <li className="py-1">Networking</li>
            <li className="py-1">IT Security</li>
            <li className="py-1">HTML/CSS</li>
            <li className="py-1">React Js</li>
            <li className="py-1">Node Js</li>
            <li className="py-1">Mongo DB</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our Newsletter</p>
          <p className="py-4">
            The latest updates, article and resources sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row ">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 "
              type="email"
              placeholder="Email"
            />
            <button className=" p-2 mb-4 ">Subscribe</button>
          </form>
        </div>
      </div>
      <div className=" flex flex-col max-w-[1240px] px-5 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500  ">
        <p className="py-4">2022 Workflow, LLc All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl ">
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaTwitch />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
