import React, { useState,
    useCallback, useContext  } from 'react';
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import app from '../../base';
import { AuthContext } from '../../Auth';
import './SignIn.css';

const SignIn = ({ history }) => {
    const [checkBox, turnOnOffCheckBox] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailClass, setEmailClass] = useState('');
    const [passwordClass, setPasswordClass] = useState('');

    const handleLogin = useCallback(
        async event => {
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email, password);             
            history.push("/product-list");
          } catch (error) {
            alert(error);
          }
        },
        [history, email, password]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/product-list" />;
      }

    const checkEmailErr = () => {
        const reg = /^...+@..+\...+$/;
        return !reg.test(email);
    };

    const checkPasswordErr = () => {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return !reg.test(password);
    };

    const checkValidationEmail = () => {
        if (checkEmailErr() && email.length > 0) {
            setEmailClass('errorInput');
        } else if(!checkEmailErr() && email.length > 0) {
            setEmailClass('correctInput');
        }
        else {
            setEmailClass('');
        }
    };

    const checkValidationPassword = () => {
        if (checkPasswordErr() && password.length > 0) {
            setPasswordClass('errorInput');
        } else if(!checkPasswordErr() && password.length > 0){
            setPasswordClass('correctInput');
        } else {
            setPasswordClass('');
        }
    };

    const changeEmail = (e) =>{
        setEmail(e.target.value);
        checkValidationEmail();
    }

    const changePassword = (e) =>{
        setPassword(e.target.value);
        checkValidationPassword();
    }

    const onButtonClick = () => {
        if (!checkEmailErr() && !checkPasswordErr()) {
            if (checkBox){
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            }
            console.log('all is goood');
        } else {
          console.log('Вы ввели неправильные данные');
        }
    }

    return (
        <div className="form1">   
            <form className="signIn" onSubmit={handleLogin}>
            <div className="ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/></svg></div>
                <label>
                    Sign in
                </label>
                
                <input 
                    type="text" 
                    name="email"
                    className={`inputEmail ${emailClass}`} 
                    placeholder="Email Address *" 
                    onChange={changeEmail}
                    defaultValue={email}
                />
                <input 
                    type="text" 
                    name="pass" 
                    className={`inputPassword ${passwordClass}`}
                    placeholder="Password *" 
                    onChange={changePassword}
                    defaultValue={password}
                />                
                
                <label className="container">
                    <input 
                        type="checkbox" 
                        onChange={e => turnOnOffCheckBox(!checkBox)}
                    />
                        Remember me
                    <span className="checkmark"></span>
                </label>   
                
                <button className='signInBtn' type="submit" onClick={onButtonClick}> SIGN IN</button>

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

export default withRouter(SignIn);
