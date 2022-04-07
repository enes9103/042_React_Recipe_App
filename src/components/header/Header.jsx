
import React from 'react'
import { HeaderContainer, MainHeader} from './HeaderStyles';
import Form from './Form';


const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form/>
    </HeaderContainer>
  )
}

export default Header