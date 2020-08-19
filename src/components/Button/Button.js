import React from "react";
import { Link } from "react-router-dom";
import { InlineButton, RegularButton } from "./Button.css";

function Button({ variant, children, ...props }) {
  //nie może być 'type' bo jest zarezerwowany przez html
  // wyciągam "to" z ...props
  const { to } = props;
  // by komponent był tym, co zwraca funkcja w zależności od case switcha, należy funkjcę od razu wywołać = owrapować w nawiasy i wywołać ()
  const Component = (() => {
    switch (variant) {
      case "inline":
        return InlineButton;
      case "regular":
        return RegularButton;
      default:
        return RegularButton;
    }
  })();

  return to ? (
    <Link {...props}>
      <Component {...props}>{children}</Component>
    </Link>
  ) : (
    <Component {...props}>{children}</Component>
  );
}

export default Button;
