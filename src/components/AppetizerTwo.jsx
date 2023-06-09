//components import
import Button from "./Button";
//react import
import { useNavigate } from "react-router-dom";

function AppetizerTwo() {
  //navigate function, vi kobler på vores cta btn
  const navigate = useNavigate();
  function goToAudio() {
    navigate("../errorpage");
  }
  return (
    <>
      <div className="store-img pladespiller-img"></div>
      <div className="store-txt-wrapper background2">
        <div className="store-txt">
          <h3>
            Del dine øjeblikke og skab minder med vennerne når pladespilleren
            fylder rummet med nostalgiske toner, og atmosfærisk musik.
          </h3>
          <p>
            Her finder du vores store udvalg af pladespillere. Med en
            pladespiller kan du få den autentiske og nostalgiske lyd fra
            musikken hjem i stuen.
          </p>
          <div className="store-btn">
            <Button
              className={"cta-btn"}
              desc={"AUDIO & HIFI"}
              clickAction={goToAudio}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppetizerTwo;
