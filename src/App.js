import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './Components/NavBar/NavBar';

import Us from './Components/Us/Us';
import Footer from './Components/Footer/Footer';
import Construction from './Components/Services/ServiceComponents/Construction';
import GasandOil from './Components/Services/ServiceComponents/OilandGas';
import Industrial from './Components/Services/ServiceComponents/Industrial';
import Investments from './Components/Services/ServiceComponents/Investments';
import Healthcare from './Components/Services/ServiceComponents/Healthcare';
import Consumer from './Components/Services/ServiceComponents/Consumer';
import Technology from './Components/Services/ServiceComponents/Technology';
import Food from './Components/Services/ServiceComponents/Food';
import HomePage from './Pages/HomePage';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <NavBar />
      <RoutesWrapper />
    
      <Us />
      <Footer />
     
    </Router>
  );
}

function RoutesWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/construction/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Construction />
            </motion.div>
          }
        />
        <Route
          path="/gas/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GasandOil />
            </motion.div>
          }
        />
        <Route
          path="/industrial/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Industrial />
            </motion.div>
          }
        />
        <Route
          path="/investments/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Investments />
            </motion.div>
          }
        />
        <Route
          path="/healthcare/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Healthcare />
            </motion.div>
          }
        />
        <Route
          path="/consumer/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Consumer />
            </motion.div>
          }
        />
        <Route
          path="/technology/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Technology />
            </motion.div>
          }
        />
        <Route
          path="/food/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Food />
            </motion.div>
          }
        />
        <Route
          path="/contact/*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactUs />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
