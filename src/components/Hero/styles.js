import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeroSection = styled.section`
  padding: ${props => props.theme.space[12]} 0 ${props => props.theme.space[10]};
  background: linear-gradient(135deg, ${props => props.theme.colors.neutral[100]}, ${props => props.theme.colors.white});
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space[11]} 0 ${props => props.theme.space[8]};
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  & > * {
    animation: ${fadeInUp} 0.6s ease-out forwards;
    opacity: 0;
  }
  
  & > *:nth-child(1) {
    animation-delay: 0.1s;
  }
  
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  & > *:nth-child(3) {
    animation-delay: 0.5s;
  }
  
  & > *:nth-child(4) {
    animation-delay: 0.7s;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 100%;
    margin-bottom: ${props => props.theme.space[8]};
  }
`;

export const HeroBadge = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary[100]};
  color: ${props => props.theme.colors.primary[700]};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[1]} ${props.theme.space[3]}`};
  border-radius: ${props => props.theme.radii.full};
  margin-bottom: ${props => props.theme.space[4]};
`;

export const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['6xl']};
  line-height: 1.1;
  margin-bottom: ${props => props.theme.space[4]};
  background: linear-gradient(90deg, ${props => props.theme.colors.primary[700]}, ${props => props.theme.colors.primary[500]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.theme.fontSizes['5xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.neutral[600]};
  margin-bottom: ${props => props.theme.space[6]};
  line-height: 1.6;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.space[4]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[3]} ${props.theme.space[6]}`};
  border-radius: ${props => props.theme.radii.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  border: none;
  box-shadow: ${props => props.theme.shadows.md};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    max-width: 300px;
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.primary[500]};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[3]} ${props.theme.space[6]}`};
  border-radius: ${props => props.theme.radii.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  border: 2px solid ${props => props.theme.colors.primary[500]};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[50]};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    max-width: 300px;
  }
`;

export const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateX(0)' : 'translateX(30px)'};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: 0.3s;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    justify-content: center;
    width: 100%;
    max-width: 600px;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.xl};
  animation: ${fadeInRight} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;