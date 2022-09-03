import React from "react";
import { useDispatch } from "react-redux";
import { selectedKeyword } from "../redux/filters/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleSelectedKeyword = (keyword) => {
    dispatch(selectedKeyword(keyword));
  };

  // Handle Debounce
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...e) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...e);
      }, delay);
    };
  };

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        onChange={debounce((e) => {
          handleSelectedKeyword(e.target.value);
        }, 400)}
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <img
        className="inline h-6 cursor-pointer"
        src="./assets/search.svg"
        alt="Search"
      />
    </div>
  );
};

export default Header;
