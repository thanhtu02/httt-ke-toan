import { useContext, useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewPage from './pages/News';
import DetailPage from './pages/Detail';
import MarketPage from './pages/Market';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './api/bctc/data.json'
import { DataContext } from './context/dataContext';

function App() {
  const [loading, setLoading] = useState(true);
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  const { store, updateData } = useContext(DataContext);
  useEffect(() => {
    updateData(data);
  }, [data]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<HomePage />} />
          <Route path="/news" element={<NewPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/market" element={<MarketPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
