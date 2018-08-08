import React from 'react';
import postListQuery from '/imports/api/posts/queries/PostList.js'
import PostService from '/imports/api/posts/services/PostService.js'
import CommentService from '/imports/api/comments/services/CommentService.js'
import Meteor from 'meteor/meteor'


export default class PostList extends React.Component {
    constructor() {
        super();
        this.state = { posts: null }
    }

    componentDidMount() {

        const query = postListQuery.clone();
        query.fetch((err, posts) => {
            if (err) {
                console.log(err);
            }

            this.setState({ posts: posts });

        })



    }

    removePosts = (post) => {

        if (post.hasOwnProperty('comments')) {
            for (let comment of post.comments) {
                CommentService.removeComment(comment._id)
            }
        }
        PostService.removePost(post._id)

    }

    render() {
        const { posts } = this.state;
        const { history } = this.props;

        if (!posts) {
            return <div>Loading....</div>
        }
        //console.log(posts);

        return (
            <div className="post">
                {
                    posts.map((post) => {
                        return (
                            <div key={post._id}>
                                <p>Post id: {post._id} </p>
                                <p>Post title: {post.title}, Post Description: {post.description}, Post Type: {post.type} </p>
                                <p>Post's userId: {post.userId} </p>



                                <button onClick={() => {
                                    history.push("/posts/view/" + post._id)
                                }}> View post</button>

                                {
                                    Meteor.userId() == post.userId &&
                                    <div>
                                        {
                                            <button onClick={() => {
                                                this.removePosts(post)
                                            }
                                            }>Remove post</button>

                                        }
                                        {
                                            <button onClick={() => {
                                                history.push("/posts/edit/" + post._id)
                                            }}> Edit post
                                            </button>
                                        }
                                    </div>
                                }

                            </div>
                        )
                    })}
                <p> </p>
                <button onClick={() => history.push('/posts/create')}>Create a new post</button>
            </div>
        )
    }
}
