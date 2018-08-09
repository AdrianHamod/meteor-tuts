import React from 'react';
import { Meteor } from 'meteor/meteor'
import { AutoForm, AutoField, LongTextField, SelectField } from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';
import PostService from '/imports/api/posts/services/PostService.js'
import HiddenField from 'uniforms-unstyled/HiddenField';
import _ from 'underscore'
import PostTypesEnums from '/imports/db/posts/enums/types.js'


export default class PostCreate extends React.Component {
    constructor() {
        super();
    }

    submit = (post) => {
        PostService.createPost(post);
        alert('Post added!')
    };

    render() {
        const { history } = this.props;

        let labels = _.values(PostTypesEnums);
        let types = [{ label: ' ', value: '0' }];

        for (let i = 0; i < labels.length; i++) {
            types.push({ label: labels[i], value: (i + 1).toString() })
        }


        return (
            <div className="post">
                <AutoForm onSubmit={this.submit} schema={PostSchema} model={{ userId: Meteor.userId(), views: 0, createdAt: new Date() }}>

                    <AutoField name="title" />

                    <LongTextField name="description" />

                    <SelectField options={types} name="type" />

                    <HiddenField name='createdAt' />

                    <button type='submit'>Add post</button>
                    <button onClick={() => history.push('/posts')}>Back to posts</button>
                </AutoForm>
            </div>



        )
    }
}
