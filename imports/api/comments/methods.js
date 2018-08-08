import {Meteor} from 'meteor/meteor';
import {Comments} from '/db';

Meteor.methods({
    'comment.create'(comment) {
        Comments.insert(comment);
    },

    'comment.byPostId'(postId){
        return Comments.find({postId : postId}).fetch();
        
    },

    'comment.list' () {
        return Comments.find().fetch();
    },

    'comment.edit' (_id, comment) {
        Comments.update(_id, {
            $set: {
                text: comment.text,
            }
        });
    },

    'comment.remove' (_id){
        Comments.remove(_id);
    },

    'comment.get' (_id) {
        return Comments.findOne(_id);
    }

    
});