import simuleringBtn from "../assets/svg/simulerings_knap_1.svg";
function NextPageSimulationBtn() {
  const handleClick = () => {
    alert("Denne knap er kun en illustrering og har ingen effekt.");
  };
  return (
    <>
      <div className="next-page-btn-box">
        <img
          src={simuleringBtn}
          alt="Et billede der illustrerer 'gå til næste side'"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default NextPageSimulationBtn;
