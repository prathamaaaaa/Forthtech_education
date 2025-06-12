
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { MessageSquare, Search, Users, UserPlus, UserCheck, Video, Mic } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const ChatSystem = () => {
//   // Mock data for active users and conversations
//   const activeUsers = [
//     { id: 1, name: 'Alexandra Kim', avatar: 'https://github.com/shadcn.png', status: 'online', role: 'Robotics Engineer' },
//     { id: 2, name: 'Michael Chen', avatar: 'https://github.com/shadcn.png', status: 'online', role: 'Software Developer' },
//     { id: 3, name: 'Sarah Johnson', avatar: 'https://github.com/shadcn.png', status: 'away', role: 'Electronics Designer' },
//     { id: 4, name: 'David Park', avatar: 'https://github.com/shadcn.png', status: 'offline', role: 'Mechanical Engineer' },
//   ];

//   const recentMessages = [
//     { id: 1, user: 'Alexandra Kim', message: 'Hey! I saw your arduino project. Could you help me with the sensor calibration?', time: '5m ago', unread: true },
//     { id: 2, user: 'Michael Chen', message: 'Check out this code snippet for your robot navigation issue', time: '2h ago', unread: true },
//     { id: 3, user: 'Sarah Johnson', message: 'Thanks for the help with the circuit design!', time: 'Yesterday', unread: false },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div className="md:col-span-1">
//         <Card className="h-full">
//           <CardHeader className="pb-2">
//             <div className="flex items-center justify-between mb-2">
//               <CardTitle className="text-xl flex items-center">
//                 <Users className="mr-2 h-5 w-5 text-forthtech-red" />
//                 Contacts
//               </CardTitle>
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <UserPlus className="h-5 w-5" />
//               </Button>
//             </div>
//             <div className="relative">
//               <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input placeholder="Search contacts..." className="pl-8" />
//             </div>
//           </CardHeader>
//           <CardContent className="h-[calc(100%-120px)] overflow-y-auto">
//             <div className="space-y-2">
//               <h3 className="text-sm font-medium text-muted-foreground mt-2">Online Now</h3>
//               {activeUsers.filter(user => user.status === 'online').map(user => (
//                 <div key={user.id} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer">
//                   <div className="relative">
//                     <Avatar className="h-10 w-10 mr-3">
//                       <AvatarImage src={user.avatar} alt={user.name} />
//                       <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
//                     </Avatar>
//                     <span className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></span>
//                   </div>
//                   <div>
//                     <div className="font-medium">{user.name}</div>
//                     <div className="text-xs text-muted-foreground">{user.role}</div>
//                   </div>
//                 </div>
//               ))}
              
//               <h3 className="text-sm font-medium text-muted-foreground mt-4">All Contacts</h3>
//               {/* {activeUsers.map(user => (
//                 <div key={user.id} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer">
//                   <div className="relative">
//                     <Avatar className="h-10 w-10 mr-3">
//                       <AvatarImage src={user.avatar} alt={user.name} />
//                       <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
//                     </Avatar>
//                     <span className={`absolute bottom-0 right-2 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${
//                       user.status === 'online' ? 'bg-green-500' : 
//                       user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
//                     }`}></span>
//                   </div>
//                   <div>
//                     <div className="font-medium">{user.name}</div>
//                     <div className="text-xs text-muted-foreground">{user.role}</div>
//                   </div>
//                 </div>
//               ))} */}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
      
//       <div className="md:col-span-2">
//         <Card className="h-full flex flex-col">
//           <CardHeader className="pb-2">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <Avatar className="h-10 w-10 mr-3">
//                   <AvatarImage src="https://github.com/shadcn.png" alt="Alexandra Kim" />
//                   <AvatarFallback>AK</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <CardTitle>Alexandra Kim</CardTitle>
//                   <p className="text-xs text-muted-foreground">Online • Robotics Engineer</p>
//                 </div>
//               </div>
//               <div className="flex space-x-1">
//                 <Button variant="ghost" size="icon" className="rounded-full">
//                   <Video className="h-5 w-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="rounded-full">
//                   <Mic className="h-5 w-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="rounded-full">
//                   <UserCheck className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
//             <div className="flex justify-center">
//               <p className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">Today</p>
//             </div>
            
//             {/* Message bubbles */}
//             <div className="flex items-start space-x-2 justify-start">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="Alexandra Kim" />
//                 <AvatarFallback>AK</AvatarFallback>
//               </Avatar>
//               <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
//                 <p className="text-sm">Hi there! I saw your project on autonomous navigation. Very impressive!</p>
//                 <span className="text-xs text-muted-foreground mt-1 block">10:24 AM</span>
//               </div>
//             </div>
            
//             <div className="flex items-start space-x-2 justify-end">
//               <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[80%]">
//                 <p className="text-sm">Thanks! I've been working on improving the obstacle detection algorithm.</p>
//                 <span className="text-xs text-primary-foreground/80 mt-1 block">10:26 AM</span>
//               </div>
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="You" />
//                 <AvatarFallback>YO</AvatarFallback>
//               </Avatar>
//             </div>
            
//             <div className="flex items-start space-x-2 justify-start">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="Alexandra Kim" />
//                 <AvatarFallback>AK</AvatarFallback>
//               </Avatar>
//               <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
//                 <p className="text-sm">Would you mind sharing how you handled the sensor fusion part? I'm having issues with my LIDAR data integration.</p>
//                 <span className="text-xs text-muted-foreground mt-1 block">10:30 AM</span>
//               </div>
//             </div>
            
//             <div className="flex items-start space-x-2 justify-start">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="Alexandra Kim" />
//                 <AvatarFallback>AK</AvatarFallback>
//               </Avatar>
//               <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
//                 <p className="text-sm">I'm specifically struggling with filtering out noise in dynamic environments.</p>
//                 <span className="text-xs text-muted-foreground mt-1 block">10:31 AM</span>
//               </div>
//             </div>
//           </CardContent>
//           <div className="p-4 border-t">
//             <div className="flex space-x-2">
//               <Input placeholder="Type a message..." className="flex-grow" />
//               <Button>
//                 <MessageSquare className="mr-2 h-4 w-4" />
//                 Send
//               </Button>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ChatSystem;



import React, { useEffect, useState } from 'react';
import { db } from "../../../firebase"; // adjust the path based on your folder structure

import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

import axios from 'axios';
import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Avatar, AvatarFallback, AvatarImage
} from '@/components/ui/avatar';
import {
  MessageSquare, Search, Users, UserPlus, UserCheck, Video, Mic
} from 'lucide-react';
import { Button } from '@/components/ui/button';
export const ENV = {
  BASE_URL: import.meta.env.VITE_URL || 'http://localhost:3000'
};

