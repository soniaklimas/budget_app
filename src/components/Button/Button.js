import React from "react";
import { InlineButton, RegularButton } from "./Button.css";

function Button({ type, children, ...props }) {
  // by komponent był tym, co zwraca funkcja w zależności od case switcha, należy funkjcę od razu wywołać = owrapować w nawiasy i wywołać ()
  const Component = (() => {
    switch (type) {
      case "inline":
        return InlineButton;
      case "regular":
        return RegularButton;
      default:
        return RegularButton;
    }
  })();

  return (
    <div>
      <Component {...props}>{children}</Component>
    </div>
  );
}

export default Button;
