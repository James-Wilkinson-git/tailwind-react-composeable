import Nav from "./Components/Nav";
import { Card } from "./Components/Card";
import stewUrl from "./assets/stew.jpg";
import noodlesUrl from "./assets/noodles.jpg";
import curryUrl from "./assets/curry.jpg";

function App() {
  return (
    <>
      <div className="text-gray-600 font-serif">
        <div>
          <Nav />
        </div>

        <main className="py-6 px-16 bg-gray-100">
          <div className="flex justify-center md:justify-end">
            <a href="#" className="text-primary">
              Log in
            </a>
            <a href="#" className="text-primary ml-2">
              Sign up
            </a>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold ">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Ninjas</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Latest Recipes
            </h4>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Card
                image={
                  <img
                    src={stewUrl}
                    alt="stew"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                }
              />
              <Card
                image={
                  <img
                    src={noodlesUrl}
                    alt="Noodles"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                }
              />
              <Card
                image={
                  <img
                    src={curryUrl}
                    alt="Curry"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                }
              />
              <Card />
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular
            </h4>

            <div></div>
          </div>

          <div className="flex justify-center">
            <div className="bg-secondary-100 text-secondary-200">Load more</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
