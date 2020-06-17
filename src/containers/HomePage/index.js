import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHome } from '../../redux/modules/home/homeActions';
import {
  articlesBottomSelector,
  articleTopSelector, currentArticlesCount,
  totalCounterSelector
} from '../../redux/selectors/homeSelector';
import {
  MainPageStyled,
  Content,
  BorderBottomStyled,
  LoaderWrapper
} from './style';


import TopArticlesContainer from '../../components/ArticlesContainerTopMedium';
import HomepageBody from '../../components/HomepageBody';
import Spinner from '../../components/spinner';
import Loader from '../../components/Loader';
import { LoadMore } from '../CategoryPage/style';

const HomePage = ({
  getHome,
  articlesTop,
  articlesBottom,
  loading,
  total,
  currentCount
}) => {
  const [page, setPage] = useState(3);

  useEffect(() => {
    if (articlesTop && !articlesTop.length) {
      // getHome(page);
    }
  }, [articlesTop]);

  useEffect(() => {
    if (page > 1) {
      getHome(page);
    }
  }, [page]);

  return (
    <MainPageStyled>
      {articlesTop.length && articlesBottom.length ? (
        <>
          <TopArticlesContainer articles={articlesTop} />
          <BorderBottomStyled />
          <Content>
            <HomepageBody
              articles={articlesBottom}
            />
          </Content>
        </>
      ) : null}
      {!loading && total > currentCount
        ? <LoadMore onClick={() => setPage(page + 1)}>Load More Articles</LoadMore> : null}
      {loading && (
        <>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          <Spinner />
        </>
      )}
    </MainPageStyled>
  );
};
HomePage.defaultProps = {
  loading: false,
  getHome: () => {
  },
  articlesTop: [],
  articlesBottom: [],
  total: 0,
  currentCount: 0

};

HomePage.propTypes = {
  loading: PropTypes.bool,
  getHome: PropTypes.func,
  articlesTop: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  articlesBottom: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  total: PropTypes.number,
  currentCount: PropTypes.number
};
const mapStateToProps = (state) => ({
  loading: state.homeReducer.loading,
  home: state.homeReducer.home,
  articlesTop: articleTopSelector(state),
  articlesBottom: articlesBottomSelector(state),
  total: totalCounterSelector(state),
  currentCount: currentArticlesCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  getHome: (page) => dispatch(getHome(page))
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
