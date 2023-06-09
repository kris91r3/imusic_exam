//react imports
import { useNavigate } from "react-router-dom";
//component imports
import Button from "./Button";
//assets imports
import bog from "../assets/svg/bog.svg";
import film from "../assets/svg/film.svg";
import cd from "../assets/svg/cd.svg";
import vinyl from "../assets/svg/vinyl.svg";

function UdvalgteKategorier() {
  //her har vi opsat navigates til de forskellige produktkategorier
  //så har vi tilkoblet funktionerne til de respektive knapper for hver kategori
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("./produkter/vinyler");
  }
  function goToNoPage() {
    navigate("./errorpage");
  }
  //herunder har vi vores return statement, som giver os det indhold
  //vi ønsker at vise i vores frontend
  return (
    <>
      <div className="heading">
        <h2>Se udvalgte kategorier</h2>
        <p>Nordens største udvalg af musik, film og bøger</p>
      </div>
      <div className="cat-wrapper">
        <div className="vinyl-cat cat">
          <div className="img-wrapper">
            <img
              src={vinyl}
              alt="Vinyl ikon der symboliserer fast lav pris på vinyler"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToVinyler}
              desc={"VINYLER"}
            ></Button>
          </div>
        </div>
        <div className="cd-cat cat">
          <div className="img-wrapper">
            <img
              src={cd}
              alt="CD ikon der symboliserer fast lav pris på CD'er"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToNoPage}
              desc={"CD'ER"}
            ></Button>
          </div>
        </div>
        <div className="film-cat cat">
          <div className="img-wrapper">
            <img
              src={film}
              alt="Film ikon der symboliserer fast lav pris på Film"
              className="film"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToNoPage}
              desc={"FILM"}
            ></Button>
          </div>
        </div>
        <div className="bog-cat cat">
          <div className="img-wrapper">
            <img
              src={bog}
              alt="Bog ikon der symboliserer fast lav pris på Bøger"
              className="bog"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToNoPage}
              desc={"BØGER"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UdvalgteKategorier;
