import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action)=>{
  if(action.type === 'USER_INPUT')
  {
    return { value: action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'BLUR')
  {
    return {value: state.value, isValid: state.value.includes('@')};
  }
    return {value: '', isValid: false};
}

const passwordReducer = (state, action)=>{
  if(action.type === 'PASSWORD_INPUT')
  {
    return { value: action.val, isValid: action.val.length > 6};
  }
  if(action.type === 'BLUR')
  {
    return {value: state.value, isValid: state.value.length > 6};
  }
    return {value: '', isValid: false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;
  useEffect(()=>{
    const validity = setTimeout(()=>{
      console.log('Checking for validity');
      setFormIsValid(emailIsValid && passwordIsValid);
    },1000);

    return ()=>{
      console.log('CleanUp')
      clearTimeout(validity);
    }  
  }, [emailIsValid, passwordIsValid]);

  

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'PASSWORD_INPUT', val: event.target.value});
    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));'
    dispatchEmail({type:'BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid = {emailState.isValid}
          label = "E-mail"
          type = "email"
          id = "email"
          value = {emailState.value}
          onChange = {emailChangeHandler}
          onBlur = {validateEmailHandler}
        />
      
        <Input
          isValid = {passwordState.isValid}
          label = "Password"
          type = "password"
          id = "password"
          value = {passwordState.value}
          onChange = {passwordChangeHandler}
          onBlur = {validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
