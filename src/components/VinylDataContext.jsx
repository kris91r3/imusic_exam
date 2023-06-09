/* eslint-disable react/prop-types */
//react imports
import { createContext, useEffect, useState } from "react";
//import af funktion der foretager hentningen af data
import { getData } from "../modules/db";
//i dette component placerer vi vores hentede vinyl data
//i en kontekst, og alle filer der så importerer den kontekst, kan
//få adgang til dataen
//////////////////////////

//herunder placerer vi vores kontekst i en VinylDataContext
const VinylDataContext = createContext([]);
//herunder opretter vi funktionen der klarer jobbet med
//at køre den importerede funktion, og returnerer den hentede data,
//og putte den i vores VinylDataContext

//til slut eksporterer vi funktionen, så vi kan importere de i andre filer
//det smarte ved dette er at vi kun henter data her, og vi nemt kan dele
//det mellem filerne, uden for mange fetches
function VinylDataContextProvider({ children }) {
  const [vinylData, setVinylData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setVinylData(data);
      } catch (error) {
        console.error("Fejl ved hentning af data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <VinylDataContext.Provider value={vinylData}>
      {children}
    </VinylDataContext.Provider>
  );
}

export { VinylDataContext, VinylDataContextProvider };
