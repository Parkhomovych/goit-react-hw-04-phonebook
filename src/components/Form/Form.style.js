import { styled } from 'styled-components';

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  border: solid 1px beige;
`;
export const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 24px;
  border: none;
  outline: 1px solid beige;
  border-radius: 4px;
  color: cadetblue;
  background-color: aliceblue;
  cursor: pointer;
`;
