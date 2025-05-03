import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Nav, 
  NavContainer, 
  LogoContainer, 
  Logo, 
  MenuItems, 
  MenuItem, 
  ButtonGroup, 
  LoginButton, 
  SignupButton, 
  MobileMenuToggle,
  MobileMenu,
  MobileMenuItems,
  MobileMenuItem
} from './styles';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer>
        <LogoContainer href="/">
          <Logo>Storypix<span>.ai</span></Logo>
        </LogoContainer>
        
        <MenuItems>
          <MenuItem href="#features">Features</MenuItem>
          <MenuItem href="#how-it-works">How It Works</MenuItem>
          <MenuItem href="#pricing">Pricing</MenuItem>
          <MenuItem href="#faq">FAQ</MenuItem>
        </MenuItems>
        
        <ButtonGroup>
          <LoginButton as={Link} to="/login">Log In</LoginButton>
          <SignupButton as={Link} to="/signup">Sign Up Free</SignupButton>
        </ButtonGroup>
        
        <MobileMenuToggle onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuToggle>
      </NavContainer>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuItems>
          <MobileMenuItem href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</MobileMenuItem>
          <MobileMenuItem href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</MobileMenuItem>
          <MobileMenuItem href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</MobileMenuItem>
          <MobileMenuItem href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</MobileMenuItem>
          <MobileMenuItem href="/login" onClick={() => setIsMobileMenuOpen(false)}>Log In</MobileMenuItem>
          <MobileMenuItem href="/signup" onClick={() => setIsMobileMenuOpen(false)} isButton>Sign Up Free</MobileMenuItem>
        </MobileMenuItems>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;