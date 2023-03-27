import { Suspense } from 'react';
// import { NavLink  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { NavBar, NavLinkStyled,  NavWrapper } from './Header.styled';

export const Header = () => {
  return (
    <>
      <NavBar>
        < NavWrapper>
          <NavLinkStyled to="/">
            Home
          </NavLinkStyled >
          <NavLinkStyled  to="/movies">Movies</NavLinkStyled >
        </ NavWrapper>
      </NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
