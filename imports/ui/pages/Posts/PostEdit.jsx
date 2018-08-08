import React from 'react';
import { AutoForm, AutoField, LongTextField, SelectField } from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';
import PostService from '/imports/api/posts/services/PostService.js'
import postGetQuery from '/imports/api/posts/queries/PostGet'
import _ from 'underscore'
import PostTypesEnums from '/imports/db/posts/enums/types.js'


export default class PostEdit extends React.Component {
    constructor() {
        super();
        this.state = { post: null };
    }

    componentDidMount() {
        const query = postGetQuery.clone({ _id: this.props.match.params._id })
        query.fetchOne((err, post) => {
            this.setState({ post })
        })
    }

    submit = (post) => {
        PostService.editPost(this.props.match.params._id, post)
        alert('Post modified!')
    };

    render() {
        const { history } = this.props;
        const { post } = this.state;

        if (!post) {
            return <div>Loading....</div>
        }

        let labels = _.values(PostTypesEnums);
        let types = [{ label: ' ', value: '0' }];

        for (let i = 0; i < labels.length; i++) {
            types.push({ label: labels[i], value: (i + 1).toString() })
        }

        return (
            <div className="post">
                <AutoForm onSubmit={this.submit} schema={PostSchema} model={post}>
                    <AutoField name="title" />
                    <LongTextField name="description" />
                    <SelectField options={types} name="type" />

                    <button type='submit'>Edit post</button>
                    <button onClick={() => history.push('/posts')}>Back to posts</button>
                </AutoForm>
            </div>
        )
    }
}
