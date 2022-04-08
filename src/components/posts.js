import { loadposts } from "../store/posts";
import React from "react";
import { connect } from "react-redux";

class Posts extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.props.listPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { listPosts: state.list };
};

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadposts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
