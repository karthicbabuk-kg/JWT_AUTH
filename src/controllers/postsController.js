const Post = require('../models/postModel');

const getPosts = (req, res) => {
  const filteredPosts = Post.filter((post) => post.username === req.user.name);
  res.json(filteredPosts);
};

module.exports = {
  getPosts,
};
