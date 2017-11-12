import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { 
  ADD_WIKI,
  DELETE_WIKI,
  UPDATE_WIKI,
  FILTER_WIKI,
  SET_TAG_FILTER,
  TagFilters,
  ADD_TAG,
  DELETE_TAG,
  UPDATE_TAG  
 } from '../actions';

const { SHOW_ALL_TAGS, SHOW_SELECTED_TAG } = TagFilters;


function wikis(state = [], action) {
  switch (action.type) {
    case ADD_WIKI:
      return [
        ...state,
        action.wiki
      ];
    case UPDATE_WIKI:
      return state.map( (item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, action.wiki);
        }
        return item;  
      });
    case DELETE_WIKI:
      return state.filter((item, index) => index !== action.index);
    case FILTER_WIKI:
      return state.map( (item, index) => {
          const item_tags = item.tags;

          if(item_tags.findIndex((tag, index) => tag === action.tag)) {
            return item;
          }
          return item;
      });
    
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

function tags(state = [], action) {
  
  switch (action.type) {
    case ADD_TAG:
      return [
        ...state,
        ...action.tags
      ];
    //TODO - how to deal with array of tags being removed or updated...
    case UPDATE_TAG:
      return [
        ...state,
        ...action.tags
      ];
    case DELETE_TAG:
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
}

const wikiApp = combineReducers({
    tagFilter,
    wikis,
    tags,
    form: formReducer
});

export default wikiApp;