import React from "react";

const Filters = ({ author, category, handleRemovedFilters }) => {
  return (
    <div>
      {author && (
        <div className="flex items-center my-4">
          <span>Filter by author:</span>
          <ul className="flex items-center flex-wrap">
            <li className="relative bg-stone-200 rounded-2xl px-2 py-1 ml-2">
              {author}
              <button
                className="absolute -top-2 -right-3"
                onClick={() => handleRemovedFilters("Author")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white bg-gray-400 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      )}
      {category && (
        <div className="flex items-center mt-4">
          <span>Filter by category:</span>
          <ul className="flex items-center flex-wrap">
            <li className="relative bg-stone-200 rounded-2xl px-2 py-1 ml-2">
              {category}
              <button
                className="absolute -top-2 -right-3"
                onClick={() => handleRemovedFilters("Category")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white bg-gray-400 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filters;
