import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Protected from "./Components/Protected"

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Search from "./Pages/Search"
import Advocates from "./Pages/Advocates"
import Profile from "./Pages/Profile"
import Signup from "./Pages/Signup"
import Forgetpassword from "./Pages/Forgetpassword"
import Searchresult from "./Pages/Searchresult"
import Thankyou from "./Pages/Thankyou"
import Resetpassword from "./Pages/Resetpassword"
import SearchBar from "./Pages/SearchBar";

const user = localStorage.getItem('apiKey');
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} /> 
        
        <Route path="register" element={<Register />} />
        <Route path="search" element={<SearchBar />} />
        <Route path="advocates" element={<Advocates />} />
        <Route path="profile" element={<Protected user={user}>  <Profile /> </Protected>} />
        <Route path="signup/:state/:city/:bar" element={<Signup />} />
        <Route path="forgetpassword" element={<Forgetpassword />} />
        <Route path="searchresult/:state/:city/:bar" element={<Searchresult />} />
        <Route path="thankyou" element={<Thankyou />} />
        <Route path="resetpassword" element={<Resetpassword />} />
      
     </Routes>


    </BrowserRouter>
    <Footer />
    
    </>
  
  );
}

export default App