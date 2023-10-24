import { Link } from "react-router-dom"
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

export default function GoBackButton() {
  return (
    <>
      <div className="flex">
        <Link
        to="/admin"
          className="flex items-center px-3 py-2 text-sm font-semibold text-indigo-600 hover:text-indigo-400"
        >
          <ArrowSmallLeftIcon className="h-5 w-5"/>Go Back
        </Link>
      </div>
    </>
  )
}
