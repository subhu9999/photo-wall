import React, { Component } from "react";
import "./App.css";
import AddPhoto from "./Components/AddPhoto";
import PhotoWall from "./Components/PhotoWall";
import Photo from "./Components/Photo";
import Title from "./Components/Title";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removePost } from "./redux/actions";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";
import Single from "./Components/Single";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
  };
};

const mapActionsToProp = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount = () => {
    this.props.fetchPosts().then(() => {
      this.setState({loading: false})
    });
  };

  render() {
    // console.log(this.props);

    return (
      <div className="App html">
        <Title title="PhotoWall" />

        <Route
          path="/single/:id"
          exact
          render={(params) => <Single {...params} loading={this.state.loading}/>}
        />

        <Route
          path="/AddPhoto"
          exact
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />

        <Route
          path="/"
          exact
          render={(params) => (
            <div>
              <PhotoWall {...this.props} params={params} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProp)(App);
// export default connect(mapStateToProps)(App);
