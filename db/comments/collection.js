import {Mongo} from "meteor/mongo";
import CommentsSchema from './schema';

const Comments = new Mongo.Collection('comments');

Comments.allow({
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

Comments.attachSchema(CommentsSchema);

export default Comments;