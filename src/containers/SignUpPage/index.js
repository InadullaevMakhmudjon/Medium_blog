/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Firebase from '../../config/firebase';

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
  const [recaptcha, setRecaptcha] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(true);

  const [firstNameError, setFirstNameError] = useState(false);
  const [secondNameError, setSecondNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const firebase = Firebase.instance;

  useEffect(() => {
    const recaptcha = firebase.setUpRecaptcha('recaptcha-container', {
      size: 'medium',
      callback: setRecaptchaToken
    });
    setRecaptcha(recaptcha);
  }, []);

  useEffect(() => {
    if (recaptcha) {
      recaptcha.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  }, [recaptcha]);

  useEffect(() => {
    if (phone.length === 12 && recaptchaToken) {
      firebase.signInWithPhoneNumber(`+${phone}`, recaptcha)
        .then((result) => {
          setConfirmationResult(result);
          setRecaptchaToken(null);
          setShowRecaptcha(false);
          setShowCode(true);
        }).catch((err) => alert(err.message));
    }
  }, [phone]);

  const removeErrors = () => {
    setFirstNameError(false);
    setSecondNameError(false);
    setPhoneError(false);
    setPasswordError(false);
  };

  const verify = () => {
    if (confirmationResult) {
      confirmationResult.confirm(code).then(() => {
        alert('Successfully confirmed');
        removeErrors();
      }).catch((err) => alert(err.message));
    }
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

    // eslint-disable-next-line max-len
    if (!firstName.length || !secondName.length || phone.length < 6 || password.length < 6) {
      return false;
    }
    // removeErrors();
    return true;
  };

  const createAccountHandler = () => {
    if (handleValidation()) {
      verify();
    } else {
      console.log('Errored...');
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
      {firstNameError && <ErrorMessage>Please provide your first name</ErrorMessage>}
      <Input
        type="text"
        name="firstname"
        placeholder="Firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {secondNameError && <ErrorMessage>Please provide your second name</ErrorMessage>}
      <Input
        type="text"
        name="lastname"
        placeholder="Lastname"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      {passwordError && <ErrorMessage>Password should be more than 6 character</ErrorMessage>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div id="recaptcha-container" style={{ display: showRecaptcha ? '' : 'none' }} />
      {phoneError && <ErrorMessage>Please provide your Phone number</ErrorMessage>}
      <PhoneInput
        country="uz"
        value={phone}
        masks={{ uz: '.. ... ....' }}
        disabled={!recaptchaToken}
        onChange={(phone) => setPhone(phone)}
        placeholder="+998 99 865 9217"
      />
      {
        showCode ? (
          <Input
            type="number"
            name="code"
            placeholder="Code"
            onChange={(e) => setCode(e.target.value)}
          />
        ) : null
      }
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
