/* eslint-disable react/jsx-no-comment-textnodes */
const directors = [

];

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
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      School
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
            {directors.map((person) => (
              <tr key={person.email} className="even:bg-gray-100">
                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {person.name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.email}</dd>
                    <dt className="sr-only sm:hidden">School</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.school}</dd>
                    <dt className="sr-only sm:hidden">Phone</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.phone}</dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.title}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.email}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.school}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.phone}</td>
              </tr>
            ))}
          </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