import { useRef } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';


const ChatSystem = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const storedUser = localStorage.getItem('user');
  const currentUser = storedUser ? JSON.parse(storedUser) : null;
  const currentUserEmail = currentUser?.email;
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

const [showEmojiPicker, setShowEmojiPicker] = useState(false);


const formatTimestamp = (timestamp) => {
  try {
    if (!timestamp) return '';
    if (timestamp.toDate) return timestamp.toDate().toLocaleTimeString();
    if (timestamp._seconds) return new Date(timestamp._seconds * 1000).toLocaleTimeString();
    return '';
  } catch (e) {
    return '';
  }
};


const handleKeyDown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    buttonSending(); // your send function
  }
};

const handleEmojiSelect = (emoji) => {
  setText(prev => prev + emoji.native);
};
useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [messages]);
  const handleChange = (e) => {
    setText(e.target.value); // this gets the value of the input field
  };


  console.log('User name:', currentUser?.firstName);
  console.log('User ID:', currentUser?.id);

  // Fetch all users and filter out the logged-in user
  useEffect(() => {
    axios.get(`${ENV.BASE_URL}/api/users`)
      .then((res) => {
        const filteredUsers = res.data.filter(user => user.email !== currentUserEmail);
        setUsers(filteredUsers);
      })
      .catch((err) => console.error('Error fetching users:', err));
  }, [currentUserEmail]);

//  useEffect(() => {
//   if (selectedUser) {
//     axios.get('http://localhost:3000/chat/messages', {
//       params: {
//         senderId: currentUser?.id,
//         receiverId: selectedUser?.id
//       }
//     })
//     .then((res) => {
//       console.log('Messages:', res.data);
//       setMessages(res.data);
//     })
//     .catch((err) => {
//       console.error('Error fetching chat messages:', err);
//     });
//   }
// }, [selectedUser]);




