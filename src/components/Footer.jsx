//react imports
import { useNavigate } from "react-router-dom";
//logo import
import logoHvid from "../assets/svg/logo_hvid.svg";
//billeder & ikon imports
import trustPilot from "../assets/footer_img/trustpilot.webp";
import rodeKors from "../assets/footer_img/roedekors.webp";
import nemHandel from "../assets/footer_img/nemhandel.webp";
import groenEl from "../assets/footer_img/groenel.webp";
import bogHandel from "../assets/footer_img/boghandel.webp";
// billeder & ikon imports - Betalingslogoer
import ean from "../assets/footer_img/pean.webp";
import klarna from "../assets/footer_img/klarna.webp";
import mobilePay from "../assets/footer_img/pmobilepay.webp";
import bank from "../assets/footer_img/pbank.webp";
import viaBill from "../assets/footer_img/viabill.webp";
import danKort from "../assets/footer_img/pdankort.webp";
import masterCard from "../assets/footer_img/pmastercard.webp";
import visa from "../assets/footer_img/pvisa.webp";
import applePay from "../assets/footer_img/apple-pay.webp";
import gPay from "../assets/footer_img/g-pay.webp";
import dinersClub from "../assets/footer_img/pdinersclub.webp";
import discover from "../assets/footer_img/pdiscover.webp";
import jcb from "../assets/footer_img/jcb.webp";
function Footer() {
  //nedestående navigate bruger vi til at sende
  //brugeren til forsiden, funktionen har vi tilkoblet logoet
  const navigate = useNavigate();
  function goToHome() {
    navigate("./");
  }
  return (
    <>
      <div className="footer-wrapper">
        <footer>
          <div className="row-one">
            <div className="information">
              <p className="heading">Information</p>
              <p>Faq</p>
              <p>Handelsbetingelser</p>
              <p>Cookie- & privatlivspolitik</p>
              <p>Om os</p>
              <p>Kontakt</p>
              <p>Butikken</p>
            </div>
            <div className="some">
              <p>Sociale medier</p>
              <div className="some-ikoner">
                <a
                  href="https://www.instagram.com/imusicdk/?hl=da"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Gå til imusics instagram"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6247 7.36328C29.2859 7.36328 28.2819 8.36737 28.2819 9.70615C28.2819 11.0449 29.2859 12.049 30.6247 12.049C31.9635 12.049 32.9676 11.0449 32.9676 9.70615C32.9676 8.36737 31.9635 7.36328 30.6247 7.36328Z"
                      fill="#FDFDFD"
                    />
                    <path
                      d="M20.0817 10.3755C14.5592 10.3755 10.2082 14.8939 10.2082 20.249C10.2082 25.6042 14.7266 30.1226 20.0817 30.1226C25.4369 30.1226 29.9553 25.6042 29.9553 20.249C29.9553 14.8939 25.6042 10.3755 20.0817 10.3755ZM20.0817 26.6082C16.5674 26.6082 13.7225 23.7633 13.7225 20.249C13.7225 16.7347 16.5674 13.8898 20.0817 13.8898C23.596 13.8898 26.4409 16.7347 26.4409 20.249C26.4409 23.7633 23.596 26.6082 20.0817 26.6082Z"
                      fill="#FDFDFD"
                    />
                    <path
                      d="M28.1145 0H12.2164C5.35514 0 0 5.35514 0 12.0491V27.9471C0 34.641 5.35514 39.9962 12.0491 39.9962H27.9471C34.641 39.9962 39.9962 34.641 39.9962 27.9471V12.0491C40.1635 5.35514 34.8084 0 28.1145 0ZM36.3145 28.1145C36.3145 32.6329 32.6329 36.4819 27.9471 36.4819H12.0491C7.53066 36.4819 3.68166 32.8002 3.68166 28.1145V12.2164C3.68166 7.69801 7.36331 3.84901 12.0491 3.84901H27.9471C32.4655 3.84901 36.3145 7.53066 36.3145 12.2164V28.1145Z"
                      fill="#FDFDFD"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/imusic.dk/?locale=da_DK"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Gå til imusics Facebook"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 20.0501C40 8.98246 31.04 0 20 0C8.96 0 0 8.98246 0 20.0501C0 29.7544 6.88 37.8346 16 39.6992V26.0652H12V20.0501H16V15.0376C16 11.1679 19.14 8.02005 23 8.02005H28V14.0351H24C22.9 14.0351 22 14.9373 22 16.0401V20.0501H28V26.0652H22V40C32.1 38.9975 40 30.4561 40 20.0501Z"
                      fill="#FDFDFD"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@imusic.dk"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Gå til imusics TikTok"
                >
                  <svg
                    width="35"
                    height="40"
                    viewBox="0 0 35 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2681 0.033349C20.4533 1.26719e-07 22.6223 0.0173414 24.7901 0C24.8622 2.70926 25.9621 5.14774 27.712 6.95391L27.7094 6.95124C29.5928 8.6467 32.0435 9.74588 34.7452 9.93264L34.7826 9.9353V16.6531C32.2304 16.5891 29.8304 16.0008 27.6667 14.9897L27.7761 15.035C26.7296 14.5321 25.8446 14.0159 25.0037 13.4396L25.0731 13.485C25.0571 18.3526 25.0891 23.2202 25.0397 28.0704C24.9022 30.5423 24.08 32.7966 22.7612 34.6789L22.7879 34.6375C20.5827 37.7936 17.0107 39.8653 12.9489 39.988H12.9302C12.766 39.996 12.5724 40 12.3776 40C10.0683 40 7.9099 39.357 6.07051 38.2405L6.1239 38.2712C2.77616 36.2583 0.466911 32.814 0.0397668 28.8081L0.0344276 28.7534C0.00105692 27.9197 -0.0149611 27.086 0.0184095 26.2696C0.672474 19.8946 6.01712 14.963 12.5137 14.963C13.2439 14.963 13.9593 15.0257 14.6548 15.1444L14.58 15.1337C14.6134 17.6002 14.5133 20.068 14.5133 22.5345C13.9487 22.3304 13.2973 22.2117 12.6178 22.2117C10.1244 22.2117 8.00334 23.8044 7.21846 26.0281L7.20645 26.0682C7.02891 26.6378 6.92613 27.2927 6.92613 27.9704C6.92613 28.2452 6.94349 28.5173 6.97552 28.7841L6.97285 28.7521C7.41601 31.4814 9.7573 33.541 12.5805 33.541C12.6619 33.541 12.742 33.5397 12.8221 33.5356H12.81C14.7629 33.477 16.4581 32.4271 17.4165 30.8757L17.4299 30.8517C17.7863 30.3555 18.0305 29.7552 18.112 29.1029L18.1133 29.0842C18.2802 26.1002 18.2134 23.1335 18.2294 20.1494C18.2455 13.4316 18.2134 6.72981 18.2628 0.0293471L18.2681 0.033349Z"
                      fill="#FDFDFD"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="nyhedsbrev">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Nyhedsbrev</label>
                  <input
                    type="text"
                    name="email"
                    className="footer-input"
                    id="email"
                    placeholder="Din e-mail"
                  ></input>
                  <button type="submit">TILMELD</button>
                </div>
              </form>
            </div>
            <div className="logo" onClick={goToHome}>
              <img
                src={logoHvid}
                alt="imusic logo - hvid farve"
                className="hvidt-logo"
              ></img>
            </div>
          </div>
          <div className="row-two">
            <div className="ikoner">
              <div className="group1">
                <div className="group-one">
                  <img src={trustPilot} alt="imusic trustpilot udsnit" />
                  <img src={rodeKors} alt="Roede kors erhvervsklub logo" />
                </div>
                <div className="group-two">
                  <img src={nemHandel} alt="Nethandel e-handel standard logo" />
                  <img src={groenEl} alt="Grøn El logo" />
                  <img
                    src={bogHandel}
                    alt="En del af danske Boghandlere logo"
                    className="boghandel"
                  />
                </div>
              </div>
              <div className="group2">
                <div className="group-three">
                  <img src={ean} alt="EAN betalingsstempel" />
                  <img src={klarna} alt="Klarna betalingsstempel" />
                  <img src={mobilePay} alt="Mobilepay betalingsstempel" />
                  <img src={bank} alt="Bank betalingsstempel" />
                </div>
                <div className="group-four">
                  <img src={viaBill} alt="Viabill betalingsstempel" />
                  <img src={danKort} alt="Dankort betalingsstempel" />
                  <img src={masterCard} alt="Mastercard betalingsstempel" />
                  <img src={visa} alt="Visa betalingsstempel" />
                </div>
                <div className="group-five">
                  <img src={applePay} alt="Apple Pay betalingsstempel" />
                  <img src={gPay} alt="Google Pay betalingsstempel" />
                  <img src={dinersClub} alt="Diners Club betalingsstempel" />
                  <img src={discover} alt="Discover betalingsstempel" />
                  <img src={jcb} alt="Jcb betalingsstempel" />
                </div>
              </div>
            </div>
          </div>
          <div className="row-three">
            <div className="copyright1">
              <p> Copyright © 2023 | IMUSIC A/S | Tlf: 86 13 73 43 </p>
            </div>
            <div className="copyright2">
              <p>CVR 42 19 45 65</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
