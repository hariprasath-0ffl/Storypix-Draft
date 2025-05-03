import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  PricingSection, 
  PricingContainer, 
  SectionHeading, 
  SectionTitle, 
  SectionSubtitle,
  PricingToggle,
  ToggleButton,
  PricingCards,
  PricingCard,
  PopularBadge,
  PlanName,
  PlanPrice,
  PricePeriod,
  PlanFeatures,
  PlanFeature,
  PlanCTA
} from './styles';

const pricingPlans = [
  {
    name: 'Free',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    features: [
      '5 stories per month',
      'Basic customization',
      'Export to TXT',
      'Community support'
    ],
    buttonText: 'Start Free',
    popular: false
  },
  {
    name: 'Standard',
    monthlyPrice: '$12',
    yearlyPrice: '$99',
    features: [
      '50 stories per month',
      'Advanced customization',
      'Export to multiple formats',
      'Priority support',
      'Story templates'
    ],
    buttonText: 'Get Started',
    popular: true
  },
  {
    name: 'Premium',
    monthlyPrice: '$29',
    yearlyPrice: '$249',
    features: [
      'Unlimited stories',
      'Full customization',
      'All export formats',
      'Priority support',
      'Story templates',
      'API access',
      'White-label PDFs'
    ],
    buttonText: 'Get Premium',
    popular: false
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PricingSection id="pricing">
      <PricingContainer>
        <SectionHeading>
          <SectionTitle>Simple Pricing</SectionTitle>
          <SectionSubtitle>
            Choose the plan that fits your storytelling needs
          </SectionSubtitle>
        </SectionHeading>
        
        <PricingToggle>
          <ToggleButton 
            active={!isYearly} 
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </ToggleButton>
          <ToggleButton 
            active={isYearly} 
            onClick={() => setIsYearly(true)}
          >
            Yearly (Save 30%)
          </ToggleButton>
        </PricingToggle>
        
        <PricingCards ref={ref}>
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              popular={plan.popular}
              inView={inView}
              delay={index * 0.1}
            >
              {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <PricePeriod>/{isYearly ? 'year' : 'month'}</PricePeriod>
              </PlanPrice>
              <PlanFeatures>
                {plan.features.map((feature, idx) => (
                  <PlanFeature key={idx}>✓ {feature}</PlanFeature>
                ))}
              </PlanFeatures>
              <PlanCTA popular={plan.popular}>{plan.buttonText}</PlanCTA>
            </PricingCard>
          ))}
        </PricingCards>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;