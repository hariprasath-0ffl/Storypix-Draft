import React from 'react';
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
  SubmitButton,
  AuthLinks,
  AuthLink
} from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
});

const ForgotPassword = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: Implement actual password reset logic
      console.log('Reset password for:', values.email);
      toast.success('Password reset instructions sent to your email!');
    } catch (error) {
      toast.error(error.message || 'Failed to send reset instructions');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Forgot Password</AuthTitle>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your registered email"
                  error={touched.email && errors.email}
                />
                {touched.email && errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Reset Password'}
              </SubmitButton>

              <AuthLinks>
                <div>
                  Remembered your password? <AuthLink as={Link} to="/login">Back to Login</AuthLink>
                </div>
              </AuthLinks>
            </Form>
          )}
        </Formik>
      </AuthCard>
    </AuthContainer>
  );
};

export default ForgotPassword;