useEffect(() => {
  if (!selectedUser || !currentUser) return;

  const messagesRef = collection(db, 'messages');

  const q = query(
    messagesRef,
    where('participants', 'array-contains', currentUser.id),
    orderBy('timestamp') // Make sure all docs have 'timestamp'
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const fetched = snapshot.docs
      .map(doc => doc.data())
      .filter(msg =>
        (msg.senderId === currentUser.id && msg.receiverId === selectedUser.id) ||
        (msg.senderId === selectedUser.id && msg.receiverId === currentUser.id)
      );

    setMessages(fetched);
  });

  // Cleanup on user switch/unmount
  return () => unsubscribe();
}, [selectedUser?.id, currentUser?.id]); // ✅ Only track IDs
function buttonSending() {
  console.log('Message sending....');
  console.log('sender id', currentUser?.id);
  console.log('receiver id:', selectedUser?.id);
  console.log('message:', text);

  if (!text.trim()) return;

  axios.post(`${ENV.BASE_URL}/chat/send`, {
    senderId: currentUser?.id,
    receiverId: selectedUser?.id,
    message: text
  })
  .then((res) => {
    console.log('Message sent:', res.data);
    setText(''); // Clear input box

    // ✅ Re-fetch messages immediately
    axios.get(`${ENV.BASE_URL}/chat/messages`, {
      params: {
        senderId: currentUser?.id,
        receiverId: selectedUser?.id
      }
    })
    .then((res) => {
      setMessages(res.data);
    })
    .catch((err) => {
      console.error('Error re-fetching messages:', err);
    });
  })
  .catch((err) => {
    console.error('Error sending message:', err);
  });
}

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Contacts Sidebar */}
      <div className="md:col-span-1">
        <Card className="h-[700px]">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-xl flex items-center">
                <Users className="mr-2 h-5 w-5 text-forthtech-red" />
                Contacts
              </CardTitle>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent className="h-[calc(100%-120px)] overflow-y-auto">
            <div className="space-y-2">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="https://github.com/shadcn.png" alt={user.firstName} />
                    <AvatarFallback>{user.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Box */}
      <div className="md:col-span-2">
        {selectedUser ? (
          <Card className="h-[700px] flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="https://github.com/shadcn.png" alt={selectedUser.firstName} />
                    <AvatarFallback>{selectedUser.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{selectedUser.firstName} {selectedUser.lastName}</CardTitle>
                    <p className="text-xs text-muted-foreground">{selectedUser.email}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <UserCheck className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
<CardContent className="flex-grow overflow-y-auto p-4 space-y-4" ref={chatContainerRef}>
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex items-start space-x-2 ${msg.senderId === currentUser.id ? 'justify-end' : 'justify-start'}`}
    >
      {msg.senderId !== currentUser.id && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{selectedUser.firstName[0]}</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`${
          msg.senderId === currentUser.id
            ? 'bg-primary text-primary-foreground rounded-tr-none'
            : 'bg-muted text-foreground rounded-tl-none'
        } p-3 rounded-lg max-w-[80%]`}
      >
        <p className="text-sm">{msg.message}</p>
      <span className="text-xs text-muted-foreground mt-1 block">
  {formatTimestamp(msg.timestamp)}
</span>

      </div>
    </div>
  ))}
  <div ref={messagesEndRef} /> {/* This ensures scroll-to-bottom */}
</CardContent>

<div className="p-4 border-t">
  <div className="relative">
    {showEmojiPicker && (
      <div className="absolute bottom-12 left-0 z-50">
        <Picker data={data} onEmojiSelect={handleEmojiSelect} />
      </div>
    )}
  </div>
  <div className="flex space-x-2 items-end">
    <Button
      type="button"
      variant="ghost"
      onClick={() => setShowEmojiPicker((prev) => !prev)}
    >
      😀
    </Button>
    <textarea
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      rows={1}
      placeholder="Type a message..."
      className="flex-grow resize-none p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
    />
    <Button onClick={buttonSending}>
      <MessageSquare className="mr-2 h-4 w-4" />
      Send
    </Button>
  </div>
</div>

          </Card>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSystem;


