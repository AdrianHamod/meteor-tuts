import {Posts} from '/db';


export default Posts.createQuery(
    'postGet', {
        
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
        type: 1
    }
);