
const PostTypesEnum = {

    NATURE: 'Nature',
    PSYCHOLOGY: 'Psychology',
    MUSIC: 'Music',
    PROGRAMMING: 'Programming',
    PROJECT_MANAGEMENT: 'Project Management',
    OTHER: 'Other'
}

const PostTypesLabels = {

    [PostTypesEnum.NATURE]: 'Nature',
    [PostTypesEnum.PSYCHOLOGY]: 'Psychology',
    [PostTypesEnum.PROGRAMMING]: 'Programming',
    [PostTypesEnum.PROJECT_MANAGEMENT]: 'Project Management',
    [PostTypesEnum.OTHER]: 'Other'
}

export default PostTypesEnum

export {
    PostTypesEnum,
    PostTypesLabels
}