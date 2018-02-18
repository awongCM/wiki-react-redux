import { connect } from 'react-redux';
import { setTagFilter, toggleWikis } from '../actions';
import AllWikis from '../components/AllWikis';

// TODO - complete filtering functions
const getAllSelectedWikis = (wikis, tagFilter) => {
  return wikis.filter((wiki)=>{
    if(wiki.selected === true) return wiki;
  });
};

const mapStateToProps = (state, ownProps) => {
  return {
    wikis:  state.wikis
  };
};

const AllWikisContainer = connect(
  mapStateToProps,
  null
)(AllWikis);

export default AllWikisContainer;