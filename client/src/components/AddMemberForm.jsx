import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MEMBER } from "../utils/mutations";
import GoBackButton from "./GoBackButton";
import SuccessModal from "./SuccessModal";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  schoolName: '',
  schoolPhone: '',
  street1: '',
  street2: '',
  city: '',
  state: 'TX',
  zip: '',
};

export default function AddMemberForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    schoolPhone: "",
    street1: "",
    street2: "",
    city: "",
    state: "TX",
    zip: "",
  });

  const [addMember, { loading, error }] = useMutation(ADD_MEMBER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addMember({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          school: {
            name: formState.schoolName,
            phone: formState.schoolPhone,
            address: {
              street1: formState.street1,
              street2: formState.street2,
              city: formState.city,
              state: formState.state,
              zip: formState.zip,
            },
          },
        },
      });

      if (response.data) {
        setShowSuccess(true); // Show the success modal if member is added successfully
        setFormState(initialState); // Reset the form state
      }
    } catch {
      console.error("Error addming member: ", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;


  return (
    <>
      <>
        <GoBackButton />
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Member Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly.
            </p>
            {!loading && !error && (
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="schoolName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    School Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="schoolName"
                      id="schoolName"
                      autoComplete="schoolName"
                      value={formState.schoolName}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="schoolPhone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    School Phone
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="schoolPhone"
                      id="schoolPhone"
                      value={formState.schoolPhone}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street1"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address 1
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street1"
                      id="street1"
                      value={formState.street1}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street2"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address 2
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street2"
                      id="street2"
                      value={formState.street2}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      value={formState.city}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      disabled
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="address-level1"
                      value="TX"
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      autoComplete="zip"
                      value={formState.zip}
                      onChange={handleInputChange}
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="mt-2 flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </form>
        <SuccessModal isVisible={showSuccess} onHide={() => setShowSuccess(false)}/>
      </>
    </>
  );
}
