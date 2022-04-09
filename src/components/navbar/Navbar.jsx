import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";
//  import { ExternalLink } from "react-external-link";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [github, setGithub] = useState("");
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Chef Enes'>"}</i>
        <span> Recipes</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {/* hamburger o anda ne durumdaysa, tıklandığında tersi olacak, false ise true..ve sonra Menu bunu style a props la gönder */}
        {/* <GiHamburgerMenu /> */}
        <span />
        <span />
        <span />
        {/* XHTML= HTML ile hazırlanmış sayfaların tüm cihazlarda düzgün çalışması için geliştirilmiştir. Bu yüzden <span></span> şeklinde yazım (HTML), dinamik stillerin düzgün bir şekilde oluşturulmamasına,
        yeniden düzenleme işlemi sırasında hatalara, eksik bir tema desteğine
        neden olabilir ve uygulamanızı iyi bir sebep olmadan daha büyük hale
        getirebilir. */}
        {/* boş spanlar verilen stillerle çizgi yapıyor */}
      </Hamburger>

      <Menu osman={isOpen}>
        {/* buradan styles sayfasına true false durumu gidiyor,5. satırda ilk false (kapalı) başlıyor, tıklandıkça setIsOpen ile değişiyor */}
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">
          About
        </MenuLink>
        {/* hamburger tıklanınca open açılıyor, about a basınca false kapanmalı */}
        <MenuLink
          onClick={() =>
            setGithub(
              (window.location.href =
                "https://github.com/enes9103")
            )
          }
          to={github}
          target="_blank"
        >
          Github
        </MenuLink>
        {/* React-router, Tek Sayfalık Uygulama için bir yönlendirme sistemidir. Tüm
        rotaların sayfanızda tanımlanması ve uygulamanızın içinde kapsüllenmesi
        gerekir */}
        {/* <ExtrnlLink href="https://github.com/enes9103">
          Github
        </ExtrnlLink> */}
        {/* alttaki gibi stil sayfasında a tag inden türemiş A ile de bu işi yapabiliriz */}
        {/* <A href="https://github.com" target="_blank">
          Github
        </A> */}
        <MenuLink
          onClick={() => setIsOpen(!isOpen)}
          // onMouseUp= fare düğmesini bırakırken
          onMouseUp={() => sessionStorage.clear()}
          to="/"
        >
          Logout
        </MenuLink>
        {/* sessionStorage.clear()=> bunu yazmazsak sessionStorage temizlenmiyor, logout yapınca direk girilebiliyor */}
      </Menu>
    </Nav>
  );
};

export default Navbar;