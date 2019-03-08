import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: '',
            postsArray: []
        }
    }
    postHandler = (e) => {
        this.setState({ post: e.target.value })
    }

    onPost = (e) => {
        e.preventDefault();
        const { post, postsArray } = this.state;
        postsArray.push(post);
        this.setState({ postsArray, post: '' })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                        <div className="row">
                            <div className="col text-center">
                                <h2>Create A Post</h2>
                            </div>
                        </div>
                        <form onSubmit={this.onPost}>
                            <div className="row align-items-center mt-8">
                                <div className="col">
                                    <input type="text"
                                        className="form-control" placeholder="Enter Text Here"
                                        value={this.state.post}
                                        onChange={this.postHandler}
                                    />
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary" onClick={this.onPost}>Post</button>
                                </div>
                            </div>
                        </form>


                        <div >
                            {
                                this.state.postsArray && this.state.postsArray.length > 0 ?
                                    <div>
                                        {
                                            this.state.postsArray.map((item, i) => {
                                                return (
                                                    <ul key={i}>
                                                        <li style={{ listStyleType: 'none' }}>{item}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div> : null

                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
