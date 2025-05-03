import styled from 'styled-components';

export const PricingSection = styled.section`
  padding: ${props => props.theme.space[10]} 0;
  background-color: ${props => props.theme.colors.white};
`;

export const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]};
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.space[6]};
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.neutral[900]};
  margin-bottom: ${props => props.theme.space[3]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.neutral[600]};
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const PricingToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.space[8]};
  background-color: ${props => props.theme.colors.neutral[100]};
  padding: ${props => props.theme.space[1]};
  border-radius: ${props => props.theme.radii.full};
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const ToggleButton = styled.button`
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[4]}`};
  border-radius: ${props => props.theme.radii.full};
  background-color: ${props => props.active ? props.theme.colors.white : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary[500] : props.theme.colors.neutral[600]};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  cursor: pointer;
  border: none;
  box-shadow: ${props => props.active ? props.theme.shadows.sm : 'none'};
  
  &:hover {
    color: ${props => props.active ? props.theme.colors.primary[500] : props.theme.colors.neutral[800]};
  }
`;

export const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.space[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

export const PricingCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.space[6]};
  box-shadow: ${props => props.popular ? props.theme.shadows.lg : props.theme.shadows.md};
  border: ${props => props.popular ? `2px solid ${props.theme.colors.primary[500]}` : `1px solid ${props.theme.colors.neutral[200]}`};
  position: relative;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(20px)'};
  transition-delay: ${props => props.delay}s;
  
  ${props => props.popular && `
    transform: ${props.inView ? 'scale(1.05)' : 'scale(1) translateY(20px)'};
    z-index: 1;
    
    @media (max-width: ${props.theme.breakpoints.lg}) {
      transform: ${props.inView ? 'translateY(0)' : 'translateY(20px)'};
      scale: 1;
    }
  `}
  
  &:hover {
    transform: ${props => props.popular ? 'scale(1.07)' : 'translateY(-5px)'};
    box-shadow: ${props => props.theme.shadows.xl};
    
    @media (max-width: ${props => props.theme.breakpoints.lg}) {
      transform: translateY(-5px);
    }
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[1]} ${props.theme.space[3]}`};
  border-radius: ${props => props.theme.radii.full};
`;

export const PlanName = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.neutral[900]};
  margin-bottom: ${props => props.theme.space[4]};
  text-align: center;
`;

export const PlanPrice = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.neutral[900]};
  text-align: center;
  margin-bottom: ${props => props.theme.space[5]};
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const PricePeriod = styled.span`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.neutral[600]};
  margin-left: ${props => props.theme.space[1]};
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${props => props.theme.space[6]} 0;
`;

export const PlanFeature = styled.li`
  padding: ${props => props.theme.space[2]} 0;
  color: ${props => props.theme.colors.neutral[700]};
  font-size: ${props => props.theme.fontSizes.md};
`;

export const PlanCTA = styled.button`
  width: 100%;
  background-color: ${props => props.popular ? props.theme.colors.primary[500] : props.theme.colors.white};
  color: ${props => props.popular ? props.theme.colors.white : props.theme.colors.primary[500]};
  border: 2px solid ${props => props.theme.colors.primary[500]};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.radii.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    background-color: ${props => props.popular ? props.theme.colors.primary[600] : props.theme.colors.primary[50]};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  &:active {
    transform: translateY(0);
  }
`;