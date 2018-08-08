import Posts from '/db/posts/collection';
import Users from '/db/users/collection';
import Comments from '/db/comments/collection';

Posts.addLinks({
    'users':{
        field: '_id',
        type: 'one',
        collection: Users
    },
    'comments':{
        inversedBy: 'posts',
        collection: Comments
    }
})
