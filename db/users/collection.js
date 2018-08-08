import { Meteor } from 'meteor/meteor';
import UserSchema from './schema';

const Users = Meteor.users;

Users.allow({
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

Users.attachSchema(UserSchema);

export default Users;