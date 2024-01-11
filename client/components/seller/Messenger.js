"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Messenger = ({ users, socket }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showList, setShowList] = useState(false);

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingIndicator, setTypingIndicator] = useState(''); // Initialize typing indicator

  useEffect(() => {
    if (socket) {
      socket.on('chat message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
        setIsTyping(false);
      });
    }
  }, [socket]);

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        text: messageInput,
        senderId: selectedUser.id,
      };
      socket.emit('chat message', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageInput('');
      setIsTyping(false);
    }
  };

  const handleTyping = () => {
    if (messageInput) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 3000); // Adjust the timeout duration as needed
    } else {
      setIsTyping(false);
    }
  };

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Function to update the typing indicator with dots
    function updateTypingIndicator() {
      let dots = typingIndicator;
      if (dots === '...') {
        dots = '';
      } else {
        dots += '.';
      }
      setTypingIndicator(dots);
    }

    // Start the typing indicator animation
    const typingInterval = setInterval(updateTypingIndicator, 1000);

    // Clean up the interval on unmount
    return () => {
      clearInterval(typingInterval);
    };
  }, [typingIndicator]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className={`md:w-1/4 md:block md:border-r ${showList ? 'block fixed inset-0 bg-white z-50 w-60' : 'hidden'}`}
      >
        <div className='md:hidden block'>
          <div className='flex items-center justify-between p-2 border-b w-full'>
            <h1 className='text-m font-semibold'>Seller data</h1>
            <button
              onClick={() => setShowList(!showList)}
            >
                <svg  className='text-center inline text-black' stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
            </button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search users"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border outline-0"
        />
        <ul>
          {filteredUsers.map((user, index) => (
            <li
              key={index}
              onClick={() => setSelectedUser(user)}
              className={`cursor-pointer p-2 flex items-center ${
                selectedUser === user ? 'bg-blue-50' : ''
              }`}
            >
              <div className='relative'>
                <Image
                  width={70}
                  height={70}
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full mr-2 border-4"
                />
                {user.status === 'Online' && (
                  <div className='absolute right-2.5 top-8'>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                )}
              </div>
              

              <div className='flex flex-col'>
                <b>{user.name}</b>
                <span className='text-xs'>
                  {isTyping ? `${typingIndicator}` : messages.length > 0 ? `${messages[messages.length - 1].text}` : ''}
                </span>
              </div>
              
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-3/4">
        {selectedUser ? (
          <div className='flex items-start flex-col md:flex-row w-full'>
            <div className='w-full bg-white'>
              <div className="flex w-full items-center justify-between p-2 border-b">
                <div className="flex items-center">
                  <div className='relative'>
                    <Image
                      width={70}
                      height={70}
                      src={selectedUser.avatar}
                      alt={selectedUser.name}
                      className="w-12 h-12 rounded-full mr-2 border-4"
                    />
                    {selectedUser.status === 'Online' && (
                      <div className='absolute right-2.5 top-8'>
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <b>{selectedUser.name}</b>
                    <p>{selectedUser.status}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <button
                    onClick={() => setShowList(!showList)}
                    className="py-1 px-4 bg-y text-white font-semibold rounded-md mr-2 block md:hidden"
                  >
                      User
                  </button>
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="py-1 px-4 bg-y text-white font-semibold rounded-md"
                  >
                      Info
                  </button>
                </div>
                
              </div>
              <div className="overflow-auto h-72 relative bg-white flex flex-col px-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 flex items-start ${
                      message.senderId === selectedUser.id ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.senderId !== selectedUser.id ? (
                      <Image
                        width={33}
                        height={33}
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                    ) : null}
                    <span className={` px-3 py-1 leading-6 max-w-xs text-black
                      ${
                        message.senderId === selectedUser.id ? 'bg-blue-100  rounded-br-none rounded-lg' : 'bg-blue-500 text-white rounded-tl-none rounded-lg'
                      }`}
                    >
                      {message.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <textarea
                  value={messageInput}
                  onChange={(e) => {
                    setMessageInput(e.target.value);
                    handleTyping();
                  }}
                  placeholder="Type a message..."
                  className="w-full p-2 border outline-0"
                  rows="1" // Set the number of rows to allow multiple lines
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Send
                </button>
              </div>
            </div>
            {showInfo && (
                <div className="md:w-[300px] bg-white md:ml-4 fixed md:relative right-0 top-0 bottom-0 z-50">
                  <div className='flex items-center justify-between p-2 border-b w-full'>
                    <h1 className='text-m font-semibold'>Seller data</h1>
                    <button
                      onClick={() => setShowInfo(!showInfo)}
                    >
                        <svg  className='text-center inline text-black' stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
                    </button>
                  </div>
                  <div className='w-full p-2 space-y-2 block'>
                    <div className='flex items-center justify-between'>
                      <b>Name:</b>
                      <p>{selectedUser.name}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <b>address</b>
                      <p>{selectedUser.address}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <b>City:</b>
                      <p>{selectedUser.city}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <b>Country:</b>
                      <p>{selectedUser.country}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <b>Position:</b>
                      <p>{selectedUser.position}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <b>Phone:</b>
                      <p>{selectedUser.phone}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <b>Email:</b>
                      <p>{selectedUser.email}</p>
                    </div>
                  </div>
                </div>
            )}
          </div>
        ) : (
          <p>Select a user to start messaging</p>
        )}

      </div>
    </div>
  );
};

export default Messenger;
