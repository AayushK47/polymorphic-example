const Comment = require("./models/Comment");
const Image = require("./models/Image");
const Video = require("./models/Video");

async function seedData() {
    await Image.bulkCreate([
        {
            name: "Image 1",
            url: "Url 1"
        },
        {
            name: "Image 2",
            url: "Url 2"
        },
        {
            name: "Image 3",
            url: "Url 3"
        }
    ]);
    await Video.bulkCreate([
        {
            name: "Video 1",
            url: "Video Url 1"
        },
        {
            name: "Video 2",
            url: "Video Url 2"
        },
        {
            name: "Video 3",
            url: "Video Url 3"
        }
    ]);
    await Comment.bulkCreate([
        {
            commentableType: "videos",
            commentableId: 1,
            headline: "Nice video",
            likes: 0,
        },
        {
            commentableType: "videos",
            commentableId: 1,
            headline: "Really cool video",
            likes: 0,
        },
        {
            commentableType: "videos",
            commentableId: 2,
            headline: "Another Nice video",
            likes: 0,
        },
        {
            commentableType: "images",
            commentableId: 1,
            headline: "Nice image",
            likes: 0,
        },
        {
            commentableType: "images",
            commentableId: 1,
            headline: "Really cool image",
            likes: 0,
        },
        {
            commentableType: "images",
            commentableId: 2,
            headline: "Another Nice image",
            likes: 0,
        }
    ]);
}

module.exports = seedData;