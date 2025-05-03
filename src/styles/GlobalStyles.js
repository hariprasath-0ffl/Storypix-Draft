import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.neutral[800]};
    line-height: 1.5;
    background-color: ${props => props.theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    margin-bottom: ${props => props.theme.space[4]};
    line-height: 1.2;
    color: ${props => props.theme.colors.neutral[900]};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes['5xl']};
    font-weight: ${props => props.theme.fontWeights.bold};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['4xl']};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes['4xl']};
    font-weight: ${props => props.theme.fontWeights.bold};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['3xl']};
    }
  }

  h3 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    font-weight: ${props => props.theme.fontWeights.semibold};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['2xl']};
    }
  }

  h4 {
    font-size: ${props => props.theme.fontSizes['2xl']};
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  h5 {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  h6 {
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  p {
    margin-bottom: ${props => props.theme.space[4]};
    color: ${props => props.theme.colors.neutral[700]};
  }

  a {
    color: ${props => props.theme.colors.primary[500]};
    transition: color ${props => props.theme.transitions.duration.fast} ${props => props.theme.transitions.easing.easeInOut};
    
    &:hover {
      color: ${props => props.theme.colors.primary[600]};
    }
  }

  button, .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${props => `${props.theme.space[3]} ${props.theme.space[5]}`};
    font-weight: ${props => props.theme.fontWeights.medium};
    border-radius: ${props => props.theme.radii.md};
    transition: all ${props => props.theme.transitions.duration.normal} ${props => props.theme.transitions.easing.easeInOut};
    cursor: pointer;
  }

  .button-primary {
    background-color: ${props => props.theme.colors.primary[500]};
    color: ${props => props.theme.colors.white};
    
    &:hover {
      background-color: ${props => props.theme.colors.primary[600]};
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.md};
    }
    
    &:active {
      background-color: ${props => props.theme.colors.primary[700]};
      transform: translateY(0);
    }
  }

  .button-secondary {
    background-color: ${props => props.theme.colors.secondary[500]};
    color: ${props => props.theme.colors.white};
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary[600]};
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.md};
    }
    
    &:active {
      background-color: ${props => props.theme.colors.secondary[700]};
      transform: translateY(0);
    }
  }

  .button-outline {
    background-color: transparent;
    color: ${props => props.theme.colors.primary[500]};
    border: 2px solid ${props => props.theme.colors.primary[500]};
    
    &:hover {
      background-color: ${props => props.theme.colors.primary[50]};
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.sm};
    }
    
    &:active {
      background-color: ${props => props.theme.colors.primary[100]};
      transform: translateY(0);
    }
  }
  
  section {
    padding: ${props => `${props.theme.space[10]} 0`};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: ${props => `${props.theme.space[8]} 0`};
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.space[4]};
  }
  
  .text-center {
    text-align: center;
  }
  
  .section-heading {
    margin-bottom: ${props => props.theme.space[8]};
    
    h2 {
      margin-bottom: ${props => props.theme.space[2]};
    }
    
    p {
      font-size: ${props => props.theme.fontSizes.xl};
      color: ${props => props.theme.colors.neutral[600]};
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default GlobalStyles;