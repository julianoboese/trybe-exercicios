import React, { Component } from 'react'
import { connect } from 'react-redux'
import searchSubreddit from '../redux/actions';

class Subreddit extends Component {

  render() {
    const {selectSubreddit, selectedSubreddit} = this.props;
    return (
      <div>
        <select onChange={({ target }) => selectSubreddit(target.value)}>
          <option>frontend</option>
          <option>reactjs</option>
        </select>
        <h2>Selected: {selectedSubreddit[0].data.subreddit}</h2>
        <ul>
          {selectedSubreddit.map((post) => <li>{post.data.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedSubreddit: state.subreddit,
})

const mapDispatchToProps = (dispatch) => ({
  selectSubreddit: (subreddit) => dispatch(searchSubreddit(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
