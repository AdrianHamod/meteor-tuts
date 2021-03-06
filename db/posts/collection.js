import {Mongo} from "meteor/mongo";
import PostSchema from './schema'

const Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function(){
        return true;
    }
})

Posts.attachSchema(PostSchema);

export default Posts;