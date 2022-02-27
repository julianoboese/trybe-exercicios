import fetchSubreddit from "../../services/fetchSubreddit";
import { LOADING, SEARCH_SUBREDDIT } from "../reducers";

export default function searchSubreddit(subreddit) {
  return async (dispatch) => {
    dispatch({type: LOADING});
    const payload = await fetchSubreddit(subreddit);
    dispatch({type: SEARCH_SUBREDDIT, payload})
  }
}
