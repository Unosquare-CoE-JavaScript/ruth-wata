import { useRef, createContext, useContext } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import AuthContext from '../../store/auth-context';

export default function IdleTimerContainer() {
  const idleTimerRef = useRef(null);
  const ctx = useContext(AuthContext);

  const onIdle = () => {
    ctx.logout();
    console.log('user is Idle');
  };

  const idleTimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    timeout: 5 * 1000,
    onIdle: onIdle,
  });

  return <div idletimer={idleTimer}></div>;
}
