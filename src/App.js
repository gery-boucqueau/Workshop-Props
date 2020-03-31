import React from 'react';
import './App.css';
import Avatar from './components/Avatar'
import {bart, homer, marge} from './character'

function App() {
  return (
    <div>
      <Avatar {...bart} />
      <Avatar {...homer} />
      <Avatar {...marge} />
    </div>
  );
}

// <Avatar image={bart.image} firstName={bart.firstName} lastName={bart.lastName} />

export default App;
