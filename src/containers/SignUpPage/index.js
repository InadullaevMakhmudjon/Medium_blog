/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  TextWrapper,
  Title,
  Input,
  CheckboxContainer,
  Label,
  PrivacyLink,
  SignInLink,
  ErrorMessage
} from './styles';

import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [secondNameError, setSecondNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const removeErrors = () => {
    setFirstNameError(false);
    setSecondNameError(false);
    setPhoneError(false);
    setPasswordError(false);
  };

  const handleValidation = () => {
    if (!firstName.length) {
      setFirstNameError(true);
    }

    if (!secondName.length) {
      setSecondNameError(true);
    }

    if (phone.length < 6) {
      setPhoneError(true);
    }

    if (password.length < 6) {
      setPasswordError(true);
    }
    if (!firstName.length || !secondName.length || phone.length < 6 || password.length < 6) {
      return false;
    }
    removeErrors();
    return true;
  };

  const createAccountHandler = () => {
    if (handleValidation()) {
      console.log('hey');
    }
  };


  return (
    <StyledSignUpPage>
      <TextWrapper>
        <Heading>Join to BiznesRivoj.</Heading>
        <Title>Sign up to get newly updates from BiznesRivoj.</Title>
        <Title>
          Already have an account ?
          <SignInLink to="login">
            Sign in
          </SignInLink>
        </Title>
      </TextWrapper>
      <Input
        type="text"
        name="firstname"
        placeholder="Firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {firstNameError && <ErrorMessage>Please provide your first name</ErrorMessage>}
      <Input
        type="text"
        name="lastname"
        placeholder="Lastname"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      {secondNameError && <ErrorMessage>Please provide your second name</ErrorMessage>}
      <PhoneInput
        country="uz"
        value={phone}
        masks={{ uz: '.. ... ....' }}
        onChange={(phone) => setPhone(phone)}
        placeholder="+998 99 865 9217"
      />
      {phoneError && <ErrorMessage>Please provide your Phone number</ErrorMessage>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <ErrorMessage>Password should be more than 6 character</ErrorMessage>}
      <CheckboxContainer>
        <input type="checkbox" />
        <Label htmlfor="checkbox">
          Sign up to receive occasional emails from BiznesRivoj.
          You may unsubscribe at any time.
        </Label>
      </CheckboxContainer>
      <ButtonPrimary btnForm onClick={createAccountHandler}>Create Account</ButtonPrimary>
      <PrivacyLink to="/privacy-policy">Privacy Policy</PrivacyLink>

    </StyledSignUpPage>
  );
};


export default SignUpPage;
