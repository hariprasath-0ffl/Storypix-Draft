import styled from 'styled-components';

export const FAQSection = styled.section`
  padding: ${props => props.theme.space[10]} 0;
  background-color: ${props => props.theme.colors.white};
`;

export const FAQContainer = styled.div`
  max-width: 900px;
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

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[8]};
`;

export const AccordionItem = styled.div`
  border: 1px solid ${props => props.theme.colors.neutral[200]};
  border-radius: ${props => props.theme.radii.md};
  overflow: hidden;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(20px)'};
  transition-delay: ${props => props.delay}s;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

export const AccordionHeader = styled.div`
  padding: ${props => props.theme.space[4]};
  background-color: ${props => props.isActive ? props.theme.colors.neutral[50] : props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.isActive ? props.theme.colors.primary[700] : props.theme.colors.neutral[800]};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
  
  span {
    font-size: ${props => props.theme.fontSizes['2xl']};
    line-height: 1;
    color: ${props => props.isActive ? props.theme.colors.primary[500] : props.theme.colors.neutral[500]};
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.neutral[50]};
  }
`;

export const AccordionContent = styled.div`
  padding: ${props => props.isActive ? props.theme.space[4] : '0 ' + props.theme.space[4]};
  max-height: ${props => props.isActive ? '1000px' : '0'};
  opacity: ${props => props.isActive ? 1 : 0};
  overflow: hidden;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  line-height: 1.6;
  color: ${props => props.theme.colors.neutral[600]};
`;

export const MoreQuestionsContainer = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.space[8]};
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: 0.6s;
`;

export const MoreQuestionsText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.neutral[700]};
  margin-bottom: ${props => props.theme.space[4]};
`;

export const ContactButton = styled.button`
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[3]} ${props.theme.space[6]}`};
  border-radius: ${props => props.theme.radii.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  &:active {
    transform: translateY(0);
  }
`;