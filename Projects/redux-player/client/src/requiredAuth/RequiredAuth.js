import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function RequiredAuth() {
  const token = useSelector((state) => state.users.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
}
