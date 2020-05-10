import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner';

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
  LabelStyled,
  InputStyled,
  TextareaStyled,
  GenderSelectStyled,
  RowContainerWithDesc
} from './style';


const Profile = ({ userDetails, loading }) => {
  const [user, setUser] = useState(userDetails);

  useEffect(() => {
    if (!user) {
      setUser(userDetails);
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
      lastname: e.target.value
    });
  };

  const handleBio = (e) => {
    setUser({
      ...user,
      quote: e.target.value
    });
  };

  const handlePhone = () => {
    setUser({
      ...user
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
                onChange={() => {}}
              />
            </RowContainer>
            <RowContainer>
              <LabelStyled>Last Name</LabelStyled>
              <InputStyled
                value={user.lastname}
                onChange={() => {}}
              />
            </RowContainer>
            <RowContainer>
              <LabelStyled>Phone number</LabelStyled>
              <InputStyled
                value={user.phone}
                onChange={() => {}}
              />
            </RowContainer>
            <RowContainerWithDesc>
              <div>
                <LabelStyled>Bio</LabelStyled>
                <TextareaStyled
                  value={user.quote}
                  maxLength={250}
                  cols={3}
                  onChange={() => {}}
                />
              </div>

              <p>Any Spinnerdetails such as age, occupation or city. Example: 23y.o designer form San Francisco</p>
            </RowContainerWithDesc>
            {/* <RowContainer>
          <LabelStyled>Gender</LabelStyled>
          <GenderSelectStyled options={genderOptions} />
        </RowContainer>
        <RowContainer>
          <LabelStyled>Data of Birth</LabelStyled>
          <InputStyled />
        </RowContainer> */}
          </DetailsContainer>

        </ProfileContainer>
      )}
    </>
  );
};


const mapStateToProps = (state) => ({
  userDetails: state.userReducer.user,
  loading: state.userReducer.loading
});

export default connect(mapStateToProps)(Profile);
