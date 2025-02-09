# MongoDB Error Handling and Deprecated Methods

This repository demonstrates a common issue with MongoDB JavaScript driver code: lack of robust error handling and use of deprecated methods.

The `bug.js` file contains the problematic code.  It attempts to connect to a MongoDB database, perform CRUD operations (Create, Read, Update, Delete), and then closes the connection.  However, it lacks error handling for connection failures or document not found scenarios.  It also uses methods which might be deprecated.

The `bugSolution.js` file provides a more robust solution with improved error handling and updated methods.

## How to Run

1.  Ensure you have Node.js and npm installed.
2.  Install the MongoDB driver: `npm install mongodb`
3.  Replace `<connection_string>` in `bug.js` and `bugSolution.js` with your actual MongoDB connection string.
4.  Run the code using `node bug.js` and `node bugSolution.js`.