import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './FilterContacts/FilterContacts';
import { ContactsList } from './Contacts/ContactsList';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [firstRender, setfirstRender] = useState(true);
  useEffect(() => {
    const locStCont = localStorage.getItem('contacts');
    if (locStCont) {
      setContacts(JSON.parse(locStCont));
    }
  }, []);

  useEffect(() => {
    if (firstRender) {
      setfirstRender(false);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const AddContacts = evt => {
    evt.preventDefault();

    const { name, number } = evt.target.elements;
    if (
      contacts.some(
        item => item.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      alert(`NO😡! This contact has already been added`);
      return;
    }
    setContacts([
      ...contacts,
      ...[{ id: nanoid(10), name: name.value, number: number.value }],
    ]);

    evt.target.reset();
  };

  const filterContacts = evt => {
    setFilter(evt.target.value.trim());
  };
  const deleteContacts = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Phonebook</h1>
      <Form handlerForm={AddContacts} />
      <h2>Contacts</h2>
      <Filter filter={filterContacts} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteCont={deleteContacts}
      />
    </div>
  );
};
