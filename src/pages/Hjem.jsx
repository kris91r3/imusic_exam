//react imports
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
//component imports
import UdvalgteKategorier from "../components/UdvalgteKategorier";
import Button from "../components/Button";
import AppetizerOne from "../components/AppetizerOne";
import AppetizerTwo from "../components/AppetizerTwo";
//asset imports
import flueBen from "../assets/svg/flueben.svg";
import farvedeVinyler from "../assets/img/vinyler.webp";

function Hjem() {
  //useEffect der sender vinduet til toppen når siden renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //useNavigate, vi opsætter en navigation til vinylsiden,
  //og kobler funktionen på vores knap
  const navigate = useNavigate();
  /*   function goToVinyler() {
    navigate("../produkter/vinyler");
  } */
  function goToGodePriser() {
    navigate("../godepriser");
  }
  //herunder har vi vores return statement, hvor vi
  //får det indhold ud, vi viser i vores frontend
  return (
    <>
      <Helmet>
        <title>iMusic - Nordens største udvalg af musik, film og bøger</title>
        <meta
          name="description"
          content="iMusic er Nordens største musikforhandler med 7.340.000 titler til lave priser · Kæmpe udvalg af ny og kommende materiale · Køb trygt online her"
        />
        <meta name="keywords" content="imusic, vinyl, musik, lave priser" />
      </Helmet>
      <section className="hero-section">
        <div className="top-img">
          <img
            src={farvedeVinyler}
            alt="Farvede vinyler fra Imusic"
            className="farvede-vinyler"
          />
        </div>
        <div className="hero-txt hero-btn">
          <h1>
            Vil du have fingrene i en 15% kampagnekode til vinyler hos imusic?
            så se mere her
          </h1>
          <p>
            Klik dig videre til vores kampagne og få fat i din kode, som du kan
            bruge på imusics vinyler! Skynd dig at benytte tilbuddet, og få din
            rabat før det er for sent.
          </p>
          <div className="cta-btn-wrapper">
            <Button
              className={"cta-btn"}
              clickAction={goToGodePriser}
              desc={"SE KAMPAGNE"}
            ></Button>
          </div>
        </div>
      </section>
      <main>
        <section className="udvalgte-kategorier">
          <UdvalgteKategorier></UdvalgteKategorier>
        </section>
        <section className="appetizer1">
          <AppetizerOne></AppetizerOne>
        </section>

        <section className="appetizer2">
          <AppetizerTwo></AppetizerTwo>
        </section>
        <section className="shop-here">
          <h3>Hvorfor handle her?</h3>
          <div className="shop-card-wrapper">
            <div className="shop-card">
              <div className="ico-wrapper">
                <h4>Nordens største udvalg</h4>
                <img src={flueBen} className="flueben" alt="flueben i cirkel" />
              </div>

              <p>
                iMusic er Nordens største musikforhandler med 7.340.000 titler
                til lave priser · Kæmpe udvalg af nyt og kommende materiale
              </p>
            </div>

            <div className="shop-card">
              <div className="ico-wrapper">
                <h4>Fri fragt v. DKK 699,00</h4>
                <img src={flueBen} className="flueben" alt="flueben i cirkel" />
              </div>
              <p>
                Få gratis fragt til pakkeshop ved køb for DKK 699,00 (i
                Danmark). Gælder ikke ved køb af gavekort.
              </p>
            </div>

            <div className="shop-card">
              <div className="ico-wrapper">
                <h4>Godkendt</h4>
                <img src={flueBen} className="flueben" alt="flueben i cirkel" />
              </div>
              <p>
                Topvurdering på Trustpilot og Google-anmeddelser. Medlem af
                Dansk Erhverv - Digital Handel.
              </p>
            </div>

            <div className="shop-card">
              <div className="ico-wrapper">
                <h4>God service</h4>{" "}
                <img src={flueBen} className="flueben" alt="flueben i cirkel" />
              </div>
              <p>
                Personlig kundeservice, der er til at tale med. Hurtig
                responstid, vores kunder er vores første prioritet.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hjem;
