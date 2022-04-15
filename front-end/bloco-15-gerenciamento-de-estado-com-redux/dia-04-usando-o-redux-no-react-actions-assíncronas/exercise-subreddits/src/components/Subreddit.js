import React, { Component } from 'react'
import { connect } from 'react-redux'
import searchSubreddit from '../redux/actions';

class Subreddit extends Component {

  render() {
    const {loading, selectedSubreddit, timestamp, selectSubreddit} = this.props;
    const selectedSubredditName = selectedSubreddit && selectedSubreddit[0].data.subreddit;
    return (
      <div>
        <select defaultValue={'Selecione'} onChange={({ target }) => selectSubreddit(target.value)}>
          <option disabled>Selecione</option>
          <option>frontend</option>
          <option>reactjs</option>
        </select>
        {loading &&
          <p>Loading...</p>
        }
        {selectedSubreddit && !loading &&
          <section>
            <button onClick={() => selectSubreddit(selectedSubredditName)}>Refresh</button>
            <h2>Selected: {selectedSubreddit[0].data.subreddit}</h2>
            <p>Last updated at {timestamp}</p>
            <ul>
              {selectedSubreddit.map((post) => <li key={post.data.id}>{post.data.title}</li>)}
            </ul>
          </section>
        }        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  selectedSubreddit: state.subreddit,
  timestamp: state.timestamp,
})

const mapDispatchToProps = (dispatch) => ({
  selectSubreddit: (subreddit) => dispatch(searchSubreddit(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
