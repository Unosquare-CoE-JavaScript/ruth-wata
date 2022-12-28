import LoginForm from './components/Auth/Login/LoginForm';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RequiredAuth from './RequiredAuth/RequiredAuth';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route element={<RequiredAuth />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
