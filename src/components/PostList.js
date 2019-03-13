import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    render(){
        return <div className="ui container">Post List</div>
    }
}

export default connect(null, { fetchPosts })(PostList); 
// first argument to connect is always mapStateToProps -- we don't have that yet.
// Second arguement is equivalent to { fetchPosts: fetchPosts }