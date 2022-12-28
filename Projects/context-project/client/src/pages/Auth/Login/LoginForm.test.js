import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import store from '../../../store';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// test('on intial render, the login button is disabled', () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="*" element={<LoginForm />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );

//   expect(screen.getByRole('button', { name: /login/i })).toBeDisabled();
// });

test('if email and password is entered, the login button becomes enabled', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  userEvent.type(screen.getByLabelText(/email/i), 'test');
  userEvent.type(screen.getByLabelText(/password/i), 'test');

  expect(await screen.findByRole('button', { name: /login/i })).toBeEnabled();
});

test('on initial render, the login inputs should have a placeholder', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

  userEvent.type(screen.getByLabelText(/email/i), 'test');

  expect(screen.queryByPlaceholderText(/email/i)).not.toBeInTheDocument();

  userEvent.type(screen.getByLabelText(/password/i), 'test');
  expect(screen.queryByPlaceholderText(/password/i)).not.toBeInTheDocument();
});

test('if password or email is left blank, user is alerted on which field is missing', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  userEvent.type(screen.getByLabelText(/email/i), 'test');
  userEvent.type(screen.getByLabelText(/password/i), '');
  userEvent.click(await screen.findByRole('button', { name: /login/i }));

  const passErrMsg = await screen.findByText(
    'You have not entered a password!'
  );

  expect(passErrMsg).toBeInTheDocument();

  userEvent.type(screen.getByLabelText(/email/i), '');
  userEvent.type(screen.getByLabelText(/password/i), 'test');
  userEvent.click(await screen.findByRole('button', { name: /login/i }));

  const emailErrMsg = await screen.findByText('You have not entered an email');

  expect(emailErrMsg).toBeInTheDocument();
});

test('after 3 consecutive invalid details, the user is alerted a mmessage', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
});
