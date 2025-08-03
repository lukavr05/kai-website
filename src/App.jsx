import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <Navbar />
        <Box>
          <Box id="home">
            <Home />
          </Box>
          <Box id="about">
            <About />
          </Box>
          <Box id="media">
            <Media />
          </Box>
          <Box id="portfolio">
            <Portfolio />
          </Box>
        </Box>
    </>
  );
}

export default App;
