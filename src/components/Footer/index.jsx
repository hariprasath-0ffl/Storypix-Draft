import React from 'react';
import { 
  FooterSection,
  FooterContainer,
  FooterGrid,
  FooterColumn,
  FooterLogo,
  FooterDescription,
  FooterHeading,
  FooterLinks,
  FooterLink,
  SocialLinks,
  SocialLink,
  BottomBar,
  Copyright,
  LegalLinks,
  LegalLink
} from './styles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterGrid>
          <FooterColumn isLarge>
            <FooterLogo>Storypix<span>.ai</span></FooterLogo>
            <FooterDescription>
              Storypix.ai is an AI-powered story generator that helps writers, 
              marketers, educators, and creatives craft compelling stories in seconds.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Product</FooterHeading>
            <FooterLinks>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">API</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Updates</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Resources</FooterHeading>
            <FooterLinks>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Tutorials</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Success Stories</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Company</FooterHeading>
            <FooterLinks>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>
        
        <BottomBar>
          <Copyright>© {new Date().getFullYear()} Storypix.ai. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink href="#">Terms</LegalLink>
            <LegalLink href="#">Privacy</LegalLink>
            <LegalLink href="#">Cookies</LegalLink>
          </LegalLinks>
        </BottomBar>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;