export const Filter = props => {
  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={props.filter} type="text" />
    </>
  );
};
