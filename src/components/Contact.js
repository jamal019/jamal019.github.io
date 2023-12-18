import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Kontaktieren Sie uns</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">E-Mail:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Nachricht:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}

export default Contact;
