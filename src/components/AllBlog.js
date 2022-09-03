import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removedFilters } from "../redux/filters/actions";
import Filters from "./Filters";
import SingleBlog from "./SingleBlog";

const AllBlog = () => {
  const { blogs, keyword, category, author } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filterByKeyword = (blog) => {
    if (keyword.length === 0) {
      return true;
    } else {
      return blog.title.toLowerCase().includes(keyword.toLowerCase());
    }
  };
  const filterByCategory = (blog) => {
    if (category.length > 0) {
      return blog.category === category;
    } else {
      return true;
    }
  };
  const filterByAuthor = (blog) => {
    if (author.length > 0) {
      return blog.author.name === author;
    } else {
      return true;
    }
  };

  const handleRemovedFilters = (filter) => {
    dispatch(removedFilters(filter));
  };

  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            ALL BLOGS ARE HERE
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <Filters
          category={category}
          author={author}
          handleRemovedFilters={handleRemovedFilters}
        />

        {/* <!-- card grid  --> */}
        <div className="mt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* <!-- single card  --> */}
          {blogs
            .filter(filterByKeyword)
            .filter(filterByCategory)
            .filter(filterByAuthor)
            .map((blog) => (
              <SingleBlog key={blog.id} blog={blog} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlog;
