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

    if (wallet === false) {
      document.querySelector("body").style.overflow = "hidden";
    }
  };

  const handleClose = () => {
    setWallet(false);

    if (wallet === true) {
      document.querySelector("body").style.overflow = "scroll";
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleConnect,
        wallet,
        handleClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
