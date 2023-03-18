import React, { useState } from 'react';

function Registration() {
  // Define the initial state for the form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define a function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here, e.g. send data to server
    console.log(`Submitted form data: username=${username}, email=${email}, password=${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
