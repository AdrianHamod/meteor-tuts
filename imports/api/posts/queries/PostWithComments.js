import {Posts} from '/db';

export default Posts.createQuery(
    'postWithComments', {
        
        $filter({
            params,
            // options,
            filters
        }){
            filters._id = params._id
        },
        title: 1,
        description: 1,
        userId: 1,
        views: 1 ,
        createdAt: 1,
        type: 1,
        comments :{
            text: 1,
            userId: 1,
            postsId: 1,
            user: {
                emails: 1
            }
        }
    },
);