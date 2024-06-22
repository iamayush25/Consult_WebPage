import logo from './logo.svg';
import './App.css';
import UpperNavbar from './Components/Navbar-Top/Navbar';
import MainNavbar from './Components/Navbar/MainNavbar';
import Employee_Profile from './Components/Employee-Image/Employee_Profile';
import AboutConsult from './Components/AboutConsult/AboutConsult';
import Offers from './Components/Offers/Offers';



function App() {
  return (
    <>
    <UpperNavbar/>
    <MainNavbar/>
    <Employee_Profile/>
    <AboutConsult/>
    <Offers/>
    </>
  );
}

export default App;
