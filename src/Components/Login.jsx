import React, {useState, useEffect} from 'react';

//import axios from 'axios';



function Login(props) {
	const [login, setLogin] = useState(false);
	
	function userExists(email){
		return props.user.some((el) => el.Email === email)
	}

	function passwordMatch(pass) {
		return props.user.some((el) => el.Password === pass)
	}

	function checkLogin(e){
		e.preventDefault();
		
		if(userExists(e.target.email.value)){
			if(passwordMatch(e.target.password.value)){
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
