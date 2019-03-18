import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // userIds.forEach(id => dispatch(fetchUser(id)))

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value() // okay, go ahead -- execute the chain

    // this works exactly as the above comment does -- just an alternative method using lodash's .chain function.
};

export const fetchPosts = () => async (dispatch) => {
  const resp = await jsonPlaceholder.get('/posts')
  dispatch({ type: 'FETCH_POSTS', payload: resp.data})
  };

export const fetchUser = (id) => async (dispatch) => {
  const resp = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({ type: 'FETCH_USER', payload: resp.data})
};