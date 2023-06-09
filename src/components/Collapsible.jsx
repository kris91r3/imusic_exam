//react imports
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

function Collapsible(props) {
  //"props" betyder at funktionen modtager noget, i dette tilfælde
  //indholdet til de forskellige collapsibles, det er blevet sendt fra vinyl single siden

  //herunder har vi et state der styrer om indholdet er vist eller skjult
  const [open, setOpen] = useState(false);
  //herunder har vi opsat en useRef, som minder om getElementByID
  //vi bruger den til at tracke den enkelte boks med contents højde, så
  //stylingen tilpasser sig derefter
  const contentRef = useRef();
  //funktionen der styrer åbningen og lukningen
  const toggle = () => {
    setOpen(!open);
  };
  //vores return statements med conditions der tjekker efter højden
  return (
    <>
      <div className="collapsible-top">
        <button onClick={toggle}>
          {props.label}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15"
            viewBox="0 96 960 960"
            width="15"
          >
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </button>
      </div>
      <div
        className="content-parent"
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content" ref={contentRef}>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Collapsible;
