import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [checkBox, turnOnOffCheckBox] = useState(false);
    let emailStorage = localStorage.getItem('email');
    let passwordStorage = localStorage.getItem('password');
    if (emailStorage === null){
        emailStorage = '';
    } 
    if (passwordStorage === null){
        passwordStorage = '';
    } 

    const formData = useRef({
        email: emailStorage,
        password: passwordStorage,
    });
    
    const [emailClass, setEmailClass] = useState('');
    const [passwordClass, setPasswordClass] = useState('');

    const checkEmailErr = () => {
        const reg = /^...+@..+\...+$/;
        return !reg.test(formData.current.email);
    };

    const checkPasswordErr = () => {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return !reg.test(formData.current.password);
    };

    const checkValidation = () => {
        const { email, password } = formData.current;
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
         const {
            email, password
         } = formData.current;
        if (!checkEmailErr() && !checkPasswordErr()) {
            if (checkBox){
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            }
            console.log('all is goood');
            console.log(email, password);
        } else {
          console.log('Вы ввели неправильные данные');
        }
    }

   
    
    return (
        <div className="form1">   
            <form className="signIn">
            <div className="ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/></svg></div>
                <label>
                    Sign in
                </label>
                
                <input 
                    type="text" 
                    name="email"
                    className={`inputEmail ${emailClass}`} 
                    placeholder="Email Address *" 
                    onInput={e => changeValue(e.target.value, 'email')}
                    defaultValue={formData.current.email}
                />
                <input 
                    type="text" 
                    name="pass" 
                    className={`inputPassword ${passwordClass}`}
                    placeholder="Password *" 
                    onInput={e => changeValue(e.target.value, 'password')}
                    defaultValue={formData.current.password}
                />                
                
                <label className="container">
                    <input 
                        type="checkbox" 
                        onChange={e => turnOnOffCheckBox(!checkBox)}
                    />
                        Remember me
                    <span className="checkmark"></span>
                </label>   
                
                <Link to='/product-list'>
                    <button className='signInBtn' type="button" onClick={onButtonClick}> SIGN IN</button>
                </Link>

                <span className="linkAnotherPage">
                    <Link className="link1" to="/sign-in">Forgot password?</Link>
                    <Link className="link2" to="/sign-up">Don't have an account? Sign Up</Link>              
                </span>

                <label className="copyright">
                    Copyright © Your Website 2020.
                </label>
            </form> 
        </div>  
        
    )
}

export default SignIn
