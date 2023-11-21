import React, { useState, useEffect } from 'react';
import SideNavBar from '../../Components/BO/SideNavBar/SideNavBar';
import io from 'socket.io-client';
import ChatMsgs from '../../Components/ChatMsgs/ChatMsgs';

const ChatApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div>
      <SideNavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="height-100 bg-light bo-page" onClick={() => setIsSidebarOpen(false)}>
        <div className="d-flex justify-content-between mb-3">
            <h4>Chat Live</h4>
        </div>
          <ChatMsgs />
        </div>
      </div>
  );
};

export default ChatApp;
