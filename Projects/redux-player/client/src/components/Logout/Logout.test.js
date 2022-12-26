import { render, screen } from '@testing-library/react';
import Logout from './Logout';
import LoginForm from '../Login/LoginForm';
import { Provider } from 'react-redux';
import store from '../../../store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('When user clicks logout button, the user is taken to login page', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
      <Logout />
    </Provider>
  );

  userEvent.click(await screen.findByText('Logout'));

  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});
