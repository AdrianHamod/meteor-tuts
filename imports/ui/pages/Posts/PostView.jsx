import React from 'react';
import { Meteor } from 'meteor/meteor';
import { AutoForm, LongTextField } from 'uniforms-unstyled';
import CommentsSchema from '/db/comments/schema';
import CommentService from '/imports/api/comments/services/CommentService.js'
import PostService from '/imports/api/posts/services/PostService.js'
import postWithCommentsQuery from '/imports/api/posts/queries/PostWithComments.js'
import { withQuery } from 'meteor/cultofcoders:grapher-react'

class PostView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { post: null, comments: null }//, comments: null};
    }




    submit = (comment) => {

        const { refetch } = this.props;
        CommentService.createComment(comment)
        refetch();
        alert('Comment added!')
    };




    render() {
        const { history, data, loading, error } = this.props;
        const post = Object.assign({}, data[0]);
        const { comments } = post;
        let countComments = (comments == null) ? 0 : comments.length;


        if (loading) {
            return <div>Loading....</div>
        }

        return (
            <div className="post">
                <p>Number of views: {post.views} </p>
                <p>Number of comments: {countComments} </p>
                <p> </p>
                {
                    comments &&
                    <div>
                        {
                            comments.map((comment) => {
                                return (
                                    <div key={comment._id}>
                                        <p>comment id: {comment._id} </p>
                                        <p>Comment: {comment.text}</p>{
                                            <p>Email: {
                                                comment.user.emails[0].address
                                            }
                                            </p>
                                        }
                                        <p>Usersid: {comment.userId} </p>
                                        {
                                            (Meteor.userId() === comment.userId || Meteor.userId() === post.userId) &&
                                            <div>
                                                {
                                                    <button onClick={() => {
                                                        CommentService.removeComment(comment._id);
                                                        alert('Comment removed!');
                                                    }
                                                    }>Remove comment</button>
                                                }
                                            </div>

                                        }

                                    </div>
                                )
                            })
                        }
                    </div>

                }

                <p> </p>

                <AutoForm onSubmit={this.submit} schema={CommentsSchema} model={{ userId: Meteor.userId(), postId: post._id }}>

                    <LongTextField name="text" /> Comment

                    <button type='submit'>Add comment</button>

                </AutoForm>

                <button onClick={() => history.push('/posts')}>Back to posts</button>
            </div>
        )



    }
}

export default withQuery(props => {
    const { _id } = props.match.params;
    PostService.incrementViews(_id);

    return postWithCommentsQuery.clone({ _id: _id });
}, { reactive: false })(PostView)