import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/20/solid'
import DirectoryTable from '../components/DirectoryTable';

export default function Admin() {
  return (
    <>
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
        Add Region Members
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        An up-to-date list of all directors in the region is provided below.
      </p>
      <div className="mt-6">
        <Link
          to="add-member"
          type="button"
          className="inline-flex items-center bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Member
        </Link>
      </div>
    </div>
    <div className='mt-12'>
        <DirectoryTable />
      </div>
    </>
  );
}
