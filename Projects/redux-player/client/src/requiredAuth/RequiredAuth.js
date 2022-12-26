import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import HomePage from '../pages/Rest/HomePage';

export default function RequiredAuth() {
  const token = useSelector((state) => state.users.token);

  return token ? <HomePage /> : <Navigate to="/login" />;
}
