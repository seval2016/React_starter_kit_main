import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../components/login/LoginPage';
import RegisterPage from '../components/register/RegisterPage';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/*<Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h2>Sayfa Bulunamadı</h2>} /> */}
    </Routes>
     
   
  )
}

export default RouterConfig
