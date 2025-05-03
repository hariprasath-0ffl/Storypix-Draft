import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  AuthContainer,
  AuthCard,
  AuthTitle,
  FormGroup,
  Input,
  PasswordInput,
  PasswordWrapper,
  ShowPasswordButton,
  SubmitButton,
  AuthLinks,
  AuthLink
} from './styles';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: Implement actual signup logic
      console.log('Signup values:', values);
      toast.success('Account created successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to create account');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Sign Up</AuthTitle>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  error={touched.fullName && errors.fullName}
                />
                {touched.fullName && errors.fullName && (
                  <span className="error">{errors.fullName}</span>
                )}
              </FormGroup>

              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={touched.email && errors.email}
                />
                {touched.email && errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </FormGroup>

              <FormGroup>
                <PasswordWrapper>
                  <PasswordInput
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    error={touched.password && errors.password}
                  />
                  <ShowPasswordButton
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </ShowPasswordButton>
                </PasswordWrapper>
                {touched.password && errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </FormGroup>

              <FormGroup>
                <PasswordWrapper>
                  <PasswordInput
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    error={touched.confirmPassword && errors.confirmPassword}
                  />
                  <ShowPasswordButton
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </ShowPasswordButton>
                </PasswordWrapper>
                {touched.confirmPassword && errors.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </SubmitButton>

              <AuthLinks>
                <div>
                  Already have an account? <AuthLink as={Link} to="/login">Login</AuthLink>
                </div>
              </AuthLinks>
            </Form>
          )}
        </Formik>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignUp;