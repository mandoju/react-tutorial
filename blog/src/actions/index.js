import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = id => async dispatch => {
//     _fetchUser(id,dispatch);
// }

export const fetchUser = id => async dispatch => {
  const repsonse = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: repsonse.data });
};
// const _fetchUser = _.memoize(async (id,dispatch) => {
//     const repsonse = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: "FETCH_USER", payload: repsonse.data});
// });
