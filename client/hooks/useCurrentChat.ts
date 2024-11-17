import { IUser } from "@/types";
import { useState } from "react";

const useCurrentChat = () => {
  const [currentChat, setCurrentChat] = useState<IUser | null>(null);
  return { currentChat, setCurrentChat };
};

export default useCurrentChat;
