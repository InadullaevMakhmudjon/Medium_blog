import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { login } from '../../redux/modules/auth/authActions';

import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  LabelStyled,
  PhoneInputWrapper,
  InputWrapper,
  TextWrapper,
  Input,
  ForgotPasswordLink,
  HaveAccountContainer,
  ButtonStyled
} from './styles';


const SignInPage = ({
  login,
  loading,
  error,
  history
}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  const handlePhoneInput = (e) => {

  };

  const handleSubmit = () => {

  };

  return (
    <StyledSignUpPage>
      <FormStyled>
        <TextWrapper>
          <Heading>Login to your BiznesRivoj account.</Heading>
        </TextWrapper>
        <PhoneInputWrapper>
          <LabelStyled>Phone number:</LabelStyled>
          <PhoneInput
            country="uz"
            value={phone}
            masks={{ uz: '.. ... ....' }}
            onChange={(phone) => setPhone(phone)}
            placeholder="+998 99 865 9217"
          />
        </PhoneInputWrapper>
        <InputWrapper>
          <LabelStyled>Password:</LabelStyled>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>
        {error && <LabelStyled error>Phone number or password wrong</LabelStyled>}
        <ButtonStyled onClick={() => login(phone, password, history)}>
          Login
          {loading && <span />}
        </ButtonStyled>
        <HaveAccountContainer>
          Already have a account?
          <Link to="/sign-up">SignUp</Link>
        </HaveAccountContainer>
        <ForgotPasswordLink to="/forgot-password">Forgot Password?</ForgotPasswordLink>
      </FormStyled>
    </StyledSignUpPage>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loader,
  error: state.authReducer.loginError
});

const mapDispatchToProps = (dispatch) => ({
  login: (phone, password, history) => dispatch(login(phone, password, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInPage));
