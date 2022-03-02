import fetchSubreddit from "../../services/fetchSubreddit";
import { LOADING, SEARCH_SUBREDDIT_SUCCESS, SEARCH_SUBREDDIT_ERROR } from "../reducers";

export default function searchSubreddit(subreddit) {
  return async (dispatch) => {
    dispatch({type: LOADING});
    try {
      const payload = await fetchSubreddit(subreddit);
      dispatch({type: SEARCH_SUBREDDIT_SUCCESS, payload})
    } catch(error) {
      dispatch({type: SEARCH_SUBREDDIT_ERROR, payload: error})
    }
  }
}
