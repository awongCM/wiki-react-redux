import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import {
  ADD_WIKI,
  DELETE_WIKI,
  UPDATE_WIKI,
  FILTER_WIKI,
  SET_TAG_FILTER,
  ADD_TAGS,
  REMOVE_TAGS,
  TagFilters
} from "../actions";

const { SHOW_ALL_TAGS, SHOW_SELECTED_TAG } = TagFilters;

function tags(state = [], action) {
  switch (action.type) {
    case ADD_TAGS:
      return [...state, ...action.tags];
    case REMOVE_TAGS:
      return state.filter(item => !action.tags.includes(item));
    default:
      return state;
  }
}

function wikis(state = [], action) {
  switch (action.type) {
    case ADD_WIKI:
      return [...state, action.wiki];
    case UPDATE_WIKI:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, action.wiki);
        }
        return item;
      });
    case DELETE_WIKI:
      return state.filter((item, index) => index !== action.index);
    case FILTER_WIKI:
      return state.map(item => {
        const item_tags = item.tags;

        if (item_tags.findIndex(tag => tag === action.tag) !== -1) {
          return Object.assign({}, item, { selected: true });
        } else {
          return Object.assign({}, item, { selected: false });
        }
      });

    default:
      return state;
  }
}

// TODO - tag filter operation
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
  wikis,
  tags,
  form: formReducer
});

export default wikiApp;
