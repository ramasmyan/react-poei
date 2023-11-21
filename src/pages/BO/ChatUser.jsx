import React, { useState, useEffect } from 'react';
import SideNavBar from '../../Components/BO/SideNavBar/SideNavBar';
import io from 'socket.io-client';

const ChatApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:3001'); 

  useEffect(() => {

    // Gérer la réception des messages du serveur
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Déconnecter le socket lors du démontage du composant
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Envoyer le message au serveur
    socket.emit('chat message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessage(''); 
  };

  return (
    <div>
      <SideNavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="height-100 bg-light bo-page" onClick={() => setIsSidebarOpen(false)}>
        <div className="d-flex justify-content-between mb-3">
            <h4>Dashboard</h4>
        </div>
        <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
      <button onClick={sendMessage}>Envoyer</button>
          </div>
      </div>
  );
};

export default ChatApp;
