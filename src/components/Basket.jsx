import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import vareTilføjet from "../assets/svg/shopping_cart_item_in.svg";
import defaultKurv from "../assets/svg/shopping_cart_new.svg";
function Basket() {
  const cartContext = useContext(CartContext);
  // eslint-disable-next-line no-unused-vars
  const { isInCart, addToCart, emptyCart } = cartContext || {};

  const handleEmptyCart = () => {
    if (emptyCart) {
      emptyCart(); // Kald emptyCart-funktionen fra CartContext
    }
  };

  return (
    <div>
      {isInCart ? (
        <img
          src={vareTilføjet}
          alt="Kurv med vare tilføjet ikon"
          onClick={handleEmptyCart}
        />
      ) : (
        <img src={defaultKurv} alt="Standard kurv uden tilføjede varer" />
      )}
    </div>
  );
}

export default Basket;
