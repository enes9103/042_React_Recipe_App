import React from "react";
import { FormContainer, FoodInput, Button, Select } from "./HeaderStyles";

const Form = ({ setQuery, getData, mealTypes, setMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Normal şartlarda search linkine tıklandığında, form gönderilir, (breakfast tıklanmış gibi). biz aşağıdaki şekilde bir yapı kullanırsak ve tıklanma olayında e.preventDefault(); dersek  nesnenin o anki işlevini iptal edip devamında kod varsa işlemeye devam edecektir alttaki örneğimizde görüldüğü gibi e.preventDefault() satırından sonra ki kod satırlarına geçer
    getData();

    // mantıken buraya yazılmalı, butona da yazarsak  api yi 2 kere çağırmış oluyor. console da burası açıkken bak
  };

  return (
    /* 3 arama kutusunun toplandığı kutu */
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* arama yapılacak ürünün yazıldığı input */}
      <Button
        type="submit"

        // onClick={getData} yazarsak 2 kere veri getirir. zaten bu buton submit işlemi yapacak ve form un onsubmit ini tetikleyecek
      >
        Search
      </Button>
      {/* ya butona tıklayınca getdata çalıştırsın ya form u handlesubmit e yolla, butonu handlesubmit e yollasanda olur */}
      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {/* onChange ile setMeal e attım option la browser da göstereceğiz */}
        {mealTypes.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;