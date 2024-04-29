/*********************************************
 * @author Jeffrey Adkins
 * @contribution Form basics: labels, input boxes, common ingredients, and added
 *               way for form to communicate with API
 * 
 * @author Kaleb Lawrence
 * @contribution  Added more form basics so that there is a drop down menu to select common ingredients.
 * @brief Basic searching function that has common ingredients listed as
 *        checkboxes in a drop down menu.
 *********************************************/
import React, { useState } from 'react';
import MealSearchStyle from './CSS Modules/mealSearch.module.css';
function MealSearchFunction({handleStateChange}) {
    const [ingredientsArray, setIngredientsArray] = useState([]);
    const handleChange = (e) => {
        const value = e.target.id;
        const checked = e.target.checked;
        console.log(value, checked);
        if(checked) {
            setIngredientsArray([
                ...ingredientsArray, value
            ])
        } else {
            setIngredientsArray(ingredientsArray.filter((e) => (e !== value)));
        }
    }
    const handleIngredientChange = (e) => {
        e.preventDefault();
        console.log(ingredientsArray);
        handleStateChange(ingredientsArray);
    }
    const [showDairyCheckboxes, setShowDairyCheckboxes] = useState(false);
    const [showGrainsCheckboxes, setShowGrainsCheckboxes] = useState(false);
    const [showFruitsCheckboxes, setShowFruitsCheckboxes] = useState(false);
    const [showMeatsCheckboxes, setShowMeatsCheckboxes] = useState(false);
    const [showPoultryCheckboxes, setShowPoultryCheckboxes] = useState(false);
    const [showFishSeafoodCheckboxes, setShowFishSeafoodCheckboxes] = useState(false);
    const [showOilsCheckboxes, setShowOilsCheckboxes] = useState(false);
    const [showVegetablesCheckboxes, setShowVegetablesCheckboxes] = useState(false);

    const toggleVegetablesCheckboxes = () => {
    setShowVegetablesCheckboxes(!showVegetablesCheckboxes);
    };
    const toggleDairyCheckboxes = () => {
        setShowDairyCheckboxes(!showDairyCheckboxes);
    };
    const toggleGrainsCheckboxes = () => {
        setShowGrainsCheckboxes(!showGrainsCheckboxes);
    };
    const toggleFruitsCheckboxes = () => {
        setShowFruitsCheckboxes(!showFruitsCheckboxes);
    };
    const toggleMeatsCheckboxes = () => {
        setShowMeatsCheckboxes(!showMeatsCheckboxes);
    };
    const togglePoultryCheckboxes = () => {
        setShowPoultryCheckboxes(!showPoultryCheckboxes);
    };
    const toggleFishSeafoodCheckboxes = () => {
        setShowFishSeafoodCheckboxes(!showFishSeafoodCheckboxes);
    };
    const toggleOilsCheckboxes = () => {
        setShowOilsCheckboxes(!showOilsCheckboxes);
    };
    return (
        <div className={MealSearchStyle.container}>
            <form className={MealSearchStyle.form}>

                <div className={MealSearchStyle.forceOnlySelected}>
                    <input type="checkbox" id="breakfast" name="breakfast" onClick={handleChange}/>
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className={MealSearchStyle.forceOnlySelected}>
                    <input type="checkbox" id="Lunch" name="Lunch" onClick={handleChange}/>
                    <label htmlFor="Lunch">Lunch</label>
                </div>
                <div className={MealSearchStyle.forceOnlySelected}>
                    <input type="checkbox" id="Dinner" name="Dinner" onClick={handleChange}/>
                    <label htmlFor="Dinner">Dinner</label>
                </div>
                <div className={MealSearchStyle.category}>
                    <h3 className={MealSearchStyle.categoryTitle}onClick={toggleDairyCheckboxes}>
                        Dairy
                        <span className={MealSearchStyle.dropdownArrow} onClick={toggleDairyCheckboxes}>
                            &#9662; {}
                        </span>
                    </h3>
                    <div className={MealSearchStyle.checkboxGroup} style={{ display: showDairyCheckboxes ? 'block' : 'none' }}>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="milk" name="dairy" onClick={handleChange}/>
                            <label htmlFor="dairy_milk">Milk</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="butter" name="dairy" onClick={handleChange}/>
                            <label htmlFor="dairy_butter">Butter</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="cheese" name="dairy" onClick={handleChange} />
                            <label htmlFor="dairy_cheese">Cheese</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="yogurt" name="dairy" onClick={handleChange} />
                            <label htmlFor="dairy_yogurt">Yogurt</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="ice_cream" name="dairy" onClick={handleChange} />
                            <label htmlFor="dairy_ice_cream">Ice Cream</label>
                        </div>
                    </div>
                </div>
                <div className={MealSearchStyle.category}>
                    <h3 className={MealSearchStyle.categoryTitle}onClick={toggleGrainsCheckboxes}>
                        Grains
                        <span className={MealSearchStyle.dropdownArrow} onClick={toggleGrainsCheckboxes}>
                            &#9662; 
                        </span>
                    </h3>
                    <div className={MealSearchStyle.checkboxGroup} style={{ display: showGrainsCheckboxes ? 'block' : 'none' }}>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="bread" name="grains" onClick={handleChange} />
                            <label htmlFor="grains_bread">Bread</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="flour" name="grains" onClick={handleChange} />
                            <label htmlFor="grains_flour">Flour</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="oats" name="grains" onClick={handleChange} />
                            <label htmlFor="grains_oats">Oats</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="rice" name="grains" onClick={handleChange} />
                            <label htmlFor="grains_rice">Rice</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="quinoa" name="grains" onClick={handleChange} />
                            <label htmlFor="grains_quinoa">Quinoa</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="barley" name="grains" onClick={handleChange} />
                            <label htmlFor="grains_barley">Barley</label>
                        </div>
                    </div>
                </div>
                <div className={MealSearchStyle.category}>
                    <h3 className={MealSearchStyle.categoryTitle}onClick={toggleFruitsCheckboxes}>
                        Fruits
                        <span className={MealSearchStyle.dropdownArrow} onClick={toggleFruitsCheckboxes}>
                            &#9662; 
                        </span>
                    </h3>
                    <div className={MealSearchStyle.checkboxGroup} style={{ display: showFruitsCheckboxes ? 'block' : 'none' }}>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="apples" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_apples">Apples</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="bananas" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_bananas">Bananas</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="oranges" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_oranges">Oranges</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="lemons" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_lemons">Lemons</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="limes" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_limes">Limes</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="peaches" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_peaches">Peaches</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="pears" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_pears">Pears</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="pineapples" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_pineapples">Pineapples</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="strawberries" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_strawberries">Strawberries</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="blueberries" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_blueberries">Blueberries</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="raspberries" name="fruits" onClick={handleChange} />
                            <label htmlFor="fruits_raspberries">Raspberries</label>
                        </div>
                    </div>
                </div>
                <div className={MealSearchStyle.category}>
                    <h3 className={MealSearchStyle.categoryTitle} onClick={toggleVegetablesCheckboxes}>
                        Vegetables
                        <span className={MealSearchStyle.dropdownArrow} onClick={toggleVegetablesCheckboxes}>
                            &#9662;
                        </span>
                    </h3>
                    <div className={MealSearchStyle.checkboxGroup} style={{ display: showVegetablesCheckboxes ? 'block' : 'none' }}>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="carrots" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_carrots">Carrots</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="broccoli" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_broccoli">Broccoli</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="spinach" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_spinach">Spinach</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="tomatoes" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_tomatoes">Tomatoes</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="potatoes" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_potatoes">Potatoes</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="bell_peppers" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_bell_peppers">Bell Peppers</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="cucumbers" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_cucumbers">Cucumbers</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="onions" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_onions">Onions</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="garlic" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_garlic">Garlic</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="mushrooms" name="vegetables" onClick={handleChange} />
                            <label htmlFor="vegetables_mushrooms">Mushrooms</label>
                        </div>
                    </div>
                </div>

                <div className={MealSearchStyle.category}>
                <h3 className={MealSearchStyle.categoryTitle}onClick={toggleMeatsCheckboxes}>
                    Meats
                    <span className={MealSearchStyle.dropdownArrow} onClick={toggleMeatsCheckboxes}>
                        &#9662; 
                    </span>
                </h3>
                <div className={MealSearchStyle.checkboxGroup} style={{ display: showMeatsCheckboxes ? 'block' : 'none' }}>
                        <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="beef" name="meats" onClick={handleChange} />
                        <label htmlFor="meats_beef">Beef</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="pork" name="meats" onClick={handleChange} />
                        <label htmlFor="meats_pork">Pork</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="Sausage" name="meats" onClick={handleChange} />
                        <label htmlFor="meats_sausage">Sausage</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="lamb" name="meats" onClick={handleChange} />
                        <label htmlFor="meats_lamb">Lamb</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="veal" name="meats" onClick={handleChange} />
                        <label htmlFor="meats_veal">Veal</label>
                    </div>
                </div>
            </div>
            <div className={MealSearchStyle.category}>
                    <h3 className={MealSearchStyle.categoryTitle}onClick={togglePoultryCheckboxes}>
                        Poultry
                        <span className={MealSearchStyle.dropdownArrow} onClick={togglePoultryCheckboxes}>
                            &#9662;
                        </span>
                    </h3>
                    <div className={MealSearchStyle.checkboxGroup} style={{ display: showPoultryCheckboxes ? 'block' : 'none' }}>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="chicken" name="poultry" onClick={handleChange} />
                            <label htmlFor="poultry_chicken">Chicken</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="eggs" name="poultry" onClick={handleChange} />
                            <label htmlFor="poultry_eggs">Eggs</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="turkey" name="poultry" onClick={handleChange} />
                            <label htmlFor="poultry_turkey">Turkey</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="duck" name="poultry" onClick={handleChange} />
                            <label htmlFor="poultry_duck">Duck</label>
                        </div>
                    </div>
                </div>
                <div className={MealSearchStyle.category}>
                    <h3 className={MealSearchStyle.categoryTitle}onClick={toggleFishSeafoodCheckboxes}>
                        Fish/Seafood
                        <span className={MealSearchStyle.dropdownArrow} onClick={toggleFishSeafoodCheckboxes}>
                            &#9662; 
                        </span>
                    </h3>
                    <div className={MealSearchStyle.checkboxGroup} style={{ display: showFishSeafoodCheckboxes ? 'block' : 'none' }}>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fish" name="seafood" onClick={handleChange} />
                            <label htmlFor="seafood_fish">Fish</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="scallops" name="seafood" onClick={handleChange} />
                            <label htmlFor="seafood_scallops">Scallops</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="prawns" name="seafood" onClick={handleChange} />
                            <label htmlFor="seafood_prawns">Prawns</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="lobster" name="seafood" onClick={handleChange} />
                            <label htmlFor="seafood_lobster">Lobster</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="oysters" name="seafood" onClick={handleChange} />
                            <label htmlFor="seafood_oysters">Oysters</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="clams" name="seafood" onClick={handleChange} />
                            <label htmlFor="seafood_clams">Clams</label>
                        </div>
                    </div>
                </div>
                <div className={MealSearchStyle.category}>
                <h3 className={MealSearchStyle.categoryTitle}onClick={toggleOilsCheckboxes}>
                    Oils
                    <span className={MealSearchStyle.dropdownArrow} onClick={toggleOilsCheckboxes}>
                        &#9662;
                    </span>
                </h3>
                <div className={MealSearchStyle.checkboxGroup} style={{ display: showOilsCheckboxes ? 'block' : 'none' }}>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="olive_oil" name="oils" onClick={handleChange} />
                        <label htmlFor="oils_olive">Olive Oil</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="coconut_oil" name="oils" onClick={handleChange} />
                        <label htmlFor="oils_coconut">Coconut Oil</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="avocado_oil" name="oils" onClick={handleChange} />
                        <label htmlFor="oils_avocado">Avocado Oil</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="vegetable_oil" name="oils" onClick={handleChange} />
                        <label htmlFor="oils_vegetable">Vegetable Oil</label>
                    </div>
                </div>
            </div>
            <button onClick={handleIngredientChange}>Apply Ingredient Changes</button>
            </form>
        </div>
    );
}
export default MealSearchFunction;