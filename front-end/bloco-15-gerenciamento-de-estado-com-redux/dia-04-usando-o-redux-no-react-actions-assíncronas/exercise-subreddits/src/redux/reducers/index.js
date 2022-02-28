export const LOADING = 'LOADING'
export const SEARCH_SUBREDDIT_SUCCESS = 'SEARCH_SUBREDDIT_SUCCESS'
export const SEARCH_SUBREDDIT_ERROR = 'SEARCH_SUBREDDIT_ERROR'

const INITIAL_STATE = {
  loading: false,
  subreddit: '',
  timestamp: '',
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case LOADING:
    return {
      ...state,
      loading: true
    }
  case SEARCH_SUBREDDIT_SUCCESS:
    return {
      ...state,
      subreddit: payload,
      loading: false,
      timestamp: new Date().toLocaleString()
    }
  case SEARCH_SUBREDDIT_ERROR:
    return {
      ...state,
      error: payload,
    }
  default:
    return state
  }
}

export default reducer;
