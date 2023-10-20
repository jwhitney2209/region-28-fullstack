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
      <div className="mx-auto">
        <div className="">
          <div className="px-4 py-8 bg-zinc-200">
            <div className="text-center space-y-6">
              <h1 className="text-xl text-zinc-900 font-semibold">
                Attention Directors!
              </h1>
              <p className="text-zinc-900 text-sm">
                Click the button below to download this year&apos;s Region 28
                Honor Choir voice tracks.
              </p>
              <button className="mt-2 px-3 py-2 text-white bg-gray-600 hover:bg-gray-500">
                <a href="https://drive.google.com/drive/folders/1yZYyilJtKZ3aSMuaJFf2g_DU2KDxpzsO?usp=sharing" target="_blank" rel="noreferrer">Download Learning Tracks</a>
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-7xl p-4 text-zinc-900">
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
          <div className="mx-auto max-w-7xl p-4 text-zinc-900 space-y-6">
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
          <div className="mx-auto max-w-7xl space-y-6">
            {selections.map((selection) => (
              <>
                <div className="p-4 bg-zinc-200">
                  <div key={selection.title} className="space-y-1.5">
                    <p className="font-bold text-zinc-900">
                      Title:{" "}
                      <span className="font-normal">{selection.title}</span>
                    </p>
                    <p className="font-bold text-zinc-900">
                      Composer/Arranger:{" "}
                      <span className="font-normal">{selection.composer}</span>
                    </p>
                    <p className="font-bold text-zinc-900">
                      Publisher:{" "}
                      <span className="font-normal">{selection.publisher}</span>
                    </p>
                    <p className="font-bold text-zinc-900">
                      Voicing:{" "}
                      <span className="font-normal">{selection.voicing}</span>
                    </p>
                    <p className="font-bold text-zinc-900">
                      Links to purchase:
                    </p>
                    <Link
                      to={selection.pepper}
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                      className="font-normal px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white"
                    >
                      JW Pepper
                    </Link>
                    <Link
                      to={selection.penders}
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 font-normal px-3 py-2 bg-zinc-900 hover:bg-zinc-700 text-white"
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
