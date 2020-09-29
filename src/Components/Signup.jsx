import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

function Signup(props) {
	const [signedUp, setSignedUp] = useState(false);

    function createAccount(e) {
        e.preventDefault();
        
        function userExists(email){
            return props.user.some((el) => el.Email === email)
        }

        if (e.target.pwd1.value !== e.target.pwd2.value) {
            alert("Mismatch password!");
        }else if (userExists(e.target.email.value)){
            alert("Already registered with this email address.");
        }else {
            props.register({
                Name: e.target.name.value,
                Password: e.target.pwd1.value,
                Email: e.target.email.value,
                PhoneNo: e.target.phone.value,
                Profession: e.target.profession.value,
            });          

		setSignedUp(true);	
        }
    }

	useEffect(() => console.log(signedUp), [signedUp]);
	if (signedUp) {
		return <Redirect to="/login"/>
	}

    return (
	
        <form id="signup" onSubmit={createAccount} >
            <input type="text" placeholder="Name" id="name" name="name" required/>
            <input type="email" placeholder="email@example.com" id="email" name="email" required/>
            <input type="text" placeholder="Mob. no." id="phone" name="phone"/>
            <select name="profession" id="profession">
                <option value="web_developer">Web Developer</option>
                <option value="digital_marketing">Digital Marketing</option>
                <option value="system_admin">System Administrator</option>
            </select>
            <input type="password" placeholder="password" id="pwd1" name="pwd1"/>
            <input type="password" placeholder="confirm password" id="pwd2" name="pwd2"/>

            <input type="submit" value="Signup"/>
            
        </form>
    )
}

export default Signup;
