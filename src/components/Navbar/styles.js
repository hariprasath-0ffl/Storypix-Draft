import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: ${props => props.theme.zIndices.banner};
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  background-color: ${props => props.isScrolled ? props.theme.colors.white : 'transparent'};
  box-shadow: ${props => props.isScrolled ? props.theme.shadows.md : 'none'};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 ${props => props.theme.space[4]};
  max-width: 1200px;
  margin: 0 auto;
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Logo = styled.h1`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.neutral[900]};
  margin: 0;
  
  span {
    color: ${props => props.theme.colors.primary[500]};
    font-weight: ${props => props.theme.fontWeights.medium};
  }
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  margin: 0 ${props => props.theme.space[4]};
  color: ${props => props.theme.colors.neutral[700]};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-decoration: none;
  position: relative;
  transition: color ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary[500]};
    transition: width ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary[500]};
    
    &:after {
      width: 100%;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.neutral[800]};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[4]}`};
  border-radius: ${props => props.theme.radii.md};
  cursor: pointer;
  margin-right: ${props => props.theme.space[2]};
  transition: all ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    color: ${props => props.theme.colors.primary[500]};
    background-color: ${props => props.theme.colors.primary[50]};
  }
`;

export const SignupButton = styled.button`
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[4]}`};
  border-radius: ${props => props.theme.radii.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const MobileMenuToggle = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${props => props.theme.zIndices.dropdown};
  
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.colors.neutral[800]};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndices.sticky};
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.space[6]};
`;

export const MobileMenuItem = styled.a`
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => props.isButton ? props.theme.colors.white : props.theme.colors.neutral[800]};
  background: ${props => props.isButton ? props.theme.colors.primary[500] : 'transparent'};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.xl};
  text-decoration: none;
  padding: ${props => props.isButton ? `${props.theme.space[3]} ${props.theme.space[6]}` : 0};
  border-radius: ${props => props.isButton ? props.theme.radii.md : 0};
  width: ${props => props.isButton ? 'auto' : '100%'};
  text-align: center;
  transition: all ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    color: ${props => props.isButton ? props.theme.colors.white : props.theme.colors.primary[500]};
    background: ${props => props.isButton ? props.theme.colors.primary[600] : 'transparent'};
  }
`;