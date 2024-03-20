import './App.css';
import './Navbar';
import Navbar from './Navbar';
import './Pages/ProfilePage/ProfilePopup';
import './mealCard';
import Card from './mealCard';

function MealSearch() {
    return (
        <div>
          <Navbar></Navbar>
          <h1>Meal Search</h1>
          <h2>Bone Apple Teeth</h2>
          <Card></Card>
        </div>
      );
}

export default MealSearch;