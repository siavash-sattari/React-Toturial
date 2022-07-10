import React, { useState } from 'react';

import Navbar from './components/chapter01/Navbar';
import Contacts from './components/chapter01/contact/Contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <Navbar />
      <Contacts contacts={contacts} />
    </>
  );
}

export default App;
