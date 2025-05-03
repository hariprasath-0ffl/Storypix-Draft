import styled from 'styled-components';


export const HowItWorksSection = styled.section`
  padding: ${props => props.theme.space[10]} 0;
  background-color: ${props => props.theme.colors.neutral[50]};
  position: relative;
  overflow: hidden;
`;

export const HowItWorksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]};
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.space[8]};
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

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[6]};
  max-width: 650px;
  margin-right: auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateX(0)' : 'translateX(-20px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${props => props.delay}s;
`;

export const StepNumber = styled.div`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary[500]};
  margin-right: ${props => props.theme.space[4]};
  line-height: 1;
`;

export const StepContent = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.neutral[900]};
  margin-bottom: ${props => props.theme.space[2]};
`;

export const StepDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.neutral[600]};
  line-height: 1.6;
  margin: 0;
`;

export const DemoContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 45%;
  opacity: ${props => props.inView ? 1 : 0};
  transition: opacity 0.8s ease-out;
  transition-delay: 0.4s;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: ${props => props.theme.space[8]} auto 0;
    transform: none;
    top: auto;
    right: auto;
  }
`;

