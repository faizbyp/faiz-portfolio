// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import Codes from './pages/Codes';
import Designs from './pages/Designs';
import Games from './pages/Games';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/games" element={<Games />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
