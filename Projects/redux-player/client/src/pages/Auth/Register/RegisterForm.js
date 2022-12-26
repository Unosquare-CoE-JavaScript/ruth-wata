import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from '../../../store/usersSlice';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const home = '/';

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handlleLoginClick = (e) => {
    (async () => {
      e.preventDefault();

      const enteredEmail = email.current.value;
      const enteredPass = password.current.value;
      const enteredName = name.current.value;

      try {
        const res = await fetch('http://localhost:2121/api/users/register', {
          method: 'POST',
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            password: enteredPass,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();

        console.log(data);
        dispatch(
          usersActions.addToken({
            payload: data.token,
          })
        );

        dispatch(
          usersActions.addUser({
            payload: data.name,
          })
        );
        navigate(home);
      } catch (err) {
        console.log(err);
      }
    })();
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
              for="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="name"
              ref={name}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              ref={email}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              ref={password}
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
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          Already have an account ?{' '}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
