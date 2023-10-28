import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
          <div className="mb-4 text-center">
            <a href="https://drive.google.com/file/d/1npr-2ZBG712q6LNMWzEQ3rS41siq8Txh/view?usp=drivesdk" className="px-3 py-2 bg-indigo-600 text-white">Region Handbook</a>
            </div>
          <h1 className="font-semibold text-xl text-center">
            TMEA Region 28 Officers
          </h1>
          <div className="px-2 py-4 text-sm text-center">
            <h1 className="font-semibold">
              Chair:{" "}
              <span className="font-normal">
                Mindy Bersalona, Donna High School
              </span>
            </h1>
            <h1 className="font-semibold">
              Vice-Chair:{" "}
              <span className="font-normal">
                Travis Baldwin, Veterans Memorial ECHS
              </span>
            </h1>
            <h1 className="font-semibold">
              Secretary/Treasurer:{" "}
              <span className="font-normal">Tiffany Gibson, Rivera ECHS</span>
            </h1>
          </div>
          <div className="px-2 text-sm text-center">
            <h1 className="font-semibold">
              Middle School Coordinator:{" "}
              <span className="font-normal">
                Robert Sanchez, Garcia MS
              </span>
            </h1>
            <h1 className="font-semibold">
            Middle School Vice-Coordinator:{" "}
              <span className="font-normal">
              Katia Mares, Garcia MS
              </span>
            </h1>
            <h1 className="font-semibold">
              Middle School Treasurer:{" "}
              <span className="font-normal">Vanessa Lopez-Torres, Vernon MS</span>
            </h1>
            <h1 className="font-semibold">
              Middle School Secretary:{" "}
              <span className="font-normal">Rebecca Albritton, Memorial MS</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
