const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('mydatabase');

        const collection = database.collection('mycollection');

        const document = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };

        await collection.insertOne(document);
        console.log('Document inserted successfully');
    } finally {
        await client.close();
    }
}

main().catch(console.error);
