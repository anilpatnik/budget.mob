import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { ILoading, IUser, Loading, User } from "../models";

type ContextProps = {
  process: ILoading;
  user: IUser;
  setAuth: Dispatch<SetStateAction<IUser>>;
  setProcess: Dispatch<SetStateAction<ILoading>>;
};
const StoreContext = createContext({} as ContextProps);
const StoreProvider = ({ children }: any) => {
  const [process, setProcess] = useState({ ...Loading });
  const [user, setAuth] = useState({ ...User });
  return (
    <StoreContext.Provider
      value={{
        process,
        user,
        setAuth,
        setProcess
      }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);
export { StoreProvider, useStore };
