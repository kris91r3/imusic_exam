import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import TopNav from "../components/TopNav";
import CenterNav from "../components/CenterNav";
import Footer from "../components/Footer";
import VinylSearch from "../components/VinylSearch";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
function RootLayout() {
  //Denne funktion er vores Root layout, det vi vil have skal
  //gælde på alle sider. Her styrer vi også
  //om vi vil vise mobil eller desktop menu, mv.

  //herunder har vi vores state der styrer om burgermenuen er åben eller lukket
  //den starter med at være lukket, derfor har den værdien false,
  //den værdi ændrer sig til true, når brugeren åbner menuen
  const [isOpen, setIsOpen] = useState(false);

  //herunder har vi et state der tjekker om
  //skærmstørrelsen er tilsvarende desktop, eller mobil, og alt
  //efter det, returnere vi den passende menu (Burger eller desktop)
  //implementeringen heraf, er længere nede i koden
  const [isDesktop, setIsDesktop] = useState(false);

  //useRef bruges her til at detecte click udenfor krydset, så den kan lukkes ved klik alle steder
  const dropdownAreaRef = useRef(null);
  //useEffect gør at funktionen kører hver gang det er relevant
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //Nedestående funktion tracker click eventet, og lukker menuen
  //ved klik udenfor krydset
  const handleClickOutside = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(dropdownAreaRef.current)) {
      setIsOpen(false);
    }
  };
  //nedestående sørger for at åbne og lukke, alt efter hvilket state menuen er i (åben, så lukker den, lukket så åbner den)
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  //når skærmen ændrer sig, kører nedestående funktion, og laver et tjek på om
  //skærmen er større end 762 px, for så sættes state til at være desktop,
  //og på baggrund af det, vises den korrekte menu
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 762);
    };

    // Lyt efter resize-begivenheden og opdater skærmstørrelsen
    window.addEventListener("resize", checkScreenSize);

    // Kald checkScreenSize når det er relevant
    checkScreenSize();

    // Oprydning når det er sket
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  //herunder har vi vores return statement, hvor vi får det
  //indhold ud, vi gerne vil have, og som er gældende på alle sider
  //Vi har både vores mobil, og desktop indhold herunder,
  //men vi har en condition der tjekker, hvilken en der skal køres
  //derudover har vi vores brødkrummer. Vi har også outlet, som er en
  //del af vores routing
  return (
    <>
      <div className="root-layout">
        <ScrollToTopBtn></ScrollToTopBtn>
        <header>
          {isDesktop ? (
            /* Desktop-visning */
            <div className="desktop-menu">
              <TopNav></TopNav>
              <CenterNav></CenterNav>
              <Nav />
            </div>
          ) : (
            /* Mobilvisning */
            <div className="mobil-menu">
              <CenterNav></CenterNav>
              <div className="button-wrapper">
                <button
                  onClick={handleMenuToggle}
                  ref={dropdownAreaRef}
                  className="burger-btn"
                  name="toggle-menu-button"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 96 960 960"
                      width="48"
                    >
                      <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 96 960 960"
                      width="48"
                    >
                      <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="sogefelt-wrapper">
                <VinylSearch></VinylSearch>
              </div>

              {isOpen && (
                <div className="menu">
                  <Nav />
                </div>
              )}
            </div>
          )}
          <Breadcrumbs></Breadcrumbs>
        </header>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default RootLayout;
