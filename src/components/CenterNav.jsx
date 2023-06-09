//asset import
import logoSort from "../assets/svg/logo_sort.svg";
//component import
/* import SogeFelt from "./SogeFelt"; */

import VinylSearch from "./VinylSearch";
import Basket from "./Basket";
//react imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CenterNav() {
  //state der styrer om skærmen er desktop eller ikke
  const [isDesktop, setIsDesktop] = useState(false);
  //useEffect der sætter skærmen til værende desktop ved 762px
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

  //send brugeren til forside via. logo i nav
  const navigate = useNavigate();
  function goToHome() {
    navigate("./");
  }
  return (
    <>
      <div className="center-nav">
        {isDesktop ? (
          <>
            <div className="center-nav-logo" onClick={goToHome}>
              <img
                src={logoSort}
                alt="imusic logo - sort farve"
                className="sort-logo"
              ></img>
            </div>
            <div className="wrapper">
              <VinylSearch></VinylSearch>
              {/*    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="38"
                  viewBox="0 96 960 960"
                  width="38"
                >
                  <path d="M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
                </svg> */}
              <Basket></Basket>
            </div>
          </>
        ) : (
          <>
            <div className="center-nav-logo" onClick={goToHome}>
              <img
                src={logoSort}
                alt="imusic logo - sort farve"
                className="sort-logo"
              ></img>
            </div>
            {/*    <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                className="mobil-kurv"
              >
                <path d="M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
              </svg> */}
            <Basket></Basket>
          </>
        )}
      </div>
    </>
  );
}

export default CenterNav;
