require('dotenv').config();

const db = require('./db');
const Image = require('./models/Image');
const Video = require('./models/Video');
const Comment = require('./models/Comment');

db
.sync({ logging: (d) => console.log(JSON.stringify(d, null, 2)) })
.then(() => {
    console.log("All models are synchronized")
});