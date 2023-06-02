require('dotenv').config();
const express = require('express');
const app = express();

const postsRouter = require('./src/routes/posts');
const authRouter = require('./src/routes/auth');

app.use(express.json());
app.use('/posts', postsRouter);
app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
