import Posts from '/db/posts/collection.js'
import Users from '/db/users/collection.js'
import Comments from '/db/comments/collection.js'


Users.addLinks({
    'posts':{
        collection: Posts,
        inversedBy: 'users'
    },
    'comments':{
        collection: Comments,
        inversedBy: 'user'
    }
})
