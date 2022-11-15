import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const ContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState(false);
  // const [connect, setConnect] = useState(false);

  const handleConnect = () => {
    setWallet(true);
  };

  const handleClose = () => {
    setWallet(false);
  };

  return (
    <AppContext.Provider
      value={{
        handleConnect,
        wallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
