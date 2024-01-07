import React, { useState } from 'react';

const PractitionerProfile = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to update the profile information
  };

  return (
    <div>
      <h1>Practitioner Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PractitionerProfile;
