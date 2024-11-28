import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

import UserProfile from './Pages/UserProfile';
import NotFound from './Pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <h1>Routing in react</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserProfile />} />
        {/* Dynamic Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
