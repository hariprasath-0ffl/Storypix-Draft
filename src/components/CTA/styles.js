import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CTASection = styled.section`
  padding: ${props => props.theme.space[10]} 0;
  background-color: ${props => props.theme.colors.neutral[50]};
`;

export const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]};
`;

export const CTABox = styled.div`
  display: flex;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary[600]}, ${props => props.theme.colors.primary[800]});
  border-radius: ${props => props.theme.radii.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.xl};
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const CTAContent = styled.div`
  flex: 1;
  padding: ${props => props.theme.space[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space[6]};
  }
`;

export const CTAHeading = styled.h2`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[4]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

export const CTAText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.neutral[100]};
  margin-bottom: ${props => props.theme.space[6]};
  line-height: 1.6;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

export const CTAForm = styled.form`
  display: flex;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const CTAInput = styled.input`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  font-size: ${props => props.theme.fontSizes.md};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  margin-right: ${props => props.theme.space[2]};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${props => props.theme.space[2]};
  }
`;

export const CTAButton = styled.button`
  background-color: ${props => props.theme.colors.accent[500]};
  color: ${props => props.theme.colors.white};
  padding: ${props => `${props.theme.space[3]} ${props.theme.space[6]}`};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    background-color: ${props => props.theme.colors.accent[600]};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const CTAImage = styled.img`
  width: 40%;
  object-fit: cover;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 100%;
    height: 300px;
  }
`;