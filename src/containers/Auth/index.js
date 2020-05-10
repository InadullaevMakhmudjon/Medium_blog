import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { init } from '../../redux/modules/auth/authActions';


import Spinner from '../../components/spinner';

const Auth = ({
  token,
  error,
  loading,
  init,
  render
}) => {
  useEffect(() => {
    if (!token && !loading && !error) {
      init();
    }
  });


  return (
    <>
      {loading && <Spinner />}
      {!loading && token && render()}
    </>
  );
};

Auth.defaultProps = {
  init: () => {},
  token: '',
  loading: false,
  error: false,
  render: () => {}
};

Auth.propTypes = {
  init: PropTypes.func,
  token: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  render: PropTypes.func
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  loading: state.authReducer.loading,
  error: state.authReducer.error,
  loader: state.authReducer.loader
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
