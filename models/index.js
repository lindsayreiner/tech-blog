const User = require('./users');
const Post = require('./Posts');
const Comment = require('./Comments');

User.hasMany(Posts, {
    foreignKey: 'user_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post, Comment };