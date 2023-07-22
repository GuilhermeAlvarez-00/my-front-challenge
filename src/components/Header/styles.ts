import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: min(100%, 80rem);
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  gap: 1.5rem;
`;
