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
  Divider,
  GoogleButton,
  AuthLinks,
  AuthLink
} from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: Implement actual login logic
      console.log('Login values:', values);
      toast.success('Successfully logged in!');
    } catch (error) {
      toast.error(error.message || 'Failed to log in');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Login</AuthTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
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

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </SubmitButton>

              <Divider>or</Divider>

              <GoogleButton type="button">
  <img
    src="https://developers.google.com/identity/images/g-logo.png"
    alt="Google"
    style={{
      width: '20px',
      height: '20px',
      marginRight: '8px',
      verticalAlign: 'middle',
    }}
  />
  Continue with Google
</GoogleButton>


              <AuthLinks>
                <div>
                  Don't have an account? <AuthLink as={Link} to="/signup">Sign up</AuthLink>
                </div>
                <AuthLink as={Link} to="/forgot-password">Forgot Password?</AuthLink>
              </AuthLinks>
            </Form>
          )}
        </Formik>
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;