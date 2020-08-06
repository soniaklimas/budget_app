import styled from "styled-components";
// import {Wrapper} from "components"; // nie działa ten import
import Wrapper from "../Wrapper"; // współdielenie komponentu Wrapper - modyfikuję go i używam gdzie indziej

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
`;
