```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "<connection_string>";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Find one document with error handling
    const query = { name: 'John Doe' };
    const result = await collection.findOne(query).catch(err => {
        console.error('Error finding document:', err);
        return null; //or throw err;
    });
    if (result) {
        console.log('Found document:', result);
    } else {
        console.log('Document not found.');
    }

    // Insert one document with error handling
    const doc = { name: 'Jane Doe', age: 30 };
    const insertResult = await collection.insertOne(doc).catch(err => {
        console.error('Error inserting document:', err);
        return null; //or throw err;
    });
    if (insertResult) {
        console.log('Inserted document:', insertResult);
    } else {
        console.log('Failed to insert document.');
    }

    // Update one document with error handling
    const updateQuery = { name: 'Jane Doe' };
    const updateDoc = {
      $set: { age: 31 }
    };
    const updateResult = await collection.updateOne(updateQuery, updateDoc).catch(err => {
        console.error('Error updating document:', err);
        return null; //or throw err;
    });
    if (updateResult) {
        console.log('Updated document:', updateResult);
    } else {
        console.log('Failed to update document.');
    }

    // Delete one document with error handling
    const deleteQuery = { name: 'Jane Doe' };
    const deleteResult = await collection.deleteOne(deleteQuery).catch(err => {
        console.error('Error deleting document:', err);
        return null; //or throw err;
    });
    if (deleteResult) {
        console.log('Deleted document:', deleteResult);
    } else {
        console.log('Failed to delete document.');
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```