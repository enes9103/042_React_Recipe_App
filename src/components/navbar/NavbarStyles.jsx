
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { ExternalLink } from "react-external-link";
export const Nav = styled.div`
  /* açık yeşil olan navbar */
  padding: 0 2rem;
  display: flex;
  justify-content: space-between; //yatayda aralıklı objeler halinde ortala
  align-items: center; // dikeyde ortala
  flex-wrap: wrap;
  /* Varsayılan olarak esnek öğeler tek bir satıra sığmaya çalışırlar. Gerektiğinde birden fazla satıra yaymak için bu özelliği kullanabilirsiniz */
  background: #e1f1dd;
  border-radius: 0 0 10px 10px;
  height: 75px;
  font-size: 2rem;
`;
export const Hamburger = styled.div`
  display: none;
  /* Bir öğeyi gizleme özelliği  Öğe gizlenecek ve sayfa, öğe orada değilmiş gibi alttaki stiller yok gibi görüntülenecektir: */
  flex-direction: column;
  /*çizgiler üstüste hamburger gibi */
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: #00adb5;
    /* margin-left: 250px; */
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) /* ekran 768 den küçülünce hamburger şekli gözüksün */ {
    display: flex;
    /* kapsayıcı içerisindeki öğelere artık esneklik vermek için, artık gözükmesi için*/
  }
`;

export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime ... tek tek about vs yazanların özellikleri */

  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  /* kelimelerin altı çizili olmasın */
  color: #02475e;
  
  /* transition: all 0.3s ease-in; */
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    /* hamburger meydana çıktığında (tıklanınca açılan merdiven, Menu deki ölçüyle aynı olmalı) */
    /* ekran küçülünce alttaki stiller olsun */
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 91%;
  }
`;
export const Menu = styled.div`
  /* navbardaki 3 kelime about ...hepsini içine alan sarmalın (kutunun ) özellikleri*/
background: #e1f1dd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* diğer stillere göre ayarla kendini, bunu yazmazsak food app in altında kalacak */
  /* 3 kelime  açılınca üstteki özelliklerde olsun*/
  @media (max-width: 768px) {
    overflow: hidden;
    /* uzun yazı olurda taşarsa gizle */
    flex-direction: column;
    width: 100%;
    /* gap:2px; */
    /* props olarak, osman=true geldi mesela */
    max-height: ${({openMenu}) => (openMenu ? "300px" : "0")};
    /* 3 çizgiye ilk tıklandığında 300 px açılsın, sonraki tıklamada kapansın */
    /* max-height:300px yazarsak hep açık olur */
    /* transition: max-height 0.3s ease-in; */
  }
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  i {
    font-family: "Girassol", sans-serif;
  }
  span {
    font-family: "Girassol", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;
// export const A = styled.a`
//   cursor: pointer;
//   text-align: center;
//   text-decoration: none;
//   color: #02475e;
//   transition: all 0.3s ease-in;
//   font-size: 2rem;
//   font-family: "Girassol", sans-serif;
//   &:hover {
//     color: #00adb5;
//     font-weight: bold;
//   }
//   @media (max-width: 768px) {
//     /* hamburger meydana çıktığında (tıklanınca açılan merdiven, Menu deki ölçüyle aynı olmalı) */
//     background-color: #e1f1dd;
//     border: 1px solid #00adb5;
//     border-radius: 10px;
//     width: 100%;
//     height: 67px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;
// export const ExtrnlLink = styled(ExternalLink)`
//   cursor: pointer;
//   text-align: center;
//   text-decoration: none;
//   color: #02475e;
//   transition: all 0.3s ease-in;
//   font-size: 2rem;
//   font-family: "Girassol", sans-serif;
//   &:hover {
//     color: #00adb5;
//     font-weight: bold;
//   }
//   @media (max-width: 768px) {
//     /* hamburger meydana çıktığında (tıklanınca açılan merdiven, Menu deki ölçüyle aynı olmalı) */
//     background-color: #e1f1dd;
//     border: 1px solid #00adb5;
//     border-radius: 10px;
//     width: 100%;
//     height: 67px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;