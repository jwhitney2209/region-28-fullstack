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
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                className="block w-full bg-white/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
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
                className="block w-full bg-white/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-900 hover:bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50"
            >
              Sign in
            </button>
            <Link
              to="/"
              className="mt-2 flex w-full justify-center rounded-md bg-amber-600 hover:bg-amber-500 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              Back to Home
            </Link>
          </div>
        </form>
        {error && (
          <div className="my-4 bg-red-200 rounded-md border-0 py-3.5">
            <p className="text-red-500 font-semibold text-center">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
