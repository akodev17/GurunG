import React, { Fragment } from "react";
import { FaTelegram } from "react-icons/fa";
import StateAuth from "./_components/state";
import Social from "./_components/social";
import { ModeToggle } from "@/components/shared/mode-toggle";
const AuthPage = () => {
  return (
      <div className="container max-w-md w-full h-screen justify-center flex items-center space-y-4 flex-col">
        {/* <FaTelegram size={120} className="text-green-500" /> */}
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-4xl font-bold text-center">GurunG</h1>
          <ModeToggle/>
        </div>
        <StateAuth />
        <Social />
      </div>
  );
};

export default AuthPage;
