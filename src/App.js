
import './App.css';
import Sampletailwind from './Components/Sampletailwind';
import Navbar from './Components/Navbar';
import Signuppage from './Components/Signuppage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import Login from './Components/Login';
import UserGallery from './Components/UserGallery';

function App() {
  return (
    <Router>
      <div>
      {/* <Navbar></Navbar> */}
        <Routes>
          <Route exact path="/" element = {<Sampletailwind/>}/>
          <Route exact path="/Signup" element = {<Signuppage/>}/>
          <Route exact path="/Login" element = {<Login/>}/>
          <Route exact path="/UserGallery" element = {<UserGallery/>}/>
          
          
          
        </Routes>

      </div>

    </Router>
  );
}

export default App;
