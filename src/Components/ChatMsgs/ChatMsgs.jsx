import React, { useState, useEffect} from 'react';
import './ChatMsgs.scss';
import io from 'socket.io-client';




const ChatMsgs = () => {
  
  const socket = io('http://localhost:3001');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(socket)

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
    <main>
    <section >
  <div className="container py-5">

    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="chat" id="chat1" >
          <div className="chat-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0">
            <i className="fas fa-angle-left"></i>
            <p className="mb-0 fw-bold">Live chat</p>
            <i className="fas fa-times"></i>
        </div>

        <div className="chat-body">

            <div className="d-flex flex-row justify-content-start mb-4 msg">              
              <div >
                 {/* Affichez les messages existants */}
                 {messages.map((msg, index) => (
                <div className="p-3 ms-3 small mb-0" key={index}>{msg}</div>
                 ))}
              </div>
            </div>
            
            <div className="form-outline">
            <textarea className="form-control text"
                      id="textAreaExample"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button className="btn btn-primary" type="button" onClick={sendMessage}>
                      Send
                    </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
};

export default ChatMsgs;
