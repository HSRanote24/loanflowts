import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CookiePage from "./pages/CookiePage";
import PrivacyPage from "./pages/PrivacyPage";


const App=()=> {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/CookiePage" element={<CookiePage/>}/>
      <Route path="/PrivacyPage" element={<PrivacyPage/>}/>
    
    </Routes>
  </Router>
  );
};

export default App;
