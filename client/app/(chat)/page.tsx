import { Loader2 } from "lucide-react";
import React from "react";
import ChatList from "./_components/chat-list";

const HomePage = () => {
  return (
    // <div>HomePage</div>
    // Sidebar
    <>
      <div className="w-80 border-r h-screen fixed inset-0 z-10">
        {/* loading */}
        {/* <div className="w-full h-95 flex justify-center items-center">
        <Loader2 className='animate-spin' size={50}/>
      </div> */}

        {/* ChatList */}
        <ChatList contacts={contacts} />
      </div>
    </>
  );
};

const contacts = [
  {
    _id: "1",
    email: "johndoe@gmail.com",
  },
  {
    _id: "2",
    email: "aohndoe@gmail.com",
  },
  {
   _id: "3",
    email: "johndoe@gmail.com",
  },
];

export default HomePage;
