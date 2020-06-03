import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { verifySend, verifyCode } from '../../redux/modules/forgotPassword/forgotPasswordAction';

import {
  ForgotPasswordContainer,
  HeaderStyled,
  DescriptionStyled,
  LabelStyled,
  InputWrapper,
  InputStyled,
  ButtonStyled
} from './style';

const ForgetPassword = ({
  loading,
  verify,
  error,
  verifySend,
  verifyCode
}) => {
  const [phonenumber, setPhonenumber] = useState('');
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(60);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check) {
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer, check]);


  return (
    <ForgotPasswordContainer>
      {true ? (
        <>
          <HeaderStyled>Enter confirmation code</HeaderStyled>
          <LabelStyled>Code</LabelStyled>
          <InputStyled
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <ButtonStyled onClick={() => setCheck(true)}>{timer}</ButtonStyled>


          <ButtonStyled disabled={code.length !== 6} onClick={() => verifyCode(phonenumber, code)}>
            Verify
            {loading && <span />}
          </ButtonStyled>
        </>
      ) : (
        <>
          <HeaderStyled>Forgot your password</HeaderStyled>
          <DescriptionStyled>Enter your registered phone number to reset your password</DescriptionStyled>
          <InputWrapper>
            <LabelStyled>Phone number:</LabelStyled>
            <PhoneInput
              country="uz"
              value={phonenumber}
              masks={{ uz: '.. ... ....' }}
              onChange={(phonenumber) => setPhonenumber(phonenumber)}
              placeholder="+998 99 865 9217"
            />
          </InputWrapper>
          <ButtonStyled disabled={phonenumber.length < 6} onClick={() => verifySend(phonenumber)}>
            Login
            {loading && <span />}
          </ButtonStyled>
        </>

      )}


    </ForgotPasswordContainer>
  );
};

const mapStateToProps = (state) => ({
  loading: state.forgetPassword.loading,
  verify: state.forgetPassword.verify,
  error: state.forgetPassword.error
});

const mapDispatchToProps = (dispatch) => ({
  verifySend: (phone) => dispatch(verifySend(phone)),
  verifyCode: (phone, code) => dispatch(verifyCode(phone, code))
});


export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
