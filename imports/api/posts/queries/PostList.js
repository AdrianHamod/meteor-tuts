import {Posts} from '/db';

export default Posts.createQuery(
    'postList', {
        title: 1,
        description: 1,
        userId: 1,
        views: 1 ,
        createdAt: 1,
        type: 1,
        comments :{
            text: 1,
            userId: 1,
            postsId: 1
        }
    }
);