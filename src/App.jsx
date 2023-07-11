import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormLocation from "./components/FormLocation";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // CONTADOR DE PAGINAS

  const [currentPage, setCurrentPage] = useState(1);
  const arrayPages = [];
  const quantityPages = Math.ceil(location?.residents.length / 20);
  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i);
  }
  const startCut = currentPage * 20 - 20;
  const endCut = currentPage * 20;
  useEffect(() => {
    setCurrentPage(1);
  }, [location]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [idLocation]);

  return (
    <div className="body">
      <header className="header">
        <img className="header-img" src={"/imgHeader.png"} alt="" />
      </header>
      <FormLocation setIdLocation={setIdLocation} />
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <h1 className="mensager-error">
          error ✖️, Ingresa un numero del 1 al 126 🙂
        </h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container">
            {location?.residents.slice(startCut, endCut).map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
          <ul className="page-container">
            {arrayPages.map((page) => (
              <li
                onClick={() => setCurrentPage(page)}
                className={`page-li-number ${
                  page === currentPage && "color-page"
                }`}
                key={page}
              >
                {page}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
