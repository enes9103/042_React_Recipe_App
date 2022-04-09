
import React from 'react'
import { FormContainer, Header, LoginContainer,StyledButton,StyledForm,StyledImg, StyledInput } from './LoginStyles'
import meal from '../../assets/meal.svg';
const Login = () => {

const siteyeGir=(e)=>{
e.preventDefault();

window.location.href="/home";


}


  return (
   <LoginContainer>
<FormContainer>
<StyledImg src={meal} />
<Header> {"<Clarusway/>"}Recipe </Header>

<StyledForm  onSubmit={siteyeGir}  >

<StyledInput type="text" placeholder="username" required/>
<StyledInput type="password" placeholder="password" required/>

<StyledButton type="submit">Login</StyledButton>
  
</StyledForm>



</FormContainer>

   </LoginContainer>
  )
}

export default Login