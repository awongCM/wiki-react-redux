/* Action Types */

export const ADD_WIKI ='ADD_WIKI';
export const DELETE_WIKI ='DELETE_WIKI';
export const UPDATE_WIKI ='UPDATE_WIKI';
export const SET_TAG_FILTER ='SET_TAG_FILTER';

/* Constants */
export const TagFilters = {
  SHOW_ALL_TAGS: 'SHOW_ALL_TAGS',
  SHOW_SELECTED_TAG: 'SHOW_SELECTED_TAG'
};

/* Action Creators */

export function addWiki(wiki) {
  return { type: ADD_WIKI, wiki };
}

export function updateWiki(index, wiki) {
  return { type: UPDATE_WIKI, index, wiki };
}

export function deleteWiki(index) {
  return { type: DELETE_WIKI, index };
}

export function setTagFilter(filter) {
  return { type: SET_TAG_FILTER, filter };
}