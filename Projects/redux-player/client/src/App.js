import LoginForm from './pages/Auth/Login/LoginForm';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RequiredAuth from './requiredAuth/RequiredAuth';
import RegisterForm from './pages/Auth/Register/RegisterForm';
import AddCustomerReview from './pages/AddCustomerReview';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} exact />
        <Route path="/signup" element={<RegisterForm />} exact />

        <Route element={<RequiredAuth />}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/add" element={<AddCustomerReview />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
