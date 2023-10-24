import { useQuery } from "@apollo/client";
import { GET_MEMBERS } from "../utils/queries";

export default function DirectoryTable() {
  const { loading, data } = useQuery(GET_MEMBERS);
  if (loading) {
    return <div>Loading...</div>;
  }

  const directors = data.members || [];

  console.log(directors)

  return (
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
            School
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
            Phone
          </th>
          <th
            scope="col"
            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
          >
            Email
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {directors.map((person) => (
          <tr key={person._id} className="even:bg-gray-100">
            <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
              {person.firstName} {person.lastName}
              <dl className="font-normal lg:hidden">
                <dt className="sr-only">School Name</dt>
                <dd className="mt-1 truncate text-gray-700">{person.school.name}</dd>
                <dt className="sr-only sm:hidden">Position</dt>
                <dd className="mt-1 truncate text-gray-500 sm:hidden">
                  {person.position}
                </dd>
                <dt className="sr-only sm:hidden">Email</dt>
                <dd className="mt-1 truncate text-gray-500 sm:hidden">
                  {person.email}
                </dd>
                <dt className="sr-only sm:hidden">School Phone</dt>
                <dd className="mt-1 truncate text-gray-500 sm:hidden">
                  {person.school.phone}
                </dd>
              </dl>
            </td>
            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
              {person.school.name}
            </td>
            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
              {person.position}
            </td>
            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
              {person.school.phone}
            </td>
            <td className="hidden px-3 hover:text-indigo-600 py-4 text-sm text-gray-500 sm:table-cell">
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
