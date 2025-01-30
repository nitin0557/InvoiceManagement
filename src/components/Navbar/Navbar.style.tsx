// Styled-components for the navigation bar
import styled from '@emotion/styled';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled(AppBar)`
  background-color: #1976d2; /* Customize the navbar background */
`;

export const NavbarRightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;