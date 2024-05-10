// seperate file to create a var for database connection
// have to run   mongod --dbpath ./mongo-db-data
import { MongoClient } from 'mongodb'
let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://c2063559:hlJNWMfHuOFG91HY@navicluster.8sm4tqu.mongodb.net/?retryWrites=true&w=majority&appName=NaviCluster`);
    
    await client.connect()          

    db = client.db('Navi');
    cb();
}

export {
    db,
    connectToDb,
}
