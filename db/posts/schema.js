import SimplSchema from 'simpl-schema';

export default new SimplSchema({
    title: String,
    description: String,
    userId: String,
    views: Number ,
    createdAt: Date,
    type: String,
});
