const sequelize = require('../config/connection');
const { User } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models')

const userData = require('./userData.json');

const seedDatabase = async () => {
    console.log('seedingBegins---------------------')
    await sequelize.sync({ force: true });

    console.log('seedingUsers---------------------')
    await User.bulkCreate(userData);

    // console.log('seedingPosts---------------------')
    // await Post.bulkCreate(postData);

    // console.log('seedingComments---------------------')
    // await Comment.bulkCreate(commentData);

    // console.log('seedingComplete---------------------')
    process.exit(0);
};

seedDatabase();