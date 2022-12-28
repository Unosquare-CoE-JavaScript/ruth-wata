import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginForm from '../Auth/Login/LoginForm';

test('on initial load, the reviews, navigation bar and logout are on the page', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} exact />
        <Route path="/home" element={<HomePage />} exact />
      </Routes>
    </BrowserRouter>
  );

  userEvent.type(screen.getByLabelText(/email/i), 'jane@test.com');
  userEvent.type(screen.getByLabelText(/password/i), 'janedoe');
  userEvent.click(await screen.findByRole('button', { name: /login/i }));

  //   expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();

  //   expect(screen.getByText('Home')).toBeInTheDocument();

  screen.getByRole('');
});
