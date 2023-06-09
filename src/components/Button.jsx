/* eslint-disable react/prop-types */
//vores button component, som vi genbruger alle stedr,
//og udfylder de forskellige attributes, med det der
//skal ske for den enkelte knap
function Button({ className, desc, clickAction }) {
  return (
    <button className={className} onClick={clickAction}>
      {desc}
    </button>
  );
}

export default Button;
