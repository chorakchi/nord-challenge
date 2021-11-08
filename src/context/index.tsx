import { createContext, useContext, useState } from "react";
let token = "";
if (typeof window !== "undefined") {
  token = window.localStorage.getItem("token");
}

const defaultValue = {
  sharedState: { loginData: { token: token }, servers: [] },
  setState: (data: any) => {},
};

const AppContext = createContext(defaultValue);

export const AppWrapper = ({ children }) => {
  const [sharedState, setSharedState] = useState(defaultValue.sharedState);
  const setState = (data) => {
    setSharedState({ ...sharedState, ...data });
  };

  return (
    <AppContext.Provider value={{ sharedState, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
