"use client";
import { IUser } from "@/types";
import React, { useMemo } from "react";
import Settings from "./settings";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import useCurrentChat from "@/hooks/useCurrentChat";
import { cn } from "@/lib/utils";
interface Props {
  contacts: IUser[];
}
const ChatList: React.FC<Props> = ({ contacts }) => {
  const router = useRouter();
  const { currentChat, setCurrentChat } = useCurrentChat();
  const renderChat = (contact: IUser) => {
    const onChat = () => {
      if (currentChat?._id === contact._id) return;
      setCurrentChat(contact);
      router.push(`/?chat=${contact._id}`);
    };
    return (
      <>
        <div
          className={cn(
            "flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-2",
            currentChat?._id === contact._id && "bg-secondary/50"
          )}
          onClick={onChat}
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar>
                <AvatarImage src={contact.avatar} className="object-cover" />
                <AvatarFallback className="uppercase">
                  {contact.email[0]}
                </AvatarFallback>
              </Avatar>
              <div className="size-3 bg-green-500 absolute bottom-0 right-0 rounded-full !z-50"></div>
            </div>

            <div>
              <h2 className="capitalize line-clamp-1 text-sm">
                {contact.email.split("@")[0]}
              </h2>
              <p className="text-xs text-muted-foreground line-clamp-1">
                No message yet
              </p>
            </div>
          </div>
          <div className="self-end">
            <p className="text-xs text-muted-foreground">
              {new Date().getHours() < 12 ? "AM" : "PM"}{" "}
              {new Date().toLocaleTimeString().slice(0, 5)}
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {/* TopBar */}
      <div className="flex items-center bg-background pl-2 sticky top-0">
        <Settings />
        <div className="m-2 w-full">
          <Input type="text" className="bg-secondary" placeholder="Search" />
        </div>
      </div>

      {/* ChatList */}
      {contacts.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground text-sm">No contacts found</p>
        </div>
      )}

      {useMemo(() => contacts.map((contact) => <div key={contact._id}>{renderChat(contact)}</div>), [contacts])}
    </>
  );
};

export default ChatList;
