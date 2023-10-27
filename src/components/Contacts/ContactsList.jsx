import { Button, Item, List } from './ContactsList.style';

export const ContactsList = props => {
  const { contacts, filter, deleteCont } = props;
  return (
    <List>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button onClick={() => deleteCont(id)} type="button">
              Delete
            </Button>
          </Item>
        ))}
    </List>
  );
};
