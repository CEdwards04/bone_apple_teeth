import React from "react";
import logo from "./Bone_Apple_Teeth-logos_transparent.png";
import "./About.css";
export const About = () => {
  return (
    <div>
      <div class>
        <h1 class="title">About Bone Apple Teeth</h1>
      </div>
      <div>
        <div class="creator">
          <div class="author">
            <div class="fd-avatar md">
              <img
                src={logo}
                alt="Bone Apple Teeth Logo"
                style={{ width: "130px", height: "auto" }}
              />
            </div>
            <div class="author-name">
              <div calss="label">
                <h3>By Group 08</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-des">
        <div class="descrip">
          <p>
            Welcome to Bone Apple Teeth, the ultimate companion for all your
            culinary adventures! <br></br>Say goodbye to the chaos of recipe
            clippings, scattered cookbooks, and endless online tabs <br></br>{" "}
            with our app, organizing your recipes and planning meals has never
            been easier.
            <br></br>
            <br></br>
            Discover a world of culinary delight at your fingertips. Whether
            you're a seasoned chef or<br></br> a kitchen newbie, our app offers
            a seamless experience tailored to your needs. From quick<br></br>{" "}
            weeknight dinners to gourmet feasts, we've got you covered with a
            vast collection of tried-<br></br>and-tested recipes from around the
            globe. But Bone Apple Teeth is more than just a recipe<br></br>{" "}
            repository. It's your personal kitchen assistant, helping you
            streamline meal planning, shopp<br></br>-ing, and cooking.<br></br>
            <br></br>
            With intuitive features like customizable meal plans, smart grocery
            lists, and convenient<br></br> cooking timers, we'll revolutionize
            the way you approach food preparation. Get inspired<br></br> by
            browsing through mouthwatering recipes curated by our team of
            culinary experts.<br></br> Whether you're craving comfort food
            classics, exploring new cuisines, or catering to <br></br>special
            dietary needs, we have something for everyone. And with
            user-friendly tools for<br></br> saving and organizing your favorite
            recipes, you can easily access them whenever hunger<br></br>{" "}
            strikes.<br></br>
            <br></br>
            Join our vibrant community of food enthusiasts to share your own
            culinary creations, tips,<br></br> and tricks. Connect with fellow
            foodies, swap recipe recommendations, and embark on a <br></br>
            delicious journey together. With Bone Apple Teeth, every mealtime
            becomes an opportunity<br></br> to explore, create, and savor
            unforgettable flavors. Ready to elevate your cooking experience?
            <br></br> Download Bone Apple Teeth today and unlock a world of
            culinary possibilities right at your<br></br>
            fingertips. Let's cook, share, and indulge – because every meal
            deserves to be extraordinary.<br></br>
          </p>
        </div>
      </div>
      
    </div>
  );
};
