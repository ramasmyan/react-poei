import React, { useState, useEffect, useRef } from 'react';
import './ChatMsgs.scss';
import io from 'socket.io-client';
import fetchMessagesFromServer from '../../Features/chat/messageChat';

const ChatMsgs = () => {
  const socket = io('http://62.72.18.39:3001');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const messagesRef = useRef(null);


  useEffect(() => {
    fetchMessagesFromServer().then((messages) => {
      setMessages(messages);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Faites défiler vers le bas automatiquement lorsque les messages changent
    if (messagesRef.current) {
       messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
 }, [messages]);

  socket.on('chat message', () => {
    fetchMessagesFromServer().then((messages) => {
      setMessages(messages);
    });
  });

  const sendMessage = () => {
    let id = '655d0dfd95c9823ea4946bc4';

    if(user) {
      id = user.id;
    }
    // Envoyer le message au serveur
    socket.emit('chat message', { message, userId: id });
    setMessages(messages);
    setMessage('');
  };

  return (
    <main>
      <section>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="chat" id="chat1">
                <div className="chat-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0">
                  <i className="fas fa-angle-left"></i>
                  <p className="mb-0 fw-bold">Live chat</p>
                  <i className="fas fa-times"></i>
                </div>

                <div className="chat-body">
                  <div ref={messagesRef} className="d-flex flex-row justify-content-start mb-4 msg">
                    <div>
                      {/* Affichez les messages existants */}
                      {messages ? messages.map((msg, index) => (
                        <div
                          className="p-3 ms-3 small mb-0"
                          key={index}
                        >
                          <p>{msg.message}</p>
                        </div>
                      )): null}
                    </div>
                  </div>

                  <div className="form-outline">
                    <textarea
                      className="form-control text"
                      id="textAreaExample"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={sendMessage}
                    >
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

