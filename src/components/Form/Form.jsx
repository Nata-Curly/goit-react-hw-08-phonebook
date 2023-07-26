import { useState } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm, Label, Btn, Input } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { showErrorMessage, showSuccessMessage } from 'components/Notification';
import { addContact } from 'redux/contacts/operations';

const Form = () =>  {
  const [name, stateName] = useState('');
  const [number, stateNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactId = nanoid();
  
  const handlAdd = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name': stateName(value); break;
      case 'number': stateNumber(value); break;
      default: throw new Error('Unknown state');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase().trim())) {
            showErrorMessage(`The contact with name "${name}" is already in your numberbook`);
            reset();
            return;
    };
  
    dispatch(addContact({name, number}));
    showSuccessMessage(`The contact "${name}" is added to your numberbook`);
    reset();
  };
  
 const reset = () => {
   stateName('');
   stateNumber('');
 
  };
    
      return (
        <AddContactForm onSubmit={handleSubmit}>
          <Label htmlFor={contactId}>
            Name <br />
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces"
              placeholder="enter contact's name"
              fullWidth
              aria-describedby="contact's name"
              required value={name} onChange={handlAdd} id={contactId}
            />
          </Label>
          <Label htmlFor="">
            Number <br />
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="number number can contain only numbers, spaces, dashes, parentheses and can start with +"
              placeholder="enter contact's phone number"
              fullWidth
              aria-describedby="phone number"
              required value={number} onChange={handlAdd}
            />
          </Label>
          <Btn type='submit'>Add contact</Btn>
        </AddContactForm>
      );
  };
 
export default Form;

