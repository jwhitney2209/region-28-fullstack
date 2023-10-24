/* eslint-disable react/jsx-no-comment-textnodes */
import DirectoryTable from "../components/DirectoryTable";

export default function Directory() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">
                  Directory
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  A list of all directors in the region.
                </p>
              </div>
            </div>
            <div className="-mx-4 mt-8 sm:-mx-0">
              <DirectoryTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
