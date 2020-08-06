import React from "react";
import styled from "styled-components";

import { Wrapper } from "components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

const List = styled.ul`
  display: flex;
`;

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
