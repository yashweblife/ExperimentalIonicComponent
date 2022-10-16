import { createContext } from "react";
interface UserDataContext {}

const UserDataContext = createContext<UserDataContext>({});
export const UserDataContextProvider = (props: any) => {
  const context: UserDataContext = {};
  return (
    <UserDataContext.Provider value={context}>
      {props.children}
    </UserDataContext.Provider>
  );
};
