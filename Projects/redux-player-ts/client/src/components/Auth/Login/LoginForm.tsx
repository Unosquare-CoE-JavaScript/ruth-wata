import { useState, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { usersActions } from '../../../store/userSlice';
import { useNavigate, Link } from 'react-router-dom';

let loginAttempt: number = 0;

const LoginForm = () => {
  const [enteredUserInfo, setEnteredUserInfo] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const home: string = '/';

  const [errMsg, setErrMsg] = useState('');

  const loginUser = async () => {
    try {
      const res = await fetch('http://localhost:2121/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredUserInfo.email,
          password: enteredUserInfo.password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        setErrMsg('Incorrect User Name/Password combination');

        throw new Error('Oops something went wrong!');
      }
      const data = await res.json();

      localStorage.setItem('token', data.token);

      dispatch(usersActions.addToken(localStorage.getItem('token')!));
      dispatch(usersActions.addUser(data.name));
      setErrMsg('Success!');
      navigate(home);
    } catch (err) {
      console.log(err);
      if (loginAttempt === 3) {
        setErrMsg(
          'Your account has been locked. Please contact your Administrator'
        );
      } else if (
        !enteredUserInfo.email.length &&
        !enteredUserInfo.password.length
      ) {
        setErrMsg('You have not entered a username or password!');
        loginAttempt += 1;
      } else if (!enteredUserInfo.email.length) {
        setErrMsg('You have not entered an email');
        loginAttempt += 1;
      } else if (!enteredUserInfo.password.length) {
        setErrMsg('You have not entered a password!');
        loginAttempt += 1;
      } else {
        setErrMsg('Incorrect User Name/Password combination');
        loginAttempt += 1;
      }
    }
    setEnteredUserInfo({
      email: '',
      password: '',
    });
  };

  const handlleLoginClick = (e: FormEvent) => {
    e.preventDefault();
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
              value={enteredUserInfo.email}
              onChange={(e) =>
                setEnteredUserInfo((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              id="email-label"
              placeholder={!enteredUserInfo.email ? 'email' : undefined}
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
              value={enteredUserInfo.password}
              onChange={(e) =>
                setEnteredUserInfo((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              id="password-label"
              placeholder={!enteredUserInfo.password ? 'password' : undefined}
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

        {!!errMsg.length && (
          <p
            className="mt-8 text-xs font-light text-center text-gray-700"
            id="error-message"
            data-testid="error-message"
          >
            {errMsg}
          </p>
        )}
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          {!errMsg.length && <>Don't have an account? </>}
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
};

export default LoginForm;
