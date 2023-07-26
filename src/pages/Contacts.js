import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import { showInfoMessage } from 'components/Notification';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Phonebook</title>
      </Helmet>
          <Form />
          <h2>Contacts</h2>
           <Filter />
      {isLoading && !error && showInfoMessage(`Your request is in progress...`)}
      <ContactList />
    </HelmetProvider>
  );
};
