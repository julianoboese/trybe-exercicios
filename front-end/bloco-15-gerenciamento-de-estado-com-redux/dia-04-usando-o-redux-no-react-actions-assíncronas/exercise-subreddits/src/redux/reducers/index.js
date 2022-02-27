export const LOADING = 'LOADING'
export const SEARCH_SUBREDDIT = 'SEARCH_SUBREDDIT'

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
  case SEARCH_SUBREDDIT:
    return {
      ...state,
      subreddit: payload,
      loading: false,
      timestamp: new Date().toLocaleString()
    }
  default:
    return state
  }
}

export default reducer;
