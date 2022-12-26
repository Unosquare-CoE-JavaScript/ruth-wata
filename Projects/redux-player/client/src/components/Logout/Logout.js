import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store/usersSlice';

export default function Logout() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state);
  // console.log(user);
  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    console.log(user, 'what');
    dispatch(usersActions.isLoggedOut());
  };

  return <button onClick={handleLogoutClick}> Logout</button>;
}
