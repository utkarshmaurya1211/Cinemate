import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, OOPS!
          </p>
          <div className="max-w-lg">
            <img src={PageNotFoundImage} className="rounded" alt="" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-5 p-2.5 mr-2 mb-2 font-medium text-white">
              Back To Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
