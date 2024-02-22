const { MongoClient } = require('mongodb');

const uri = "mongodb://root:rootpassword@127.0.0.1:27017/admin";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('sample_mflix');
        const collection = db.collection('movies');

        // Find the first document in the collection
        const first = await collection.findOne();
        console.log(first);
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}
run().catch(console.error);




// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// module.exports = () => {
//     mongoose.connect('mongodb://root:rootpassword@127.0.0.1:27017/movies', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     mongoose.connection.on('open', () => {
//         console.log('Connection OK');
//     })
//     mongoose.connection.on('error', (err) => {
//         console.log('Connection Fail', err);
//     })
// }