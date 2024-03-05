import './App.css';
import './ProfilePage/ProfilePopup';
import './ProfilePage/ProfilePage'
import { BrowserRouter, Routes, Route, useHref} from "react-router-dom";
import Home from './Home';
import MealSearch from './mealSearch';
import LoginPage from './LoginPage';
import ProfilePopup from './ProfilePage/ProfilePopup';
import UserProfile from './ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<MealSearch></MealSearch>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
