import styled from 'styled-components';
import { Field } from 'formik';

export const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.space[4]};
  background: linear-gradient(
  135deg,
rgba(223, 205, 246, 0.4),
rgba(204, 173, 233, 0.16)
);

`;

export const AuthCard = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space[8]};
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  width: 100%;
  max-width: 400px;
`;

export const AuthTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['3xl']};
  color: ${props => props.theme.colors.neutral[900]};
  text-align: center;
  margin-bottom: ${props => props.theme.space[6]};
`;

export const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.space[4]};

  .error {
    color: ${props => props.theme.colors.error[500]};
    font-size: ${props => props.theme.fontSizes.sm};
    margin-top: ${props => props.theme.space[1]};
    display: block;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: ${props => props.theme.space[3]};
  border: 2px solid ${props => props.error ? props.theme.colors.error[500] : props.theme.colors.neutral[200]};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  transition: all ${props => props.theme.transitions.duration.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.colors.error[500] : props.theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${props => props.error ? props.theme.colors.error[100] : props.theme.colors.primary[100]};
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const PasswordInput = styled(Input)`
  padding-right: ${props => props.theme.space[10]};
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: ${props => props.theme.space[3]};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: ${props => props.theme.space[1]};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.fast};

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colors.primary[600]};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => props.theme.colors.neutral[500]};
  font-size: ${props => props.theme.fontSizes.sm};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${props => props.theme.colors.neutral[200]};
  }

  &::before {
    margin-right: ${props => props.theme.space[3]};
  }

  &::after {
    margin-left: ${props => props.theme.space[3]};
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.neutral[800]};
  border: 2px solid ${props => props.theme.colors.neutral[200]};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.duration.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[2]};

  &:hover {
    background-color: ${props => props.theme.colors.neutral[50]};
    border-color: ${props => props.theme.colors.neutral[300]};
  }
`;

export const AuthLinks = styled.div`
  margin-top: ${props => props.theme.space[4]};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.neutral[600]};

  > div {
    margin-bottom: ${props => props.theme.space[2]};
  }
`;

export const AuthLink = styled.a`
  color: ${props => props.theme.colors.primary[500]};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};

  &:hover {
    text-decoration: underline;
  }
`;