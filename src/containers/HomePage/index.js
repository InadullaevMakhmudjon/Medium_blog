import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHome } from '../../redux/modules/home/homeActions';
import { homeSelector } from '../../redux/selectors/homeSelector';
import {
  MainPageStyled,
  Content,
  HR,
  LoaderWrapper
} from './style';


import TopArticlesContainer from '../../components/ArticlesContainerTopMedium';
import HomepageBody from '../../components/HomepageBody';
import Spinner from '../../components/spinner';
import Loader from '../../components/Loader';

const HomePage = ({
  home, getHome, homeList, loading
}) => {
  useEffect(() => {
    if (home && !home.length) {
      getHome();
    }
  }, [home]);
  return (
    <MainPageStyled>
      {loading && (
        <>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          <Spinner />
        </>
      )}
      {!loading && homeList && homeList.length ? (
        <>
          <TopArticlesContainer main={homeList.slice(1, 2)} />
          <Content>
            {homeList.slice(2).map((category, idx) => (
              <HomepageBody
                key={category.id || idx}
                articles={category.articles}
              />
            ))}
          </Content>
        </>
      ) : null}
    </MainPageStyled>
  );
};

HomePage.defaultProps = {
  home: [],
  loading: false,
  getHome: () => {},
  homeList: []
};

HomePage.propTypes = {
  home: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  loading: PropTypes.bool,
  getHome: PropTypes.func,
  homeList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};
const mapStateToProps = (state) => ({
  loading: state.homeReducer.loading,
  home: state.homeReducer.home,
  homeList: homeSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getHome: () => dispatch(getHome())
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
