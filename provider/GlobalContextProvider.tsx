'use client'

import { createContext, useState } from "react";
import { AppState } from "@/interfaces/AppState";
import User from "@/interfaces/User";

export const globalStateContext = createContext({} as AppState)

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userLogged, setUserLogged] = useState<User | null>(null);

  const globalState = {
    userLogged,
    setUserLogged,
  };
  
  return (
    <globalStateContext.Provider value={globalState}>
      {children}
    </globalStateContext.Provider>
  );
}