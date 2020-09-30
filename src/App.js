import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';


import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieList from './Components/Movie';

function App() {
  const [users, ] = useState([]);
  const [logedIn, setLoginedIn] = useState(false);

  
  if (localStorage.getItem("user")) {
    const j = JSON.parse(localStorage.getItem("user"))
    users.push(...j);
  }
  

  

  function updateStore(user) {
    users.push(user);
    console.log(users);
    localStorage.setItem("user", JSON.stringify(users))
  }

  function signIn(bool = false) {
    setLoginedIn(bool);
  }
  
  useEffect(() => console.log(logedIn), [logedIn])
  if (logedIn) {
    return <MovieList />
  }

	return (
    
       

      <div>
        <div id="links">
        <Link className="link" to="/signup">Signup</Link>
        <Link className="link" to="/login">Login</Link>
        </div>
      <Switch>
      <Route component={() => <Signup register={updateStore} user={users}/>} exact path="/" />
        <Route component={() => <Signup register={updateStore} user={users}/>} exact path="/signup" />
        <Route component={() => <Login user={users} logedIn={signIn}/>} exact path="/login" />
      </Switch>
      </div>
    
  	);
}

export default App;
