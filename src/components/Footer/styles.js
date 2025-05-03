import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: ${props => props.theme.colors.neutral[900]};
  color: ${props => props.theme.colors.neutral[100]};
  padding-top: ${props => props.theme.space[10]};
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${props => props.theme.space[8]};
  margin-bottom: ${props => props.theme.space[8]};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  ${props => props.isLarge && `
    grid-column: span 2;
    
    @media (max-width: ${props.theme.breakpoints.md}) {
      grid-column: span 1;
    }
  `}
`;

export const FooterLogo = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[4]};
  
  span {
    color: ${props => props.theme.colors.primary[500]};
    font-weight: ${props => props.theme.fontWeights.medium};
  }
`;

export const FooterDescription = styled.p`
  color: ${props => props.theme.colors.neutral[400]};
  margin-bottom: ${props => props.theme.space[4]};
  line-height: 1.6;
  max-width: 400px;
`;

export const FooterHeading = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[4]};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[2]};
`;

export const FooterLink = styled.a`
  color: ${props => props.theme.colors.neutral[400]};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    color: ${props => props.theme.colors.primary[400]};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.space[3]};
  margin-top: ${props => props.theme.space[4]};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.neutral[800]};
  color: ${props => props.theme.colors.white};
  transition: all ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[500]};
    transform: translateY(-2px);
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space[5]} 0;
  border-top: 1px solid ${props => props.theme.colors.neutral[800]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.space[3]};
    align-items: flex-start;
  }
`;

export const Copyright = styled.p`
  color: ${props => props.theme.colors.neutral[500]};
  font-size: ${props => props.theme.fontSizes.sm};
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.space[4]};
`;

export const LegalLink = styled.a`
  color: ${props => props.theme.colors.neutral[500]};
  font-size: ${props => props.theme.fontSizes.sm};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    color: ${props => props.theme.colors.primary[400]};
  }
`;