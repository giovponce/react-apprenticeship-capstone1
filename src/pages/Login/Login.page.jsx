import React from 'react';
import { Button } from '../../utils/StyledComponents/Button';
import { StyledForm, StyledInput } from '../../utils/StyledComponents/StyledForm';
import { FlexContainerCentered } from '../../utils/StyledComponents/FlexContainer';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  
  const { login } = useAuth();


  function authenticate(event) {
    event.preventDefault();
    
    let username = event.target.childNodes[0].value;
    let password = event.target.childNodes[1].value;

    if(username === 'wizeline' && password === 'Rocks!') {
      event.preventDefault();
      login();
      navigate('/');
      window.location.reload(false);
    }else{
      alert('Wrong username or password');
    }
  }

  return (
    <FlexContainerCentered>
      <StyledForm onSubmit={authenticate}>
        <StyledInput required type="text" placeholder="Username"></StyledInput>
        <StyledInput required type="password" placeholder="Password"></StyledInput>
      <Button data-testid="loginBtn" type="submit">Login</Button>
      </StyledForm>
    </FlexContainerCentered>
  );
}

export default LoginPage;
