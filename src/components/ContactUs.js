import React from "react";

const ContactUs = () => {
  return (
    <section class="text-gray-700 body-font relative">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="text-4xl font-staatliches mb-4 text-black ">Contact Us</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed ">
            Got any questions ?<br />
            Feel free to reach out for any queries or to get designed a custom a
            T-Shirt according to your preferences.
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <input
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Name"
                type="text"
              />
            </div>
            <div class="p-2 w-1/2">
              <input
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
              />
            </div>
            <div class="p-2 w-full">
              <textarea
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:opacity-75 rounded text-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
