import Posts from '/db/posts/collection';
import Comments from '/db/comments/collection';
import Users from '/db/users/collection';

/*
Comments.addLinks({
    posts:{
        collection: Posts,
        inversedBy: 'comments'
    }
})*/

Comments.addLinks({
    'posts':{
        field: 'postId',
        type: 'one',
        collection: Posts
    },

    'user':{
        field: 'userId',
        type: 'one',
        collection: Users
    }
})