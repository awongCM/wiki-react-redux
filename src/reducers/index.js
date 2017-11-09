import { combineReducers } from 'redux';

import { 
  ADD_WIKI,
  DELETE_WIKI,
  UPDATE_WIKI,
  SET_TAG_FILTER,
  TagFilters  
 } from '../actions';

const { SHOW_ALL_TAGS, SHOW_SELECTED_TAG } = TagFilters;


function wikis(state = [], action) {
  switch (action.type) {
    case ADD_WIKI:
      return [
        ...state, 
        {
          wiki: action.wiki
        }
      ];
    case UPDATE_WIKI:
      return state.map( (item, index)=> {
        if (index === action.index) {
          return Object.assign({}, item, {
            wiki: action.wiki
          });
        }
        return item;  
      });
    case DELETE_WIKI:
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
}

function tagFilter(state = SHOW_ALL_TAGS, action) {
  switch (action.type) {
    case SET_TAG_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const wikiApp = combineReducers({
    tagFilter,
    wikis
});

export default wikiApp;