// Import the MongoClient class from the mongodb package
const { MongoClient } = require('mongodb');

// MongoDB connection URI. Replace 'username', 'password', 'hostname', and 'port' with your MongoDB connection details.
const uri = 'mongodb://localhost:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to perform database operations
async function main() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the "mydatabase" database
        const database = client.db('mydatabase');

        // Access the "mycollection" collection within the "mydatabase" database
        const collection = database.collection('mycollection');

        // Document to be inserted into the collection
        const document = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };

        // Insert the document into the collection
        await collection.insertOne(document);
        console.log('Document inserted successfully');
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

// Call the main function
main().catch(console.error);
