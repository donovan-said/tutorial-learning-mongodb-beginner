// Create a database called "learning"
use('learning');

//--------------------------------------------------------------------------
// Insert Documents

//--------------------------------------------------------------------------
// insertOne()

// To insert a single document, use the insertOne() method.
// This method inserts a single object into the database.

// db.posts.insertOne({
//     title: "Post Title 1",
//     body: "Body of post.",
//     category: "News",
//     likes: 1,
//     tags: ["news", "events"],
//     date: Date()
// })

//--------------------------------------------------------------------------
// insertMany()

// To insert multiple documents at once, use the insertMany() method.
// This method inserts an array of objects into the database.

db.posts.insertMany([
    {
        title: "Post Title 1",
        body: "Body of post.",
        category: "News",
        likes: 1,
        tags: ["news", "events"],
        date: Date()
    },
    {
        title: "Post Title 2",
        body: "Body of post.",
        category: "Event",
        likes: 2,
        tags: ["news", "events"],
        date: Date()
    },
    {
        title: "Post Title 3",
        body: "Body of post.",
        category: "Technology",
        likes: 3,
        tags: ["news", "events"],
        date: Date()
    },
    {
        title: "Post Title 4",
        body: "Body of post.",
        category: "Event",
        likes: 4,
        tags: ["news", "events"],
        date: Date()
    }
])