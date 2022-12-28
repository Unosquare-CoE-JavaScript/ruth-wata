import { createContext, useState, useCallback } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('token');
    setToken(null);
  }, []);

  const loginHandler = (token) => {
    localStorage.setItem('token', token);

    setToken(token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
