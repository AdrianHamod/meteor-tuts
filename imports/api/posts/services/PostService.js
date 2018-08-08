import {Posts} from '/imports/db/index';
// import {Posts} from '/db';

class PostService{

    static createPost(post) {
        Posts.insert(post);
    }

    static listPosts () {
        return Posts.find().fetch();
    }

    static editPost (_id, post) {
        Posts.update(_id, {
            $set: {
                title: post.title,
                description: post.description,
                type: post.type
            }
        });
    }

    static incrementViews(_id){
        Posts.update(_id, {
            $inc:{
                views: 1
            }
        });
    }

    static removePost (_id){
        Posts.remove(_id);
    }

    static getPost (_id) {
        return Posts.findOne(_id);
    }

   
}

export default PostService