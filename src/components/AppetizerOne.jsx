//components import
import Button from "./Button";
//react import
import { useNavigate } from "react-router-dom";
//asset import

function AppetizerOne() {
  //navigate function, vi kobler på vores cta btn
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("../produkter/vinyler");
  }
  return (
    <>
      <div className="store-img butik-img"></div>
      <div className="store-txt-wrapper background1">
        <div className="store-txt">
          <h3>
            Med over 300.000 vinyler i vores udvalg har vi helt sikkert noget,
            der vil begejstre din musiksmag
          </h3>
          <p>
            Se vores brede udvalg af vinyler, her er du sikker på at kunne finde
            både nye og populære titler, sjældne udgivelser, og nichegenrer til
            dig der samler.
          </p>

          <div className="store-btn">
            <Button
              className={"cta-btn"}
              desc={"VINYLER"}
              clickAction={goToVinyler}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppetizerOne;
