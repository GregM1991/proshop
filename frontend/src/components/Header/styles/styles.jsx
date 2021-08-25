import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    gap: 20px;
    align-items: center;
    height: 80px;
    background: ${theme.navbar.background};
    color: #fff;
    padding: 10px 40px;

    & > * {
      cursor: pointer;
    }
  `}
`;

export const Logo = styled.header`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 32px;
    color: ${theme.logo.color};
  `}
`;

export const LinksContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 40px;
  color: #fff;
`;

export const NavLink = styled.header`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 16px;
    transition: color 0.5s ease-out;

    &:hover {
      transition: color 0.1s;
      color: ${theme.navLink.hover};
    }

    & > i {
      margin-right: 10px;
    }
  `}
`;
