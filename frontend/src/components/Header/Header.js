import React from "react";
import {
  HeaderContainer,
  Logo,
  LinksContainer,
  NavLink,
} from "./styles/styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="/">ProShop</Logo>
      <LinksContainer>
        <NavLink href="/cart">
          <i className="fas fa-shopping-cart"></i>Cart
        </NavLink>
        <NavLink href="/login">
          <i className="fas fa-user"></i>Sign in
        </NavLink>
      </LinksContainer>
    </HeaderContainer>
  );
};
