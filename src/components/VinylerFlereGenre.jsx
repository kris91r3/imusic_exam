//React imports
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//Vinyldata
import { VinylDataContext } from "../components/VinylDataContext";
//Components
import Button from "../components/Button";
//Styles
import "../styles/vinyler.scss";
import NextPageSimulationBtn from "../components/NextPageSimulationBtn";
function Vinyler() {
  //useEffect der sørger for at sende vinduet til tops når siden renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //opbevaring af vores vinyldata i en const
  const vinylData = useContext(VinylDataContext);
  //TEST
  const updatedVinylData = vinylData.map((data) => {
    const newData = { ...data }; // Opret en kopi af dataobjektet
    if (typeof newData.genre === "string") {
      const genreArray = newData.genre.split(",").map((item) => item.trim());
      newData.genre = genreArray;
    }
    return newData;
  });
  // Brug updatedVinylData til videre behandling
  /*  console.log(updatedVinylData); */

  //useState opsat til at styre filtreringen, starter med et tomt array
  const [filteredVinyls, setFilteredVinyls] = useState(updatedVinylData); //eller tomt array?
  // State til at styre visningen af filtreringsknapperne
  const [showFilters, setShowFilters] = useState(false);
  //her opsætter vi useNavigate i en navigate const, som vi kan bruge til at navigere brugeren et sted hen
  const navigate = useNavigate();
  //Filtrerings states
  //TEST selectedGenre ændret til SelectedGenres, og sat til tomt array
  const [selectedGenres, setSelectedGenres] = useState([]); //genren starter med at være alle, så alle vinyler vises
  const [showOnlyNyheder, setShowOnlyNyheder] = useState(false); //vis kun nyheder, starter med at være falsk
  const [showOnlyFarvetVinyl, setShowOnlyFarvetVinyl] = useState(false); //vis kun farvede vinyler starter med at være falsk
  /*   const [isFiltering, setIsFiltering] = useState(false); */ //state der skal undersøge, hvorvidt der foregår en filtrering eller ej
  //i denne useEffect tjekker vi at vi rent faktisk har dataen før,
  //vi begynder at filtrere på det
  //TEST MED VINYLDATAS NAVN
  useEffect(() => {
    if (updatedVinylData && updatedVinylData.length > 0) {
      const filteredVinyls = filterVinyls(
        updatedVinylData,
        selectedGenres,
        showOnlyNyheder,
        showOnlyFarvetVinyl
      );
      setFilteredVinyls(filteredVinyls);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedVinylData, selectedGenres, showOnlyNyheder, showOnlyFarvetVinyl]);
  function toggleFilters() {
    setShowFilters(!showFilters);
  }
  //i denne funktion har vi vores forskellige conditions der tjekker om
  //vinylerne passer med filtreringskravet
  function filterVinyls(vinyls, genres, showOnlyNyheder, showOnlyFarvetVinyl) {
    let all = [...vinyls];
    if (genres.length > 0 && genres[0] !== "Alle") {
      all = all.filter((vinyl) => genres.includes(vinyl.genre));
    }
    if (showOnlyNyheder) {
      all = all.filter((vinyl) => vinyl.nyhed);
    }
    if (showOnlyFarvetVinyl) {
      all = all.filter((vinyl) => vinyl.farve === "Farvet vinyl");
    }
    return all;
  }
  //her har vi en funktion der sender brugeren til forsiden
  function goToHome() {
    navigate("/");
  }
  //her har vi den funktion der sætter genren til det valgte,
  //og som filtrerer / sætter vinylerne efter den genre
  //TEST
  function handleGenreFilter(genre) {
    if (selectedGenres.includes(genre)) {
      // Hvis genren allerede er valgt, skal den fjernes fra det valgte genres-array
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      // Hvis genren ikke allerede er valgt, skal den tilføjes til det valgte genres-array
      setSelectedGenres([...selectedGenres, genre]);
    }
  }
  //her toggler vi statet mellem true og false i forhold til
  //om der kun skal vises nyheder
  function handleNyhederFilter() {
    setShowOnlyNyheder((prevShowOnlyNyheder) => !prevShowOnlyNyheder);
  }
  //her toggler vi statet mellem true og false i forhold til
  //om der kun skal vises farvede vinyler
  function handleFarvetVinylFilter() {
    setShowOnlyFarvetVinyl(
      (prevShowOnlyFarvetVinyl) => !prevShowOnlyFarvetVinyl
    );
  }
  //her har vi vores return statement, hvor vi får det korrekte
  //indhold vist i vores frontend
  return (
    <>
      <main>
        <h1>Nye & kommende vinyludgivelser</h1>
        <div className="filter-btn-wrapper">
          <button className="toggle-filter-knapper" onClick={toggleFilters}>
            {showFilters ? (
              <>
                {/*           Skjul filtre{" "} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 96 960 960"
                  width="18"
                >
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
              </>
            ) : (
              <>
                VIS FILTRE{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.56326 0.000114634C6.59768 0.000182132 6.63216 0.00023828 6.66667 0.00023828C6.70122 0.00023828 6.73567 0.000182132 6.77011 0.000114634C7.17978 -0.000571599 7.58244 -0.00124689 7.94111 0.0960632C8.89978 0.356123 9.64844 1.11421 9.90533 2.08476C10.0014 2.44794 10.0008 2.85564 10.0001 3.27044C10.0001 3.3053 10 3.34021 10 3.37515H18.8889C19.5026 3.37515 20 3.87881 20 4.50013C20 5.12142 19.5026 5.6251 18.8889 5.6251H10C10 5.66004 10.0001 5.69495 10.0001 5.72981C10.0008 6.14461 10.0014 6.55231 9.90533 6.91554C9.64844 7.88606 8.89978 8.64417 7.94111 8.90415C7.58244 9.00146 7.17978 9.00079 6.77011 9.00011C6.73567 9.00011 6.70122 9 6.66667 9C6.63216 9 6.59768 9.00011 6.56324 9.00011C6.15356 9.00079 5.75088 9.00146 5.39217 8.90415C4.43358 8.64417 3.68483 7.88606 3.42799 6.91554C3.33187 6.5523 3.33253 6.14461 3.33322 5.7298C3.33328 5.69495 3.33333 5.66003 3.33333 5.6251H1.11111C0.497467 5.6251 0 5.12142 0 4.50013C0 3.87881 0.497467 3.37515 1.11111 3.37515H3.33333C3.33333 3.34021 3.33328 3.3053 3.33322 3.27044C3.33253 2.85564 3.33187 2.44794 3.42799 2.08476C3.68483 1.11421 4.43358 0.356123 5.39217 0.0960632C5.75088 -0.00124689 6.15356 -0.000571599 6.56326 0.000114634ZM6.10957 2.2562C5.99105 2.26167 5.96317 2.27048 5.96732 2.26934C5.7756 2.32136 5.62586 2.47297 5.57449 2.66709C5.57356 2.67103 5.56626 2.70559 5.5615 2.81109C5.55582 2.93712 5.55556 3.10341 5.55556 3.37515V5.6251C5.55556 5.89683 5.55582 6.06312 5.5615 6.18915C5.5669 6.30914 5.5756 6.33736 5.57449 6.33317C5.62586 6.52727 5.7756 6.67889 5.96732 6.7309C5.96317 6.72978 5.99105 6.73857 6.10957 6.74405C6.23403 6.7498 6.39827 6.75006 6.66667 6.75006C6.93511 6.75006 7.09933 6.7498 7.22378 6.74405C7.34222 6.73857 7.37011 6.72978 7.366 6.7309C7.55778 6.67889 7.70744 6.52727 7.75889 6.33317C7.75778 6.33736 7.76645 6.30914 7.77178 6.18915C7.77756 6.06312 7.77778 5.89683 7.77778 5.6251V3.37515C7.77778 3.10341 7.77756 2.93712 7.77178 2.81109C7.76645 2.69111 7.75778 2.66288 7.75889 2.66709M6.10957 2.2562C6.23403 2.25045 6.39827 2.25018 6.66667 2.25018L6.10957 2.2562ZM6.66667 2.25018C6.93511 2.25018 7.09933 2.25045 7.22378 2.2562L6.66667 2.25018ZM7.22378 2.2562C7.328 2.261 7.36211 2.2684 7.366 2.26934L7.22378 2.2562ZM13.2299 8.99989C13.2643 9 13.2988 9 13.3333 9C13.3679 9 13.4023 9 13.4368 8.99989C13.8464 8.99921 14.2491 8.99854 14.6078 9.09585C15.5664 9.35594 16.3151 10.1139 16.572 11.0846C16.6681 11.4477 16.6674 11.8554 16.6668 12.2702C16.6668 12.3051 16.6667 12.3399 16.6667 12.3749H18.8889C19.5026 12.3749 20 12.8786 20 13.4999C20 14.1212 19.5026 14.6249 18.8889 14.6249H16.6667C16.6667 14.6598 16.6668 14.6947 16.6668 14.7296C16.6674 15.1444 16.6681 15.5521 16.572 15.9153C16.3151 16.8858 15.5664 17.6439 14.6078 17.9039C14.2491 18.0012 13.8464 18.0006 13.4368 17.9999C13.4023 17.9999 13.3679 17.9998 13.3333 17.9998C13.2988 17.9998 13.2643 17.9999 13.2299 17.9999C12.8202 18.0006 12.4176 18.0012 12.0589 17.9039C11.1002 17.6439 10.3516 16.8858 10.0947 15.9153C9.99856 15.5521 9.99922 15.1444 9.99989 14.7296C9.99989 14.6947 10 14.6598 10 14.6249H1.11111C0.497467 14.6249 0 14.1212 0 13.4999C0 12.8786 0.497467 12.3749 1.11111 12.3749H10C10 12.34 9.99989 12.3051 9.99989 12.2702C9.99922 11.8554 9.99856 11.4477 10.0947 11.0846C10.3516 10.1139 11.1002 9.35594 12.0589 9.09585C12.4176 8.99854 12.8202 8.99921 13.2299 8.99989ZM12.7762 11.256C12.6578 11.2614 12.6299 11.2702 12.634 11.2691C12.4422 11.3212 12.2926 11.4728 12.2411 11.6669C12.2422 11.6627 12.2336 11.6909 12.2282 11.8109C12.2224 11.9369 12.2222 12.1032 12.2222 12.3749V14.6249C12.2222 14.8967 12.2224 15.0629 12.2282 15.1889C12.2336 15.309 12.2422 15.3372 12.2411 15.3329C12.2926 15.5271 12.4422 15.6786 12.634 15.7307C12.6299 15.7296 12.6578 15.7384 12.7762 15.7439C12.9007 15.7496 13.0649 15.7498 13.3333 15.7498C13.6018 15.7498 13.766 15.7496 13.8904 15.7439C14.0089 15.7384 14.0368 15.7296 14.0327 15.7307C14.2244 15.6786 14.3741 15.5271 14.4256 15.3329C14.4244 15.3372 14.4331 15.309 14.4384 15.1889C14.4442 15.0629 14.4444 14.8967 14.4444 14.6249V12.3749C14.4444 12.1032 14.4442 11.9369 14.4384 11.8109C14.4331 11.6909 14.4244 11.6627 14.4256 11.6669C14.3741 11.4728 14.2244 11.3212 14.0327 11.2691C14.0368 11.2702 14.0089 11.2614 13.8904 11.256C13.766 11.2502 13.6018 11.2499 13.3333 11.2499C13.0649 11.2499 12.9007 11.2502 12.7762 11.256Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </>
            )}
          </button>
          {showFilters && (
            <div className="filter-wrapper">
              <Button
                /*  className={`${selectedGenres === "Alle" ? "active" : ""}`} */
                className={`${
                  JSON.stringify(selectedGenres) === JSON.stringify("Alle")
                    ? "active"
                    : ""
                }`}
                clickAction={() => {
                  handleGenreFilter("Alle");
                  setShowOnlyNyheder(false);
                  setShowOnlyFarvetVinyl(false);
                }}
                desc="ALLE"
              />
              <Button
                className={`${selectedGenres === "Rock" ? "active" : ""}`}
                clickAction={() => handleGenreFilter("Rock")}
                desc="ROCK"
              />
              <Button
                className={`${selectedGenres === "Pop" ? "active" : ""}`}
                clickAction={() => handleGenreFilter("Pop")}
                desc="POP"
              />
              <Button
                className={`${selectedGenres === "Metal" ? "active" : ""}`}
                clickAction={() => handleGenreFilter("Metal")}
                desc="METAL"
              />
              <Button
                className={`${selectedGenres === "Country" ? "active" : ""}`}
                clickAction={() => handleGenreFilter("Country")}
                desc="COUNTRY"
              />
              <Button
                className={`${selectedGenres === "Soundtrack" ? "active" : ""}`}
                clickAction={() => handleGenreFilter("Soundtrack")}
                desc="SOUNDTRACK"
              />
              <Button
                className={`${
                  selectedGenres === "Skandinavisk" ? "active" : ""
                }`}
                clickAction={() => handleGenreFilter("Skandinavisk")}
                desc="SKANDINAVISK"
              />
              <div className="filter-wrapper-other"></div>
              <Button
                className={showOnlyNyheder ? "active" : ""}
                clickAction={handleNyhederFilter}
                desc="NYHEDER"
              />
              <Button
                className={showOnlyFarvetVinyl ? "active" : ""}
                clickAction={handleFarvetVinylFilter}
                desc="FARVET VINYL"
              />
            </div>
          )}
        </div>
        <div className="vinyl-wrapper">
          {/*  {filteredVinyls.length === 0 ? ( */}
          {Array.isArray(filteredVinyls) && filteredVinyls.length === 0 ? (
            <p>Der er ingen plader der matcher dine filtre</p>
          ) : null}
          {filteredVinyls.map((vinyl) => (
            <Link
              to={`/produkter/vinyler/${vinyl.id}`}
              key={vinyl.id}
              className="vinyl"
            >
              <div key={vinyl.id} className="vinyl">
                <div className="img-wrapper">
                  <img
                    src={vinyl.imgUrl}
                    className="produkt-img"
                    alt="produkt billede af vinyl"
                  ></img>
                </div>
                <div className="tags">
                  <div className="tag-wrapper">
                    <div className="edition">
                      {vinyl.edition && (
                        <p className="edition-p">{vinyl.edition}</p>
                      )}
                    </div>
                    <div className="nyhed">
                      {vinyl.nyhed && <p className="nyhed-p">{vinyl.nyhed}</p>}
                    </div>
                    <div className="lagerstatus">
                      {vinyl.lagerstatus && (
                        <p className="lagerstatus-p">{vinyl.lagerstatus}</p>
                      )}
                    </div>
                    <div className="lav-lagerstatus">
                      {vinyl.lav_lager && (
                        <p className="lav-lagerstatus-p">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_196_2460)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0ZM4 0.421054C2.0234 0.421054 0.421054 2.0234 0.421054 4C0.421054 5.9766 2.0234 7.57895 4 7.57895C5.9766 7.57895 7.57895 5.9766 7.57895 4C7.57895 2.0234 5.9766 0.421054 4 0.421054ZM3.96117 5.5106C3.62773 5.5106 3.35647 5.78187 3.35647 6.1153C3.35647 6.44873 3.62773 6.72 3.96117 6.72C4.2946 6.72 4.56587 6.44873 4.56587 6.1153C4.56587 5.78187 4.2946 5.5106 3.96117 5.5106ZM4.76444 1.47368H3.1579L3.54915 5.02088H4.37318L4.76444 1.47368Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_196_2460">
                                <rect width="8" height="8" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>{" "}
                          {vinyl.lav_lager}
                        </p>
                      )}
                      <div className="notag">
                        {vinyl.no_tag && (
                          <p className="notag-p">{vinyl.no_tag}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="kunstner">{vinyl.kunstner} -</p>
                <p className="titel">{vinyl.titel}</p>
                <div className="pris-wrapper">
                  <p className="pris">DKK {vinyl.pris},- </p>
                </div>
                <div className="btn-wrapper">
                  <Button
                    className={"buybtn buy-btn"}
                    desc={vinyl.btn_txt}
                    clickAction={goToHome}
                  ></Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <NextPageSimulationBtn></NextPageSimulationBtn>
      </main>
    </>
  );
}
export default Vinyler;
