/*********************************************
 * @author Jeffrey Adkins
 * @contribution Form basics: labels, input boxes, and common ingredients
 * 
 * @author Kaleb Lawrence
 * @contribution  Added more form basics so that there is a drop down menu to select common ingredients.
 * @brief Basic searching function that has common ingredients listed as
 *        checkboxes in a drop down menu.
 *********************************************/

import React, { useState } from 'react';
import MealSearchStyle from './CSS Modules/mealSearch.module.css';

function MealSearchFunction() {
    const [showDairyCheckboxes, setShowDairyCheckboxes] = useState(false);
    const [showGrainsCheckboxes, setShowGrainsCheckboxes] = useState(false);
    const [showFruitsCheckboxes, setShowFruitsCheckboxes] = useState(false);
    const [showMeatsCheckboxes, setShowMeatsCheckboxes] = useState(false);
    const [showPoultryCheckboxes, setShowPoultryCheckboxes] = useState(false);
    const [showFishSeafoodCheckboxes, setShowFishSeafoodCheckboxes] = useState(false);
    const [showOilsCheckboxes, setShowOilsCheckboxes] = useState(false);

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
                {/* Updated styling for "Force only selected" checkbox */}
                <div className={MealSearchStyle.forceOnlySelected}>
                    <input type="checkbox" id="force_only_selected" name="force_only_selected" />
                    <label htmlFor="force_only_selected">Force only selected</label>
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
                            <input type="checkbox" id="dairy_milk" name="dairy" />
                            <label htmlFor="dairy_milk">Milk</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="dairy_butter" name="dairy" />
                            <label htmlFor="dairy_butter">Butter</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="dairy_cheese" name="dairy" />
                            <label htmlFor="dairy_cheese">Cheese</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="dairy_yogurt" name="dairy" />
                            <label htmlFor="dairy_yogurt">Yogurt</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="dairy_ice_cream" name="dairy" />
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
                            <input type="checkbox" id="grains_bread" name="grains" />
                            <label htmlFor="grains_bread">Bread</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="grains_oats" name="grains" />
                            <label htmlFor="grains_oats">Oats</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="grains_rice" name="grains" />
                            <label htmlFor="grains_rice">Rice</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="grains_quinoa" name="grains" />
                            <label htmlFor="grains_quinoa">Quinoa</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="grains_barley" name="grains" />
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
                            <input type="checkbox" id="fruits_apples" name="fruits" />
                            <label htmlFor="fruits_apples">Apples</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_bananas" name="fruits" />
                            <label htmlFor="fruits_bananas">Bananas</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_oranges" name="fruits" />
                            <label htmlFor="fruits_oranges">Oranges</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_lemons" name="fruits" />
                            <label htmlFor="fruits_lemons">Lemons</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_limes" name="fruits" />
                            <label htmlFor="fruits_limes">Limes</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_peaches" name="fruits" />
                            <label htmlFor="fruits_peaches">Peaches</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_pears" name="fruits" />
                            <label htmlFor="fruits_pears">Pears</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits pineapples" name="fruits" />
                            <label htmlFor="fruits_pineapples">Pineapples</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_strawberries" name="fruits" />
                            <label htmlFor="fruits_strawberries">Strawberries</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_blueberries" name="fruits" />
                            <label htmlFor="fruits_blueberries">Blueberries</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="fruits_raspberries" name="fruits" />
                            <label htmlFor="fruits_raspberries">Raspberries</label>
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
                        <input type="checkbox" id="meats_beef" name="meats" />
                        <label htmlFor="meats_beef">Beef</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="meats_pork" name="meats" />
                        <label htmlFor="meats_pork">Pork</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="meats_lamb" name="meats" />
                        <label htmlFor="meats_lamb">Lamb</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="meats_veal" name="meats" />
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
                            <input type="checkbox" id="poultry_chicken" name="poultry" />
                            <label htmlFor="poultry_chicken">Chicken</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="poultry_turkey" name="poultry" />
                            <label htmlFor="poultry_turkey">Turkey</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="poultry_duck" name="poultry" />
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
                            <input type="checkbox" id="seafood_fish" name="seafood" />
                            <label htmlFor="seafood_fish">Fish</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="seafood_scallops" name="seafood" />
                            <label htmlFor="seafood_scallops">Scallops</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="seafood_prawns" name="seafood" />
                            <label htmlFor="seafood_prawns">Prawns</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="seafood_lobster" name="seafood" />
                            <label htmlFor="seafood_lobster">Lobster</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="seafood_oysters" name="seafood" />
                            <label htmlFor="seafood_oysters">Oysters</label>
                        </div>
                        <div className={MealSearchStyle.checkboxRow}>
                            <input type="checkbox" id="seafood_clams" name="seafood" />
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
                        <input type="checkbox" id="oils_olive" name="oils" />
                        <label htmlFor="oils_olive">Olive Oil</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="oils_coconut" name="oils" />
                        <label htmlFor="oils_coconut">Coconut Oil</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="oils_avocado" name="oils" />
                        <label htmlFor="oils_avocado">Avocado Oil</label>
                    </div>
                    <div className={MealSearchStyle.checkboxRow}>
                        <input type="checkbox" id="oils_vegetable" name="oils" />
                        <label htmlFor="oils_vegetable">Vegetable Oil</label>
                    </div>
                </div>
            </div>

            </form>
        </div>
    );
}

export default MealSearchFunction;


