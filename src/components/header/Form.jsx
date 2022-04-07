
import React from 'react'
import { FormContainer, FoodInput, Button, Select } from './HeaderStyles'

const Form = () => {
  return (
    <FormContainer>
        <FoodInput type="text" placeholder="Search"/>
        <Button type="submit" placeholder="Search">Search</Button>

        <Select name="mealTypes">Search</Select>
    </FormContainer>
  )
}

export default Form