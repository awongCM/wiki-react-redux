import * as wikiApi from "../api/wikis";

/* Action Types */

export const SET_WIKIS = "SET_WIKIS";
export const SET_TAGS = "SET_TAGS";
export const ADD_WIKI = "ADD_WIKI";
export const DELETE_WIKI = "DELETE_WIKI";
export const UPDATE_WIKI = "UPDATE_WIKI";
export const FILTER_WIKI = "FILTER_WIKI";
export const SET_TAG_FILTER = "SET_TAG_FILTER";
export const SET_ACTIVE_TAG = "SET_ACTIVE_TAG";
export const SET_ERROR = "SET_ERROR";

export const TagFilters = {
  SHOW_ALL_TAGS: "SHOW_ALL_TAGS",
  SHOW_SELECTED_TAG: "SHOW_SELECTED_TAG"
};

const getUniqueTags = wikis => {
  const tags = wikis.reduce((acc, wiki) => acc.concat(wiki.tags || []), []);
  return tags.filter((item, index) => tags.indexOf(item) === index);
};

/* Action Creators */

export function setWikis(wikis) {
  return { type: SET_WIKIS, wikis };
}

export function setTags(tags) {
  return { type: SET_TAGS, tags };
}

export function addWiki(wiki) {
  return { type: ADD_WIKI, wiki };
}

export function updateWiki(id, wiki) {
  return { type: UPDATE_WIKI, id, wiki };
}

export function deleteWiki(id) {
  return { type: DELETE_WIKI, id };
}

export function setActiveTag(tag) {
  return { type: SET_ACTIVE_TAG, tag };
}

export function filterWiki(tag) {
  return dispatch => {
    dispatch({ type: FILTER_WIKI, tag });
    dispatch(setActiveTag(tag));
  };
}

export function setTagFilter(filter) {
  return { type: SET_TAG_FILTER, filter };
}

export function setLoading(loading) {
  return { type: SET_LOADING, loading };
}

export function setError(error) {
  return { type: SET_ERROR, error };
}

export function loadWikis() {
  return async dispatch => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const wikis = await wikiApi.fetchWikis();
      dispatch(setWikis(wikis));
      dispatch(setTags(getUniqueTags(wikis)));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function createWiki(wiki) {
  return async dispatch => {
    const savedWiki = await wikiApi.createWiki(wiki);
    await dispatch(loadWikis());
    return savedWiki;
  };
}

export function saveWiki(id, wiki) {
  return async dispatch => {
    const savedWiki = await wikiApi.updateWiki(id, wiki);
    await dispatch(loadWikis());
    return savedWiki;
  };
}

export function removeWiki(id) {
  return async dispatch => {
    await wikiApi.deleteWiki(id);
    await dispatch(loadWikis());
  };
}

export function clearTagFilter() {
  return dispatch => {
    dispatch(setTagFilter(TagFilters.SHOW_ALL_TAGS));
    dispatch(setActiveTag(null));
    dispatch({ type: FILTER_WIKI, tag: null });
  };
}
