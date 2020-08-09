import React from "react";

const Banner = () => {
  return (
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="font-staatliches mb-4 text-black text-4xl sm:text-4xl md:text-4xl lg:text-5xl">
            Match your Funk,
            <br class="hidden lg:inline-block" /> With our collections !
          </h1>
          <p class="mb-8 leading-relaxed">
            A premium range of custom to readymade range of T-Shirts which match
            your attitude. From Urban, casual to that coolest partywear you
            always wanted.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:opacity-75 rounded text-lg">
              Explore Collections
            </button>
            <button class="ml-4 inline-flex text-black bg-white border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg">
              Explore T-Shirts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
