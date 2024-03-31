import './App.css';
import './Pages/ProfilePage/ProfilePopup';
import './Pages/ProfilePage/ProfilePage'
import { BrowserRouter, Routes, Route, useHref} from "react-router-dom";
import Home from './Home';
import MealSearch from './mealSearch';
import LoginPage from './LoginPage';
import ProfilePopup from './Pages/ProfilePage/ProfilePopup';
import UserProfile from './Pages/ProfilePage/ProfilePage';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createElement, useEffect } from 'react';
Amplify.configure(config);

function App({ signOut, user }) {
  
  useEffect(() => {
  const client = generateClient();
 
async function createTodoItem(){
const createResult = await client.graphql({
  query: createTodo,
  variables: {
    input: {
      name: 'My first todo!'
    }
  }
});
};


async function updateTodoItem(){
const updateResult = await client.graphql({
  query: updateTodo,
  variables: {
    input: {
      id: '<...>',
      name: 'My first updated todo!'
    }
  }
});
console.log(updateResult);
};


async function deleteTodoItem(){
const deleteResult = await client.graphql({
  query: deleteTodo,
  variables: {
    input: {
      id: '<...>'
    }
  }
});
console.log(deleteResult);
}

  }, []);
  
  return (
    <div className="App">
      <button onClick={signOut}>Sign out</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search/" element={<MealSearch></MealSearch>}></Route>
          <Route path="/profile/" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);

/*function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<MealSearch></MealSearch>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;*/

/*import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);*/