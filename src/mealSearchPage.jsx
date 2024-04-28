import React from "react";
import Navbar from "./Navbar";
import './style.css';
import MealSearch from "./mealSearch";
import MealSearchFunction from "./mealSearchFunction";
import { useState } from "react";

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
            
            <button onClick={print}>Data present in mealSearchPage.jsx (REMOVE WHEN DONE)</button>
        </>
    );

}

export default MealSearchPage;