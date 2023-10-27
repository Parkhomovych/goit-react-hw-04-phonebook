import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 24px;
`;
export const Item = styled.li`
  display: flex;
  column-gap: 24px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 20px;
  border: none;
  border-radius: 4px;
  background-color: aqua;
  cursor: pointer;
`;
