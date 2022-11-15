import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const contextProvider = ({ children }) => {
  const [wallet, setWallet] = useState(false);
  const [connect, handleConnect] = useState(false);
};
