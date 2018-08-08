import {Comments} from '/imports/db/index';

class CommentService{

    static createComment(comment){
        Comments.insert(comment);
    }

    static getCommentByPostId(postId){
        return Comments.find({postId : postId}).fetch();
        
    }

    static listComments() {
        return Comments.find().fetch();
    }

    static editComment (_id, comment) {
        Comments.update(_id, {
            $set: {
                text: comment.text,
            }
        });
    }

    static removeComment (_id){
        Comments.remove(_id);
    }

    static getComment (_id) {
        return Comments.findOne(_id);
    }

}

export default CommentService;