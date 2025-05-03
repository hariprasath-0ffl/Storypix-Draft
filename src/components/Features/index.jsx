import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FeaturesSection, 
  FeaturesContainer, 
  SectionHeading, 
  SectionTitle, 
  SectionSubtitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './styles';

const featureData = [
  {
    icon: '✨',
    title: 'AI-Powered Story Generation',
    description: 'Create unique, engaging stories with a single prompt using our advanced AI technology.'
  },
  {
    icon: '📚',
    title: 'Multiple Genre Support',
    description: 'Generate stories across various genres including children\'s tales, sci-fi, fantasy, romance, and more.'
  },
  {
    icon: '🔍',
    title: 'Customizable Elements',
    description: 'Control characters, settings, plot points, and tone to create the perfect story for your needs.'
  },
  {
    icon: '⚡',
    title: 'Instant Results',
    description: 'Get complete, ready-to-use stories in seconds, saving you hours of creative struggle.'
  },
  {
    icon: '📝',
    title: 'Edit & Refine',
    description: 'Fine-tune generated stories with our intuitive editing tools to match your exact vision.'
  },
  {
    icon: '💾',
    title: 'Save & Export',
    description: 'Save your creations in multiple formats including PDF, DOCX, or plain text for easy sharing.'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <FeaturesSection id="features">
      <FeaturesContainer>
        <SectionHeading>
          <SectionTitle>Powerful Features</SectionTitle>
          <SectionSubtitle>
            Storypix.ai combines cutting-edge AI with intuitive tools to transform how you create stories.
          </SectionSubtitle>
        </SectionHeading>
        
        <FeaturesGrid ref={ref}>
          {featureData.map((feature, index) => (
            <FeatureCard key={index} inView={inView} delay={index * 0.1}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;