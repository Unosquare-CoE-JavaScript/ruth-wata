import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import { Navigate, Outlet } from 'react-router-dom';

export default function RequiredAuth() {
  const { token } = useContext(AuthContext);

  return token ? <Outlet /> : <Navigate to="/login" />;
}
