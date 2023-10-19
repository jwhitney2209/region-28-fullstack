import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
          <h1 className="font-semibold text-xl text-center">
            TMEA Region 28 Officers
          </h1>
          <div className="px-2 py-4 text-sm sm:text-left text-center">
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
          <div className="px-2 text-sm sm:text-left text-center">
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
