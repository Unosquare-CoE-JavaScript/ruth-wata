import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../store/usersSlice';
import { useNavigate } from 'react-router-dom';

let loginAttempt = 0;

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const home = '/';

  const [enteredUser, setEnteredUser] = useState({
    email: '',
    password: '',
  });

  const [errMesg, setErrMsg] = useState('');
  //   const users = useSelector((state) => state.users);

  const handlleLoginClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:2121/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredUser.email,
          password: enteredUser.password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        setErrMsg('Incorrect User Name/Password combination');

        throw new Error('Oops something went wrong!');
      }
      const data = await res.json();

      localStorage.setItem('token', data.token);
      dispatch(
        usersActions.addToken({
          payload: localStorage.getItem('token'),
        })
      );
      dispatch(
        usersActions.addUser({
          payload: data.name,
        })
      );
      setErrMsg('Success!');
      navigate(home);
    } catch (err) {
      console.log(err);
      if (loginAttempt === 3) {
        setErrMsg(
          'Your account has been locked. Please contact your Administrator'
        );
      } else if (!enteredUser.email.length && !enteredUser.password.length) {
        setErrMsg('You have not entered a username or password!');
        loginAttempt += 1;
      } else if (!enteredUser.email.length) {
        setErrMsg('You have not entered an email');
        loginAttempt += 1;
      } else if (!enteredUser.password.length) {
        setErrMsg('You have not entered a password!');
        loginAttempt += 1;
      } else {
        setEnteredUser('Incorrect User Name/Password combination');
        loginAttempt += 1;
      }
    }
    setEnteredUser({
      email: '',
      password: '',
    });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email-label"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              value={setEnteredUser.email}
              onChange={(e) =>
                setEnteredUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              id="email-label"
              placeholder={!enteredUser.email ? 'email' : 0}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password-label"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              value={enteredUser.password}
              onChange={(e) =>
                setEnteredUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              id="password-label"
              placeholder={!enteredUser.password ? 'password' : 0}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            to="/resetPassword"
            className="text-xs text-purple-600 hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-6">
            <button
              className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 hover:bg-purple-600 rounded-md  focus:outline-none focus:bg-purple-600`}
              type="submit"
              onClick={handlleLoginClick}
              //   disabled={!enteredUser.email && !enteredUser.password}
            >
              Login
            </button>
            {/* <GoogleLogin
              clientId={clientID}
              buttonText="Login"
              onSucess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_orgin'}
              signedIn={true}
            /> */}
          </div>
        </form>

        {!!errMesg.length && (
          <p
            className="mt-8 text-xs font-light text-center text-gray-700"
            id="error-message"
            data-testid="error-message"
          >
            {errMesg}
          </p>
        )}
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          {!errMesg.length && <>Don't have an account? </>}
          <Link
            to="/signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
