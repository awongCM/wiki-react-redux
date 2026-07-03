import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import {
  SET_WIKIS,
  SET_TAGS,
  ADD_WIKI,
  DELETE_WIKI,
  UPDATE_WIKI,
  FILTER_WIKI,
  SET_TAG_FILTER,
  SET_LOADING,
  SET_ERROR,
  SET_ACTIVE_TAG,
  TagFilters
} from "../actions";

const { SHOW_ALL_TAGS } = TagFilters;

function tags(state = [], action) {
  switch (action.type) {
    case SET_TAGS:
      return action.tags;
    case SET_WIKIS:
      return action.wikis.reduce((acc, wiki) => {
        (wiki.tags || []).forEach(tag => {
          if (!acc.includes(tag)) {
            acc.push(tag);
          }
        });
        return acc;
      }, []);
    default:
      return state;
  }
}

function wikis(state = [], action) {
  switch (action.type) {
    case SET_WIKIS:
      return action.wikis;
    case ADD_WIKI:
      return [action.wiki, ...state];
    case UPDATE_WIKI:
      return state.map(item =>
        item._id === action.id ? action.wiki : item
      );
    case DELETE_WIKI:
      return state.filter(item => item._id !== action.id);
    case FILTER_WIKI:
      if (!action.tag) {
        return state.map(item => Object.assign({}, item, { selected: false }));
      }
      return state.map(item => {
        const itemTags = item.tags || [];
        const selected = itemTags.includes(action.tag);
        return Object.assign({}, item, { selected });
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

function loading(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;
    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    default:
      return state;
  }
}

function activeTag(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_TAG:
      return action.tag;
    default:
      return state;
  }
}

const wikiApp = combineReducers({
  tagFilter,
  activeTag,
  wikis,
  tags,
  loading,
  error,
  form: formReducer
});

export default wikiApp;
