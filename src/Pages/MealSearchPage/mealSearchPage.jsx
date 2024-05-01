/*********************************************
 * @author Jeffrey Adkins
 * @contribution Entire file
 * 
 * @brief This file makes it easier for both mealSearch and MealSearchFunction
 *        to communicate as transferring data between two files needs a parent driver
 *********************************************/

import React from "react";
import Navbar from "../../Components/Navbar";
import '../../style.css'; // General styling.
import MealSearch from '../MealSearchPage/mealSearch';
import MealSearchFunction from "../MealSearchPage/mealSearchFunction";
import { useState } from "react";


/**
 * MealSearchPage is the parent file for both mealSearch and mealSearchFunction.
 * This files makes it easier for the two to communicate between each other.
 * @returns The display for the mealSearchPage
 */
function MealSearchPage() {

    const [ingredientsArray, setIngredientsArray] = useState([]);

    function handleStateChange(e) {
        setIngredientsArray(e);
    }

    function print() {
        console.log(ingredientsArray);
    }

    return(
        <>
            <Navbar />

            <MealSearch ingredientList={ingredientsArray} MealSearchFunction={<MealSearchFunction handleStateChange={handleStateChange} />}  />
            
        </>
    );

}

export default MealSearchPage;