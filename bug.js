```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Find one document
    const query = { name: 'John Doe' };
    const result = await collection.findOne(query);
    console.log('Found document:', result);

    // Insert one document
    const doc = { name: 'Jane Doe', age: 30 };
    const insertResult = await collection.insertOne(doc);
    console.log('Inserted document:', insertResult);

    // Update one document
    const updateQuery = { name: 'Jane Doe' };
    const updateDoc = {
      $set: { age: 31 }
    };
    const updateResult = await collection.updateOne(updateQuery, updateDoc);
    console.log('Updated document:', updateResult);

    // Delete one document
    const deleteQuery = { name: 'Jane Doe' };
    const deleteResult = await collection.deleteOne(deleteQuery);
    console.log('Deleted document:', deleteResult);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```