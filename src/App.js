import "./App.css";
// import UpperNavbar from './Components/Navbar-Top/Navbar';
import MainNavbar from "./Components/Navbar/MainNavbar";
import Employee_Profile from "./Components/Employee-Image/Employee_Profile";
import AboutConsult from "./Components/AboutConsult/AboutConsult";
import Offers from "./Components/Offers/Offers";
import CompanyRating from "./Components/CompanyRating/CompanyRating";
import RequestQuotes from "./Components/RequestQuotes/RequestQuotes";
import My_Team from "./Components/MyTeam/My_team";
import Clints from "./Components/Clints/Clints";
import LatestBlogs from "./Components/LatestBlogs/LatestBlogs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {/* <UpperNavbar/> */}
      <MainNavbar />
      <Employee_Profile />
      <AboutConsult />
      <Offers />
      <CompanyRating/>
      <RequestQuotes/>
      <My_Team/>
      <Clints/>
      <LatestBlogs/>
      <Footer/>
    </>
  );
}

export default App;
