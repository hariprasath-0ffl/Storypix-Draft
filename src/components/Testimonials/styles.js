import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  padding: ${props => props.theme.space[10]} 0;
  background-color: ${props => props.theme.colors.neutral[50]};
`;

export const TestimonialsContainer = styled.div`
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

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.space[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.space[6]};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(20px)'};
  transition-delay: ${props => props.delay}s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

export const QuoteIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['5xl']};
  color: ${props => props.theme.colors.primary[200]};
  line-height: 1;
  margin-bottom: ${props => props.theme.space[2]};
`;

export const TestimonialText = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.neutral[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.space[5]};
  font-style: italic;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${props => props.theme.space[3]};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h4`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.neutral[900]};
  margin: 0;
`;

export const AuthorRole = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.neutral[600]};
  margin: 0;
`;