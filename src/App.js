import React, { useState } from 'react';
import { Navbar, Contacts } from './components/chapter01';

function App() {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <Navbar />
      <Contacts contacts={contacts} loading={loading} />
    </>
  );
}

export default App;
