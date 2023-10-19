/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
const selections = [
  {
    title: "Modimo",
    composer: "Michael Barrett",
    voicing: "SATB",
    publisher: "Walton Music",
    pepper: "https://www.jwpepper.com/Modimo/10994206.item",
    penders: "https://www.penders.com/p-971524-modimo.aspx",
    errata:
      "Ignore soli in Tenor and Bass parts (m8, m24, etc) m2- take low bass, same throughout. Ending- All Parts record low note.",
  },
  {
    title: "Music, Lead The Way!",
    composer: "Laura Farnell",
    voicing: "SATB",
    publisher: "Carl Fischer, LLC",
    pepper: "https://www.jwpepper.com/Music%2C-Lead-the-Way%21/10352197.item",
    penders: "https://www.penders.com/p-161434-music-lead-the-way.aspx",
    errata: "Soprano sing S2 at m57 and m61, S1 will be solo or small group.",
  },
  {
    title: "Carry the Light",
    composer: "Andy Beck",
    voicing: "SAB",
    publisher: "Alfred Music",
    pepper: "https://www.jwpepper.com/11393272.item",
    penders: "https://www.penders.com/p-1024592-carry-the-light.aspx",
    errata: "Sing large notes only.",
  },
  {
    title: "Dixit Dominus",
    composer: "Patrick M. Liebergen",
    voicing: "SAB",
    publisher: "Alfred Music",
    pepper: "https://www.jwpepper.com/Dixit-Dominus/11197156.item",
    penders:
      "https://www.penders.com/p-682599-dixit-dominus-from-dixit-dominus-rv-595.aspx",
    errata: "Sing as written.",
  },
];

export default function HighSchool() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-24 text-center sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Region 28 Vocal Division
            <span className="font-thin"> // High School</span>
          </h2>
        </div>
        <div className="py-2">
          <div className="sm:rounded-3xl px-4 py-8 bg-blue-50">
            <div className="text-center space-y-6">
              <h1 className="text-xl text-blue-600 font-semibold">
                Attention Directors!
              </h1>
              <p className="text-blue-600 text-sm">
                Click the button below to download this year&apos;s Region 28
                Honor Choir voice tracks.
              </p>
              <button className="mt-2 rounded-md px-3 py-2 text-white bg-gray-600 hover:bg-gray-500">
                <a href="https://drive.google.com/drive/folders/1yZYyilJtKZ3aSMuaJFf2g_DU2KDxpzsO?usp=sharing" target="_blank" rel="noreferrer">Download Learning Tracks</a>
              </button>
            </div>
          </div>
          <div className="p-4 text-blue-600">
            <h1 className="font-semibold text-2xl">TMEA All-State Selections by Round</h1>
            <p className="text-xl">District - September 23, 2023</p>
            <p>(Mixed) Tshela Moya/Ke nna yo Morena</p>
            <p>(Mixed) Only In Sleep</p>
            <p>(Mixed) Cum Sancto Spiritu</p>
            <p>(Tenor-Bass) O Love</p>
            <p>(Treble) Flight</p>
            <p className="mt-2 text-xl">Region - November 4, 2023 (Morning Round)</p>
            <p>(Mixed) Himne</p>
            <p>(Tenor-Bass) Non havea Febo ancora</p>
            <p>(Tenor-Bass) Glory, Glory, Hallelujah</p>
            <p>(Treble) Terre-Neuve</p>
            <p>(Treble) Suscepit Israel</p>
            <p className="mt-2 text-xl">Pre-Area - November 4, 2023 (Afternoon Round)</p>
            <p>(Mixed) Himne</p>
            <p>(Mixed) Richte Mich Gott</p>
            <p>(Tenor-Bass) Stopwatch and Ordnance Map</p>
            <p>(Treble) I Don&apos;t Feel No Ways Tired!</p>
          </div>
          <div className="p-4 text-blue-600 space-y-6">
            <div className="">
              <h1 className="font-semibold text-2xl">
                TMEA Region 28 District & Region Mixed Choir
              </h1>
              <p>Clinician: Adrian Kirtley, Timber Creek High School</p>
              <p>Accompanist: ---</p>
            </div>
            <div>
              {" "}
              <h1 className="font-semibold text-2xl ">Region 28 Honor Choir</h1>
              <p>Clinician: Raegan Grantham, Jordan High School</p>
              <p>Accompanist: ---</p>
            </div>

            <h1 className="font-semibold text-xl">Honor Choir Selections</h1>
          </div>
          <div className="space-y-6">
            {selections.map((selection) => (
              <>
                <div className="sm:rounded-3xl p-4 bg-gray-100">
                  <div key={selection.title} className="space-y-1.5">
                    <p className="font-bold text-blue-600">
                      Title:{" "}
                      <span className="font-normal">{selection.title}</span>
                    </p>
                    <p className="font-bold text-blue-600">
                      Composer/Arranger:{" "}
                      <span className="font-normal">{selection.composer}</span>
                    </p>
                    <p className="font-bold text-blue-600">
                      Publisher:{" "}
                      <span className="font-normal">{selection.publisher}</span>
                    </p>
                    <p className="font-bold text-blue-600">
                      Voicing:{" "}
                      <span className="font-normal">{selection.voicing}</span>
                    </p>
                    <p className="font-bold text-blue-600">
                      Links to purchase:
                    </p>
                    <Link
                      to={selection.pepper}
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                      className="font-normal rounded-md px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white"
                    >
                      JW Pepper
                    </Link>
                    <Link
                      to={selection.penders}
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 font-normal rounded-md px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      Penders
                    </Link>
                    <p className="mt-2 text-red-500 font-semibold">
                      Instructions: {selection.errata}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
