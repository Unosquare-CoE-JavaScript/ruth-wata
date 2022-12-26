import LoginForm from './pages/Auth/Login/LoginForm';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import HomePage from './pages/Rest/HomePage';
import RequiredAuth from './requiredAuth/RequiredAuth';
import RegisterForm from './pages/Auth/Register/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} exact />
        <Route path="/signup" element={<RegisterForm />} exact />

        <Route element={<RequiredAuth />}>
          <Route path="/" exact element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
