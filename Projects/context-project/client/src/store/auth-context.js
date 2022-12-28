import { createContext, useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime, active, setActive) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  function onActivity() {
    console.log(active);
    //since the mouse is moving, we turn off our event hooks for 1 second
    const clearTimer = () => {
      clearTimeout(logoutTimer);
      setActive(true);
    };
    document.addEventListener('mousemove', clearTimer);
    document.addEventListener('keydown', clearTimer);
    document.addEventListener('touchstart', clearTimer);
  }

  onActivity();
  let remainDuration = active
    ? adjExpirationTime
    : adjExpirationTime - currentTime;
  return remainDuration;
};

const retrieveStoredToken = (active, setActive) => {
  const storedToken = localStorage.getItem('token');
  const sotredExpirationDate = localStorage.getItem('expirationTime');

  const remianingTime = calculateRemainingTime(
    sotredExpirationDate,
    active,
    setActive
  );

  if (remianingTime <= 0) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remianingTime,
  };
};

export const AuthContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const tokenData = retrieveStoredToken(active, setActive);

  let initialToken;

  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    setToken(null);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    setToken(token);

    const remianingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remianingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

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
