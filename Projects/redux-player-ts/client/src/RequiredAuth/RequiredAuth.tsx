import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import HomePage from '../components/HomePage';
import { useAppSelector } from '../app/hooks';

export default function RequiredAuth() {
  const token = useAppSelector((state) => state.users.token);

  return token ? <HomePage /> : <Navigate to="/login" />;
}
