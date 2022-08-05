require('dotenv').config();

const db = require('./db');
const Image = require('./models/Image');
const Video = require('./models/Video');
const Comment = require('./models/Comment');
const seedData = require('./seeder');
const { getVideos, getImages } = require('./getter');

Image.hasMany(Comment, {
    foreignKey: 'commentableId',
    scope: {
      commentableType: 'images'
    }
});
Comment.belongsTo(Image, { foreignKey: 'commentableId' });

Video.hasMany(Comment, {
    foreignKey: 'commentableId',
    scope: {
      commentableType: 'videos'
    }
});
Comment.belongsTo(Video, { foreignKey: 'commentableId' });

db
.sync({ force: true, logging: (d) => console.log(JSON.stringify(d, null, 2)) })
.then(async () => {
    console.log("All models are synchronized")
    await seedData();
    const videos = await getVideos();
    const images = await getImages();
    for(let video of videos) {
        console.log(JSON.stringify(video.dataValues, null, 4));
    }
    for(let image of images) {
        console.log(JSON.stringify(image.dataValues, null, 4));
    }
});