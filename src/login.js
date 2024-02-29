function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");
 
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`); // Use backticks for template literals
 }
 
 function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
 }
 
 document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
 
    document.querySelector("#linkCreateAccount").addEventListener("click", (event) => {
       event.preventDefault();
       loginForm.classList.add("form--hidden");
       createAccountForm.classList.remove("form--hidden");
    });
 
    document.querySelector("#linkLogin").addEventListener("click", (event) => {
       event.preventDefault();
       loginForm.classList.remove("form--hidden");
       createAccountForm.classList.add("form--hidden");
    });
 
    loginForm.addEventListener("submit", (event) => {
       event.preventDefault();
       setFormMessage(loginForm, "error", "Invalid username/password");
    });
 
    createAccountForm.addEventListener("submit", (event) => {
       event.preventDefault(); // Prevent default form submission
 
       // Form validation logic, I think this is wrong im confused, This one is gpt and I think it made it worse I'll fix it sometime
       const usernameInput = createAccountForm.querySelector("input[name='username']");
       if (usernameInput.value.length < 5) {
          setInputError(usernameInput, "Username must be at least 5 characters.");
          return; // Prevent further execution
       }
 
       // If validation passes, you can proceed with the form submission
       // For now, let's just log a success message
       console.log("Form submitted successfully!");
 
       // Reset input errors
       setInputError(usernameInput, ""); // Clear any previous error messages
    });
 
    document.querySelectorAll(".form__input").forEach(inputElement =>{
       inputElement.addEventListener("blur", (event) =>{
          if (event.target.id === "signupUsername" && event.target.value.length > 0 && event.target.value.length < 5){
             setInputError (inputElement, "Username must be at least 5 characters.");
          }
       });
    });
 });
 
