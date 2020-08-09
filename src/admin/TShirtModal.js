import React from "react";

const TShirtModal = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <form className="w-full flex flex-col items-center">
          <h1 className="text-3xl text-black text-center block font-sansita mb-8">
            Add T-Shirt
          </h1>
          <div className="md:flex md:items-center mb-6 md:w-full">
            <div className="md:w-2/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                T-Shirt Name
              </label>
            </div>
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="inline-full-name"
                type="text"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 md:w-full">
            <div className="md:w-2/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Select Collection
              </label>
            </div>
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="inline-full-name"
                type="text"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 md:w-full">
            <div className="md:w-2/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                T-Shirt Description
              </label>
            </div>
            <div className="md:w-full">
              <textarea
                id="description"
                name="description"
                rows="5"
                cols="50"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 md:w-full">
            <div className="md:w-2/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Cover Image
              </label>
            </div>
            <div className="md:w-full">
              <input
                type="file"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mt-4">
            <button
              className="shadow bg-black border-2 w-40 border-black hover:bg-white hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add TShirt
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TShirtModal;
