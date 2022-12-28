import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

export default function Logout() {
  const authCtx = useContext(AuthContext);

  // console.log(user);
  const handleLogoutClick = () => {
    authCtx.logout();
  };

  return <button onClick={handleLogoutClick}> Logout</button>;
}
