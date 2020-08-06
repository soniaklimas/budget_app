import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const List = styled.ul`
  display: flex;
`;
