import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  CTASection,
  CTAContainer,
  CTABox,
  CTAContent,
  CTAHeading,
  CTAText,
  CTAForm,
  CTAInput,
  CTAButton,
  CTAImage
} from './styles';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <CTASection>
      <CTAContainer>
        <CTABox ref={ref} inView={inView}>
          <CTAContent>
            <CTAHeading>Start Creating Amazing Stories Today</CTAHeading>
            <CTAText>
              Join thousands of writers, marketers, and educators who have transformed their storytelling with Storypix.ai.
            </CTAText>
            <CTAForm>
              <CTAInput type="email" placeholder="Enter your email" />
              <CTAButton>Get Started Free</CTAButton>
            </CTAForm>
          </CTAContent>
          
          <CTAImage 
            src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Start creating with Storypix.ai" 
          />
        </CTABox>
      </CTAContainer>
    </CTASection>
  );
};

export default CTA;