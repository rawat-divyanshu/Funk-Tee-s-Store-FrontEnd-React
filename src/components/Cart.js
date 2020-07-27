import React from "react";

const Cart = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container mx-auto px-5">
        <h1 className="text-black text-4xl font-staatliches inline">
          Shopping Cart
        </h1>
        <button
          type="button"
          class="float-right inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:opacity-75 focus:outline-none focus:outline-none transition ease-in-out duration-150"
        >
          Checkout
        </button>
      </div>
      <div className="container px-5 py-20 mx-auto">
        <div className="-my-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              <li className="border-t border-gray-200">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div className="text-sm leading-5 font-medium text-black truncate">
                          <a href="#">T-Shirt Name</a>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <a className="cursor-pointer text-red-900" src="#">
                            <i className="fas fa-trash-alt"></i> Delete
                          </a>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <div className="text-sm leading-5 text-gray-900">
                            <label for="qty">Quantity : </label>
                            <select name="quantity" id="qty">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm leading-5 font-medium text-black truncate">
                      Price
                    </div>
                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      Rs. 300
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-t border-gray-200">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div className="text-sm leading-5 font-medium text-black truncate">
                          <a href="#">T-Shirt Name</a>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <a className="cursor-pointer text-red-900" src="#">
                            <i className="fas fa-trash-alt"></i> Delete
                          </a>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <div className="text-sm leading-5 text-gray-900">
                            <label for="qty">Quantity : </label>
                            <select name="quantity" id="qty">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm leading-5 font-medium text-black truncate">
                      Price
                    </div>
                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      Rs. 300
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-t border-gray-200">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div className="text-sm leading-5 font-medium text-black truncate">
                          <a href="#">T-Shirt Name</a>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <a className="cursor-pointer text-red-900" src="#">
                            <i className="fas fa-trash-alt"></i> Delete
                          </a>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <div className="text-sm leading-5 text-gray-900">
                            <label for="qty">Quantity : </label>
                            <select name="quantity" id="qty">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm leading-5 font-medium text-black truncate">
                      Price
                    </div>
                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      Rs. 300
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-t border-gray-200">
                <div className="flex items-center px-4 py-4 sm:px-6 float-right">
                  <div>
                    <div className="text-sm leading-5 font-medium text-black truncate">
                      Subtotal (3 Items)
                    </div>
                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 float-right">
                      Rs. 900
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          class="md:float-right inline-flex items-center mt-10 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:opacity-75 focus:outline-none focus:outline-none transition ease-in-out duration-150"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
