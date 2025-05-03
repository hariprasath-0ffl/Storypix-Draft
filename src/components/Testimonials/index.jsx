import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  TestimonialsSection,
  TestimonialsContainer,
  SectionHeading,
  SectionTitle,
  SectionSubtitle,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  TestimonialText,
  TestimonialAuthor,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  AuthorImage
} from './styles';

const testimonials = [
  {
    text: "Storypix.ai has been a game-changer for my children's book series. What used to take me days now takes minutes, and the quality is consistently excellent.",
    author: {
      name: "Sarah Johnson",
      role: "Children's Book Author",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    text: "As a marketing director, I need to create engaging content constantly. Storypix.ai helps me generate creative brand stories that resonate with our audience.",
    author: {
      name: "Mark Thompson",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    text: "The customization options are incredible. I can specify exactly what I want in my story, and the AI delivers results that feel personally crafted for me.",
    author: {
      name: "Elena Rodriguez",
      role: "Content Creator",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <SectionHeading>
          <SectionTitle>What Our Users Say</SectionTitle>
          <SectionSubtitle>
            Hear from storytellers who have transformed their creative process with Storypix.ai
          </SectionSubtitle>
        </SectionHeading>
        
        <TestimonialsGrid ref={ref}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              inView={inView}
              delay={index * 0.1}
            >
              <QuoteIcon>❝</QuoteIcon>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorImage 
                  src={testimonial.author.image} 
                  alt={testimonial.author.name} 
                />
                <AuthorInfo>
                  <AuthorName>{testimonial.author.name}</AuthorName>
                  <AuthorRole>{testimonial.author.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;