import React from "react";

const Contact = () => {
  return (
    <div className="lg:flex sm:block gap-20 m-10">
      <div className="mt-32 ml-10">
        <p className="text-2xl mb-3 font-bold">Any special requests from us?</p>
        <div className="text-lg mt-5">
          For urgent matters please call us at{" "}
          <p className="text-[orangered]"> 610-687-1575</p>
        </div>
      </div>

      <div className="mt-10 mb-20 ">
        {/* <div class="w-full max-w-xs mt-20">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div> */}

        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              type="text"
              className="bg-white block px-32 py-2 rounded-sm border border-gray-400"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold" for="password">
              Password
            </label>
            <input
              type="password"
              className="bg-white block px-32 mt-5 py-2 rounded-sm border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Message
            </label>
            <input
              type="text"
              className="bg-white block px-32 mt-5 py-20 rounded-sm border border-gray-400"
            />
          </div>

          <p className="text-sm text-gray-400 mt-5 mr-5">
            This form is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>

          <button className="bg-orange-500 rounded-sm text-white px-2.5 py-2 mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
