import { MyButton, MyForm } from './Form.style';

export const Form = props => {
  return (
    <MyForm onSubmit={props.handlerForm}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />
      <label htmlFor="number">Number</label>
      <input type="text" name="number" id="number" required />
      <MyButton type="submit">Add contact</MyButton>
    </MyForm>
  );
};
