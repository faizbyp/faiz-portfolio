// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav>
        Navbar
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <footer>Footer</footer>
    </Router>
  );
}

export default App;
