import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import Spinner from '../../components/spinner';
import 'react-phone-input-2/lib/style.css';

import Button from '../../components/Button';

import { updateUser } from '../../redux/modules/user/userAction';

import fallbackProfileImg from '../../assets/icons/profile.svg';
import { EditTools } from '../../constants/icons';
import { genderOptions } from '../../constants/gender';

import {
  ProfileContainer,
  HeadingStyled,
  ImageContainer,
  ImageStyled,
  DetailsContainer,
  RowContainer,
  RowContainerPhoneInput,
  LabelStyled,
  InputStyled,
  TextareaStyled,
  GenderSelectStyled,
  RowContainerWithDesc
} from './style';

const Profile = ({ userDetails, loading, updateUser,history }) => {
  const [user, setUser] = useState(userDetails);
  const [phoneError, setPhoneError] = useState(false);
  useEffect(() => {
    if (!user && userDetails) {
      setUser({
        firstname: userDetails.firstname,
        secondname: userDetails.secondname,
        quote: userDetails.quote,
        phone: userDetails.phone,
        image: userDetails.image
      });
    }

    if(userDetails?.id===1){
      history.push('/')
    }
  }, [userDetails]);

  if (loading) {
    return <Spinner />;
  }



  const handleFirstName = (e) => {
    setUser({
      ...user,
      firstname: e.target.value
    });
  };

  const handleLastName = (e) => {
    setUser({
      ...user,
      secondname: e.target.value
    });
  };

  const handleBio = (e) => {
    setUser({
      ...user,
      quote: e.target.value
    });
  };

  const handlePhone = (value) => {
    setUser({
      ...user,
      phone: value
    });
  };

  const handleUpdateUser = () => {
    updateUser(user);
  };

  const handleCancel = () => {
    setUser({
      firstname: userDetails.firstname,
      secondname: userDetails.secondname,
      quote: userDetails.quote,
      phone: userDetails.phone,
      image: userDetails.image
    });
  };
  return (
    <>
      {!loading && user && (
        <ProfileContainer>
          <HeadingStyled>Account Information</HeadingStyled>

          <ImageContainer>
            <ImageStyled
              src={user.image}
              fallbackImage={fallbackProfileImg}
              alt="profile image"
            />
          </ImageContainer>

          <DetailsContainer>
            <RowContainer>
              <LabelStyled>First Name</LabelStyled>
              <InputStyled
                value={user.firstname}
                onChange={(e) => handleFirstName(e)}
              />
            </RowContainer>
            <RowContainer>
              <LabelStyled>Last Name</LabelStyled>
              <InputStyled
                value={user.secondname}
                onChange={(e) => handleLastName(e)}
              />
            </RowContainer>
            <RowContainerPhoneInput>
              <LabelStyled>Phone number</LabelStyled>
              <PhoneInput
                country="uz"
                value={user.phone}
                masks={{ uz: '.. ... ....' }}
                onChange={(phone) => handlePhone(phone)}
                placeholder="+998 99 865 9217"
              />
              {phoneError && <span>Please enter valid phone number</span>}
            </RowContainerPhoneInput>
            <RowContainerWithDesc>
              <div>
                <LabelStyled>Bio</LabelStyled>
                <TextareaStyled
                  value={user.quote}
                  maxLength={250}
                  cols={3}
                  onChange={(e) => handleBio(e)}
                />
              </div>

              <p>
                Any details such as age, occupation or city. Example: 23y.o
                designer form San Francisco
              </p>
            </RowContainerWithDesc>
          </DetailsContainer>

          <div>
            <Button onClick={handleCancel} secondary>Cancel</Button>
            <Button onClick={handleUpdateUser}>Save Changes</Button>
          </div>
        </ProfileContainer>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userReducer.user,
  loading: state.userReducer.loading
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
