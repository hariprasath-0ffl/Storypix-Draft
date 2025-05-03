import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  HowItWorksSection, 
  HowItWorksContainer, 
  SectionHeading, 
  SectionTitle, 
  SectionSubtitle,
  StepsContainer,
  Step,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  DemoContainer
} from './styles';

const steps = [
  {
    number: '01',
    title: 'Enter Your Prompt',
    description: 'Start by describing the type of story you want to create. Include details about characters, setting, genre, or plot elements.'
  },
  {
    number: '02',
    title: 'Customize Options',
    description: 'Select additional parameters like tone, length, language complexity, or target audience to fine-tune your story generation.'
  },
  {
    number: '03',
    title: 'Generate Your Story',
    description: 'Our AI processes your inputs and creates a complete, coherent story in seconds, ready for you to read or share.'
  },
  {
    number: '04',
    title: 'Edit & Refine',
    description: 'Make any desired changes to your generated story using our intuitive editor, then save or export in your preferred format.'
  }
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HowItWorksSection id="how-it-works">
      <HowItWorksContainer>
        <SectionHeading>
          <SectionTitle>How It Works</SectionTitle>
          <SectionSubtitle>
            Makes story  simple and enjoyable
          </SectionSubtitle>
        </SectionHeading>
        
        <StepsContainer ref={ref}>
          {steps.map((step, index) => (
            <Step key={index} inView={inView} delay={index * 0.1}>
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </Step>
          ))}
        </StepsContainer>
        
        <DemoContainer inView={inView}>
      
        </DemoContainer>
      </HowItWorksContainer>
    </HowItWorksSection>
  );
};

export default HowItWorks;