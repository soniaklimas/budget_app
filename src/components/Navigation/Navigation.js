import React from "react";

import { Wrapper } from "components";
import { Container, List } from "./Navigation.css";

function Navigation({ items }) {
  return (
    <Container>
      <Wrapper>
        <List>
          {items.map((item) => (
            <li>
              <a>{item.content}</a>
            </li>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
}

export default Navigation;
