//react imports
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
//component import
import Button from "../components/Button";

function GiftCardForm() {
  // const navigate = useNavigate();
  // function goToGodePriser() {
  //   navigate("../godepriser");
  // }

  //sørger for at scrolle vinduet til top når siden indlæses
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //states der håndterer vores form
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amountError, setAmountError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    //form control og error messages
    if (!amount) {
      setAmountError("Gavekortbeløb er påkrævet");
      isValid = false;
    } else {
      setAmountError("");
    }

    if (!name) {
      setNameError("Navn er påkrævet");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("E-mail er påkrævet");
      isValid = false;
    } else {
      setEmailError("");
    }
    //console log af form data
    if (isValid) {
      console.log(
        "Gavekort beløb:",
        amount,
        "Købers navn:",
        name,
        "Købers email:",
        email
      );

      setAmount("");
      setName("");
      setEmail("");

      setIsSubmitted(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Køb et gavekort til Imusic og glæd dine nærmeste.</title>
        <meta
          name="description"
          content="Giv et gavekort til vores kæmpe udvalg af musik i fysisk format og tilbehør. Du finder alt lige fra nyt til gammelt, billige priser og gode tilbud. "
        />
        <meta name="keywords" content="gavekort, imusic, musik, billige" />
      </Helmet>

      <div className="gift-card-container">
        {isSubmitted ? (
          <div className="feedback-message">
            <p>
              Din bestilling er modtaget! Der er nu sendt en e-mail med
              bekræftelse på din ordre, samt et link til dit Gavekort. <br></br>
              <br></br> Tak for dit køb hos imusic!
            </p>
            <div className="gift-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fc612d"
                viewBox="0 -960 960 960"
                className="giftcard"
              >
                <path d="M140-277v97h680v-97H140Zm0-443h125q-5-9-8-22.5t-3-24.5q0-47.083 33-80.042Q320-880 366-880q30.741 0 56.87 15.5Q449-849 464-825l16.5 26 16.5-26q16-25 41.015-40t53.879-15Q640-880 673-847.5q33 32.5 33 80.861Q706-756 703.5-745t-7.5 25h124q24 0 42 18t18 42v480q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18Zm0 336h680v-276H571l100 139-48 36-143-198-143 198-48-36 100-139H140v276Zm227-330q22 0 37.5-15.5T420-767q0-22-15.5-37.5T367-820q-22 0-37.5 15.5T314-767q0 22 15.5 37.5T367-714Zm225 0q22.95 0 38.475-15.5Q646-745 646-767t-15.525-37.5Q614.95-820 592-820q-21 0-36.5 15.5T540-767q0 22 15.5 37.5T592-714Z" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="gift-card-form">
            <div className="gift-txt">
              <h1>Køb et gavekort til imusic og glæd den du holder af</h1>
              <p>
                Med et gavekort rammer du bredt, og giver friheden til selv at
                kunne vælge. Her hos imusic finder du et kæmpe udvalg af
                produkter,{" "}
                <a className="gift-link" href="../godepriser">
                  billige priser og tilbud
                </a>{" "}
                . Med over 7.000.000 varer i sortimentet er det ingen sag at
                finde det, du lige står og mangler. Du kan finde alt inden for
                musik i fysik format. Du finder{" "}
                <a className="gift-link" href="../produkter/vinyler">
                  vinyler
                </a>{" "}
                , cd’er, tilbehør og meget mere. Gavekortet er den perfekte
                løsning, det nemt og bekvemmeligt, alt du skal gøre er at
                udfylde formen, og du får det straks tilsendt til din mail,
                nemmere bliver det ikke.
              </p>
            </div>
            <form className="gavekort-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="amount">Gavekortbeløb i DKK:</label>
                <input
                  type="text"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                {amountError && <p className="error-message">{amountError}</p>}
              </div>
              <div>
                <label htmlFor="name">Navn:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="error-message">{nameError}</p>}
              </div>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>
              <Button
                desc={"BETAL"}
                className={"cta-btn"}
                clickAction={handleSubmit}
                type="submit"
              ></Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default GiftCardForm;
