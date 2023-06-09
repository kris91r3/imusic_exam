import { useEffect, useState, useContext } from "react";
//Stylesheet imports
import "./styles/index.scss";
import "./styles/navigation.scss";
import "./styles/footer.scss";
import "./styles/buttons.scss";
/* import "./styles/vinyler.scss"; */

//Router imports
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Import af komponenter og sider
import Gavekort from "./pages/Gavekort";
import Godepriser from "./pages/Godepriser";
import Hjem from "./pages/Hjem";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import Nav from "./components/Nav";
import Vinyler from "./pages/Vinyler";
import { CartContext, CartContextProvider } from "./components/CartContext";
//import af databse fil fra module mappe
import { getData } from "./modules/db";
import {
  VinylDataContext,
  /*   VinylDataContextProvider */
} from "./components/VinylDataContext";
import VinylSingle from "./pages/VinylSingle";

/* const VinylDataContext = createContext([]); */
//herunder opretter vi vores routes,
//og sætter de elementer (komponenter / sider) ind som
//vi ønsker vores Route skal gå til
//denne måde er en anbefalet måde at lave en
//multipage application med REACT

const routes = createRoutesFromElements(
  //vi har omkranset vores route, i en overordnet route nemlig vores RootLayout.
  //på den måde, vil det være en del af alle siderne der er nested indeni
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Hjem />} />
    <Route path="gavekort" element={<Gavekort />} />
    <Route path="godepriser" element={<Godepriser />} />
    <Route path="/produkter/vinyler" element={<Vinyler />} />
    <Route path="/produkter/vinyler/:id" element={<VinylSingle />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);
//det er brugen af createBrowserRouter, der er anbefalet fordi:
//"This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
//It also enables the v6.4 data APIs like loaders, actions, fetchers and more."
const router = createBrowserRouter(routes);

function App() {
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

  //kurv test
  const cartContext = useContext(CartContext);
  // Udpak kontekstobjektets værdier

  //App funktionen er den der sørger for
  //at køre alle vores Routes, og deres tilhørende indhold.
  //Elementer eller funktioner der er i App, gør sig
  //gældende på alle sider.
  return (
    <>
      <CartContextProvider value={cartContext}>
        <VinylDataContext.Provider value={vinylData}>
          <RouterProvider router={router}>
            <Route path="/" element={<Nav />} /> {/* Tilføjet denne linje */}
          </RouterProvider>
        </VinylDataContext.Provider>
      </CartContextProvider>
    </>
  );
}

export default App;
