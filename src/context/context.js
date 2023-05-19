import React, { useState } from "react";
import { useCookies } from "react-cookie";
// import login from "@/pages/api/Auth/login";
// import { register } from "@/pages/api/Auth/register";

const MyContext = React.createContext();

function Provider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [transaction, setTransaction] = useState({});
  const [cookies, setCookies] = useCookies(['user']); 
  const [categories, setCategories] = useState();

  return <MyContext.Provider value={{ userData,
                                    setUserData,
                                    transaction,
                                    setTransaction,
                                  isLogged,
                                setIsLogged,
                              cookies,
                            setCookies,
                            categories,
                            setCategories }}>{children}</MyContext.Provider>;
}

export { Provider, MyContext };
