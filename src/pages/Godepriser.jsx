//components import
import Button from "../components/Button";
import FastLavPris from "../components/FastLavPris";
//react imports
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import YoutubeEmbed from "../components/YoutubeEmbed";
function Godepriser() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //vi opsætter en vej til vinyl siden, og
  //kobler funktionen på vores knap
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("../produkter/vinyler");
  }
  function goToNoPage() {
    navigate("../errorpage");
  }
  //herunder har vi vores return statement, som
  //giver os det indhold, vi viser i vores frontend
  return (
    <>
      <Helmet>
        <title>iMusic - Gode priser</title>
        <meta
          name="description"
          content="iMusic er Nordens største musikforhandler med 7.340.000 titler til lave priser · Kæmpe udvalg af ny og kommende materiale · Køb trygt online her"
        />
        <meta
          name="keywords"
          content="kampagne, tilbud, imusic, vinyl, musik, lave priser"
        />
      </Helmet>
      <section className="gode-priser-hero">
        <div className="video-fig-wrapper">
          <figcaption className="video-anbefaling">
            <em>Anbefalet: Sæt videoen til HD</em>
          </figcaption>
          <YoutubeEmbed embedId="l2_KPkpHKR4"></YoutubeEmbed>
        </div>

        <div className="hero-txt hero-btn">
          <h1>
            Spar penge på vinyler med en kampagnekode på 15% rabat til dit næste
            køb hos imusic
          </h1>
          <p>
            Brug kampagnekoden ‘IMUSIC15’ ved check-ud. Psssst, forresten vi er
            ikke færdige... Lige nu har vi en konkurrence på vores Instagram{" "}
            <em>imusicdk.</em> Klik ind og deltag du har mulighed for at vinde
            et gavekort på 1000 kroner, som kan bruges på hele imusic.dk!
          </p>
          <div className="cta-btn-wrapper">
            <a
              href="https://perfpics.dk/kea/4_sem/some_opslag/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <Button className={"cta-btn"} desc={"DELTAG"}></Button>
            </a>
          </div>
        </div>
      </section>
      <main>
        <section className="tilbud">
          <div className="txt">
            <h2>Tilbud lige nu</h2>
            <p>
              Gør et kup - tilbuddene gælder i en begrænset periode. Så skynd
              dig!
            </p>
          </div>
          <div className="tilbud-wrapper">
            <div className="vinyl-tilbud">
              <h3>GODE TILBUD PÅ VINYLER LIGE NU!</h3>
              <Button
                className={"cat-btn"}
                desc={"TJEK TILBUD"}
                clickAction={goToVinyler}
              ></Button>
            </div>
            <div className="kpop-tilbud">
              <h3>GODE TILBUD PÅ K-POP LIGE NU!</h3>
              <Button
                className={"cat-btn"}
                desc={"TJEK TILBUD"}
                clickAction={goToNoPage}
              ></Button>
            </div>
          </div>
        </section>
        <section className="fast-lav-pris">
          <FastLavPris></FastLavPris>
        </section>
      </main>
    </>
  );
}

export default Godepriser;
