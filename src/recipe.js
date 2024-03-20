import RecipeStyle from './CSS Modules/recipe.module.css';
import './Navbar';
import Navbar from './Navbar';

function Recipe() {
  return (
    <div className={Recipe.recipe}>
        <Navbar></Navbar>
    </div>
  );
}

export default Recipe;