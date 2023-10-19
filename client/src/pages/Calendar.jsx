/* eslint-disable react/jsx-no-comment-textnodes */

const calendar = [
  {
    date: "September 9, 2023",
    event: "Region 28 Honor Choir Campus Fee Due - $300.00",
    description: "",
    location: "",
  },
  {
    date: "September 9, 2023",
    event: "HS Entry and Postmark Deadline for District Mixed Auditions",
    description: "$15.00 per student and $80.00 School Fee",
    location: "",
  },
  {
    date: "September 23, 2023",
    event: "District Mixed Auditions",
    description: "",
    location: "Rivera ECHS, Brownsville",
  },
  {
    date: "November 4, 2023",
    event: "Region/Pre-Area Mixed Auditions",
    description: "",
    location: "Harlingen South HS, Harlingen",
  },
  {
    date: "November 17-18, 2023",
    event: "LRGV Honor Choir/Region Clinic",
    description: "",
    location: "Harlingen PAC",
  },
  {
    date: "November 18, 2023",
    event: "District/Region Concert 6:00pm",
    description: "",
    location: "Harlingen PAC",
  },
  {
    date: "December 28, 2023",
    event: "Area Clinic 9am-3pm",
    description: "",
    location: "Harlingen HS, Harlingen",
  },
  {
    date: "January 3, 2024",
    event: "UIL Solo & Ensemble Entry and Postmark Deadline",
    description:
      "Entry Fee $10.00 per student, per event. Form 1 needs to be signed by principal and mailed with check - NO LATE ENTRIES",
    location: "",
  },
  {
    date: "January 6, 2024",
    event: "TMEA Area Auditions",
    description: "Area Student Fee - $7.00",
    location: "Harlingen South HS, Harlingen",
  },
  {
    date: "February 3, 2024",
    event: "UIL Solo & Ensemble",
    description: "",
    location: "Hanna ECHS, Brownsville",
  },
  {
    date: "February 5, 2024",
    event:
      "Postmark Deadline for Middle School UIL Concert & Sightreading Evaluation",
    description: "Fee - $350.00 per choir",
    location: "",
  },
  {
    date: "Feburary 7-10, 2024",
    event: "TMEA Clinic/Convention",
    description: "All-State Student Fee - $30.00 due at TMEA Region Meeting",
    location: "Henry B. Gonzalez Convention Center, San Antonio, TX",
  },
  {
    date: "February 27, 2024",
    event:
      "Postmark Deadline for High School UIL Concert & Sightreading Evaluation",
    description: "Fee - $400.00 per choir",
    location: "",
  },
  {
    date: "March 5-7, 2024",
    event: "Middle School UIL Concert & Sightreading Evaluation",
    description: "",
    location: "Harlingen PAC",
  },
  {
    date: "March 26-28, 2024",
    event: "High School UIL Concert & Sightreading Evaluation",
    description: "",
    location: "TSC Performing Arts Center, Brownsville",
  },
  {
    date: "April 6, 2024",
    event: "Postmark and Entry Deadline for MS Region Choir Auditions",
    description: "Fee $15.00 per student and $50.00 school fee",
    location: "",
  },
  {
    date: "April 20, 2024",
    event: "MS Region Choir Auditions",
    description: "",
    location: "Coakley MS, Harlingen",
  },
  {
    date: "May 4, 2024",
    event: "MS Region Choir Clinic and Concert",
    description: "",
    location: "Harlingen PAC",
  },
];

const checks = [
  {
    title: "High School TMEA",
    to: "TMEA Region 28 Vocal Division",
    attn: "c/o Tiffany Gibson",
    address: "509 Winnipeg Ave.",
    city: "Brownsville, TX 78526",
  },
  {
    title: "Middle School Division",
    to: "TMEA Region 28 MS Vocal Division",
    attn: "c/o Vanessa Lopez-Torres",
    address: "17297 Firestone Dr.",
    city: "Harlingen, TX 78552",
  },
  {
    title: "UIL",
    to: "UIL Region 28 Music",
    attn: "c/o Michael Corcoran",
    address: "PO Box 532186",
    city: "Harlingen, TX 78553",
  },
];

export default function Calendar() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-24 text-center sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Region 28 Vocal Division
              <span className="font-thin"> // Calendar</span>
            </h2>
          </div>
          <div className="px-4">
            <div className="-mx-4 mt-8 sm:-mx-0">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                      Event
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {calendar.map((item) => (
                    <tr key={item.event}>
                      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                        {item.date}
                        <dl className="font-normal lg:hidden">
                          <dt className="sr-only">Event</dt>
                          <dd className="mt-1 text-gray-700">{item.event}</dd>
                          <dt className="sr-only sm:hidden">Description</dt>
                          <dd className="mt-1 text-gray-500 sm:hidden">
                            {item.description}
                          </dd>
                        </dl>
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                        {item.event}
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                        {item.description}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {item.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              {checks.map((check) => (
                <div key={check.to}>
                  <div className="mt-8">
                    <div className="text-center sm:text-left">
                      <div className="px-0 sm:px-8">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          {check.title} checks payable to:
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {check.to}
                        </p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {check.attn}
                        </p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {check.address}
                        </p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {check.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
