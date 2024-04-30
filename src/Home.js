/*********************************************
 * @author Jeffrey Adkins
 * @contribution Entire file
 * @brief This is the home page of the website.
 *********************************************/

import './App.css';
import Navbar from './Navbar';
import './Pages/ProfilePage/ProfilePopup';

/**
 * Home is the function in which houses the code for the home page
 * @returns The display to be used on the home page
 */
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>CS 230 Group 8 Project</h1>
      <h2>Bone Apple Teeth</h2>
      <hr></hr>
      <h2 className='HomePageHeadingLeft'>The Quality of Life Recipe Finder</h2>
      <p className="HomePageTextLeft">Bone Apple Teeth is aimed at giving the people what they want:<br></br> The ability to decide what they want to cook based on ingredients they already have on hand!</p>
      <br></br>
      <h2 className="HomePageHeadingLeft">Why Choose Bone Apple Teeth?</h2>
      <p className="HomePageTextLeft">Bone Apple Teeth allows the users to make decisions on those lazy nights, allowing you<br></br> to decide quickly on your dinner plans without the need to go out and buy any new ingredients when you just want to relax and unwind.</p>
      <p className="HomePageTextLeft">Bone Apple Teeth will take the unnecessary dinner planning and perform that for you. The only thing you need <br></br>to do is cook the meal and relax!</p>
      <br></br>
      <h2 className="HomePageHeadingLeft">What sets your apart from other meal search sites?</h2>
      <p className="HomePageTextLeft">We offer the ability to search for meals specifically by ingredients. This will allow you to<br></br> find meals with specific ingredients.</p>
      <p className="HomePageTextLeft">In addition, this can help if you are on a diet, vegetarian, vegan, pescetarian, etc.</p>
      <hr></hr>
      <h3 className="HomePageHeadingLeft">Have suggestions?</h3>
      <p className="HomePageTextLeft">Please reach out to the team here: <button className="btn btn-primary">Contact us!</button></p>
    </div>
  );
}

export default Home;