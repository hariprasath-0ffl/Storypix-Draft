import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  HeroSection, 
  HeroContainer, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle,
  HeroButtons,
  PrimaryButton, 
  SecondaryButton,
  HeroImageContainer,
  HeroImage,
  HeroBadge
} from './styles';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HeroSection>
      <HeroContainer ref={ref}>
        <HeroContent inView={inView}>
          <HeroBadge>AI-Powered Story Generation</HeroBadge>
          <HeroTitle>Transform Your Ideas into Captivating Stories</HeroTitle>
          <HeroSubtitle>
            Storypix uses advanced AI to help you create engaging stories for children, 
            novels, or marketing in seconds. No more writer's block or creative limitations.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton>Try for Free</PrimaryButton>
            <SecondaryButton>See How It Works</SecondaryButton>
          </HeroButtons>
        </HeroContent>
        
        <HeroImageContainer inView={inView}>
          <HeroImage src="https://arize.com/wp-content/uploads/2023/06/Community-papers-resources-image-1200x900.png" alt="AI Story Generation" />
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;