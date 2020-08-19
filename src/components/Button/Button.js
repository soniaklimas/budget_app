import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { InlineButton, RegularButton } from "./Button.css";

function Button({ variant, children, ...props }) {
  //nie może być 'type' bo jest zarezerwowany przez html, stąd 'variant'
  // wyciągam "to" z ...props
  const { to } = props;

  // useMemo - jako argument funkcja, której rezultat chcemy przypisać do zmiennej (Component), [] - kiedy funkcja wywołana ponownie, []=kiedy komponent renderuje się po raz pierwszy, ma wywołać tę funkcję i już więcej jej nie wywoływać z
  // by komponent był tym, co zwraca funkcja w zależności od case switcha, należy funkjcę od razu wywołać = owrapować w nawiasy i wywołać ()
  const Component = useMemo(() => {
    switch (variant) {
      case "inline":
        return InlineButton;
      case "regular":
        return RegularButton;
      default:
        return RegularButton;
    }
  }, [variant]);

  const content = useMemo(() => <Component {...props}>{children}</Component>, [
    props,
    children,
  ]);

  return to ? <Link {...props}>{content}</Link> : <>{content}</>;
}

Button.propTypes = {
  variant: PropTypes.oneOf(["inline", "regular"]),
};
export default Button;
