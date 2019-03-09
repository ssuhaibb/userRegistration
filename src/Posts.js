import React, { Component } from 'react'
import PostItem from './PostItem';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postText: '',
            posts: []
        }
    }

    componentDidMount() {
        if(this.isUserLogedin()) {
            this.getPostsFromLocalStorage();
        } else {
            this.props.history.push('/login');
        }
    }

    /**
       isUserLogedin function used to check the user is logedin 
    */
    isUserLogedin = () => JSON.parse(localStorage.getItem('isLogin'));

    /*
        'getPostsFromLocalStorage' this function used to get the all post data from licalStorage
    */
    getPostsFromLocalStorage() {
        const posts = JSON.parse(localStorage.getItem('posts'));
        if(posts) {
            this.setState({posts})
        }
    }

    postTextHandler = (event) => {
        this.setState({ postText: event.target.value })
    }

    postButtonHandler = (event) => {
        event.preventDefault();
        const postText = this.state.postText;
        const posts = [...this.state.posts]
        const totalPost = posts.length;
        const post = {postId: totalPost + 1, post: postText}
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        this.setState({ postText: '' });
        this.getPostsFromLocalStorage();        
    }

    render() {
        let postList; 
        const posts = this.state.posts;

        if(posts.length) {
             postList = posts.map(({postId, post}) => <PostItem key={postId} post={post} /> );
         } else {
            postList = ' There is no post'
         }       

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                        <div className="row">
                            <div className="col text-center">
                                <h2>Create A Post</h2>
                            </div>
                        </div>
                        <form onSubmit={this.postButtonHandler}>
                            <div className="row align-items-center mt-8">
                                <div className="col">
                                    <input type="text"
                                        className="form-control" placeholder="Enter Text Here"
                                        value={this.state.postText}
                                        onChange={this.postTextHandler}
                                        autoFocus
                                    />
                                </div>
                                <div className="col">
                                    <button 
                                        className="btn btn-primary"
                                        disabled={!this.state.postText.trim()}
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div style={{marginTop:20}}>
                            { postList }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
