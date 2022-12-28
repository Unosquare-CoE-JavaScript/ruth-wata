import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useHttp';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../store/usersSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterForm() {
  const [enteredUser, setEnteredUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errMesg, setErrMsg] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const home = '/';

  const { fn } = useAuth();

  const handlleLoginClick = (e) => {
    const applyData = (data) => {
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
    };

    const errorHandling = () => {
      if (
        !enteredUser.email.length &&
        !enteredUser.password.length &&
        enteredUser.name === ''
      ) {
        setErrMsg('Please enter name, email, and password!');
      } else if (!enteredUser.email.length && !enteredUser.password.length) {
        setErrMsg('You have not entered a email or password!');
      } else if (!enteredUser.email.length) {
        setErrMsg('You have not entered an email');
      } else if (!enteredUser.password.length) {
        setErrMsg('You have not entered a password!');
      } else {
        setErrMsg('Incorrect User Name/Password combination');
      }
    };

    e.preventDefault();

    const requestConfig = {
      url: `http://localhost:2121/api/users/register`,
      method: 'POST',
      body: {
        name: enteredUser.name,
        email: enteredUser.email,
        password: enteredUser.password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fn(requestConfig, applyData, errorHandling);
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
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              value={enteredUser.name}
              onChange={(e) =>
                setEnteredUser((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              value={enteredUser.email}
              onChange={(e) =>
                setEnteredUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
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
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              type="submit"
              onClick={handlleLoginClick}
            >
              Signup
            </button>
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
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
