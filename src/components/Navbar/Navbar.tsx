import React from "react";
import { Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import {
  NavbarContainer,
  NavbarRightSection,
  StyledLink,
} from "./Navbar.style";

const Navbar: React.FC = () => {
  
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userSession");
    navigate("/InvoiceAssessement");
  };
  return (
    <NavbarContainer position="static">
      <Toolbar>
        <NavbarRightSection>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <IconButton edge="end" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>

          <IconButton edge="end" color="inherit" aria-label="logout">
            <StyledLink to="/" onClick={()=>handleLogout()}>
              <LogoutIcon />
            </StyledLink>
          </IconButton>
        </NavbarRightSection>
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
