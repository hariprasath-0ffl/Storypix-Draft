import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FAQSection,
  FAQContainer,
  SectionHeading,
  SectionTitle,
  SectionSubtitle,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  MoreQuestionsContainer,
  MoreQuestionsText,
  ContactButton
} from './styles';

const faqItems = [
  {
    question: "How does Storypix.ai generate stories?",
    answer: "Storypix.ai uses advanced natural language processing and machine learning algorithms to understand your prompts and generate cohesive, creative stories. Our AI has been trained on diverse literary styles and genres to produce high-quality, original content that matches your specific requirements."
  },
  {
    question: "Can I edit the stories after they're generated?",
    answer: "Absolutely! All stories can be fully edited after generation. Our intuitive editor allows you to modify characters, plot elements, settings, or any other aspect of your story until it perfectly matches your vision."
  },
  {
    question: "Do I own the copyright to stories created with Storypix.ai?",
    answer: "Yes, you retain full ownership and copyright of all stories generated using our platform. You can publish, share, or sell these stories as your own creative work without any restrictions from us."
  },
  {
    question: "What genres and languages are supported?",
    answer: "Storypix.ai supports all major fictional genres including fantasy, sci-fi, romance, mystery, horror, children's stories, and more. Currently, we generate stories in English, Spanish, French, German, and Italian, with more languages planned for the future."
  },
  {
    question: "How long can the generated stories be?",
    answer: "Story length depends on your subscription plan. Free accounts can generate stories up to 1,000 words, Standard accounts up to 5,000 words, and Premium accounts can create stories up to 10,000 words or longer through our chapter-by-chapter generation feature."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. Your access will continue until the end of your current billing period, and you won't be charged again afterward."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <FAQContainer>
        <SectionHeading>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            Find answers to common questions about Storypix.ai
          </SectionSubtitle>
        </SectionHeading>
        
        <AccordionContainer ref={ref}>
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index}
              inView={inView}
              delay={index * 0.1}
            >
              <AccordionHeader 
                onClick={() => toggleAccordion(index)}
                isActive={activeIndex === index}
              >
                {item.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </AccordionHeader>
              <AccordionContent isActive={activeIndex === index}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
        
        <MoreQuestionsContainer inView={inView}>
          <MoreQuestionsText>Have more questions?</MoreQuestionsText>
          <ContactButton>Contact Us</ContactButton>
        </MoreQuestionsContainer>
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;