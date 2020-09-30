import React, {useState, useEffect} from 'react';

import {passwordMatch, userExists} from '../utilities';


function Login(props) {
	const [login, setLogin] = useState(false);
	
	

	function checkLogin(e){
		e.preventDefault();
		
		if(userExists(props, e.target.email.value)){
			
			if(passwordMatch(props, e.target.password.value)){
				setLogin(true);
	
				
			}else {
				// wrong password
				alert("Invalid Credentials.");
			}
		} else {
			// new email redirect to signup.
			alert("User doesn't exist")
		}

	}


	useEffect(() => {
		if (login) {
			props.logedIn(login);
		}
	})
	
	

	return (
		<form id="login" onSubmit={checkLogin} >
			<input type="email" placeholder="email@example.com" id="email" name="email" />
			<input type="password" placeholder="*******" id="password" name="password" />
			<input type="submit" value="Login"/>
		</form>		
	)
}

export default Login;
