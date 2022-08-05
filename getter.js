const Comment = require("./models/Comment");
const Image = require("./models/Image");
const Video = require("./models/Video")

async function getVideos() {
    const videos = await Video.findAll({ include: Comment });
    return videos;
}

async function getImages() {
    const images = await (await Image.findAll({ include: Comment }));
    return images;
}

module.exports = {
    getImages,
    getVideos
}