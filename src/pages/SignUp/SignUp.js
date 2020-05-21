import React, { useState, useRef, useCallback } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import app from '../../base';
import './SignUp.css';

const SignUp = ({ history }) => {
    
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/sign-in");
        } catch (error) {
          alert(error);
        }
      }, [history]);

    const [checkBox, turnOnOffCheckBox] = useState(false);

    const formData = useRef({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    
    const [firstNameClass, setFirstNameClass] = useState('');
    const [lastNameClass, setLastNameClass] = useState('');
    const [emailClass, setEmailClass] = useState('');
    const [passwordClass, setPasswordClass] = useState('');

    const checkFirstNameErr = () => {
        const reg = /[a-zA-Z0-9-_]{3,}/;
        return !reg.test(formData.current.firstName);
    };

    const checkLastNameErr = () => {
        const reg = /[a-zA-Z0-9-_]{3,}/;
        return !reg.test(formData.current.lastName);
    };
    const checkEmailErr = () => {
        const reg = /^...+@..+\...+$/;
        return !reg.test(formData.current.email);
    };

    const checkPasswordErr = () => {
        const reg = /^[0-9a-zA-Z]{8,}$/;
        return !reg.test(formData.current.password);
    };

    const checkValidation = () => {
        
        const { firstName, lastName, email, password } = formData.current;

        if (checkFirstNameErr() && firstName.length > 0) {
            setFirstNameClass('errorInput');
        } else if(!checkFirstNameErr() && firstName.length > 0){
            setFirstNameClass('correctInput');
        } else {
            setFirstNameClass('');
        }

        if (checkLastNameErr() && lastName.length > 0) {
            setLastNameClass('errorInput');
        } else if(!checkLastNameErr() && lastName.length > 0){
            setLastNameClass('correctInput');
        } else {
            setLastNameClass('');
        }

        if (checkEmailErr() && email.length > 0) {
            setEmailClass('errorInput');
        } else if(!checkEmailErr() && email.length > 0) {
            setEmailClass('correctInput');
        }
        else {
            setEmailClass('');
        }

        if (checkPasswordErr() && password.length > 0) {
            setPasswordClass('errorInput');
        } else if(!checkPasswordErr() && password.length > 0){
            setPasswordClass('correctInput');
        } else {
            setPasswordClass('');
        }       
    };

    const changeValue = (value, name) => {
        formData.current[name] = value;
        checkValidation();
    };

    const onButtonClick = () => {
        if (!checkFirstNameErr() && !checkLastNameErr() && !checkEmailErr() && !checkPasswordErr()) {
            console.log('all is goood');
        } else {
          console.log('Вы ввели неправильные данные');
        }
    };

    return (
        <div className="form2">   
            <form className="signUp" onSubmit={handleSignUp}>
                <div className="ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/></svg></div>
                <label>
                Sign up
                </label><br/>
                <span className="firstNamelastName">
                    <input 
                        className={`inputFirstName ${firstNameClass}`}
                        type="text" 
                        name="firstName" 
                        placeholder="First Name *" 
                        onInput={e => changeValue(e.target.value, 'firstName')}
                    />
                    <input 
                        className={`inputLastName ${lastNameClass}`}
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name *" 
                        onInput={e => changeValue(e.target.value, 'lastName')}
                    />
                </span><br/>
                <input  
                    className={`inputEmail2 ${emailClass}`}
                    type="text" 
                    name="email" 
                    placeholder="Email Address *" 
                    onInput={e => changeValue(e.target.value, 'email')}
                /><br/>
                <input  
                    className={`inputPassword2 ${passwordClass}`}
                    type="text" 
                    name="password" 
                    placeholder="Password *" 
                    onInput={e => changeValue(e.target.value, 'password')}
                />
                <label className="container1">
                    <input 
                        type="checkbox" 
                        onChange={e => turnOnOffCheckBox(!checkBox)}
                    />
                    I want to receive inspiration, marketing <br/>
                    promotions and update via email.
                    <span className="checkmark1"></span>
                </label>   
                <button className='signUpBtn' type="submit" onClick={onButtonClick}>
                    SIGN UP
                </button>
                <div className="linkAnotherPage2">
                    <Link to="/sign-in">Already have an account? Sign in</Link>
                </div>
                <label className="copyright">
                    Copyright © Your Website 2020.
                </label>           
            </form> 
        </div>
    )
}

export default withRouter(SignUp);
