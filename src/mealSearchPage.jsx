/*********************************************
 * @author Jeffrey Adkins
 * @contribution Entire file
 * 
 * @brief This file makes it easier for both mealSearch and MealSearchFunction
 *        to communicate as transferring data between two files needs a parent driver
 *********************************************/

import React from "react";
import Navbar from "./Navbar";
import './style.css';
import MealSearch from "./mealSearch";
import MealSearchFunction from "./mealSearchFunction";
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