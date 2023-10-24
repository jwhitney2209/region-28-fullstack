import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import AuthService from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      AuthService.login(data.login.token);
      navigate("/admin");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                required
                className="block w-full bg-white/5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                required
                className="block w-full bg-white/5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center bg-gray-900 hover:bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50"
            >
              Sign in
            </button>
            <Link
              to="/"
              className="mt-2 flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back to Home
            </Link>
          </div>
        </form>
        </div>
        {error && (
          <div className="my-4 py-3.5">
            <p className="text-red-500 font-semibold text-center">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
