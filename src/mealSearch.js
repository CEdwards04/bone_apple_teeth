import './App.css';
import './Navbar';
import Navbar from './Navbar';
import './Pages/ProfilePage/ProfilePopup';
import './mealCard';
import Card from './mealCard';
import mealSearchStyle from './CSS Modules/mealSearch.module.css';
import MealSearchFunction from './mealSearchFunction';

function MealSearch() {
    return (
        <div>
          <Navbar></Navbar>
          <h1>Meal Search</h1>
          <h2>Bone Apple Teeth</h2>
          <table>
            <tr>
              <td>
                <MealSearchFunction></MealSearchFunction>
              </td>
              <td className={mealSearchStyle.meal_cards}><Card></Card></td>
            </tr>
          </table>
        </div>
      );
}

export default MealSearch;