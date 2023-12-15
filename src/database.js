require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");


const uri = process.env.MONGODB_URI
          .replace("username", process.env.MONGODB_USERNAME)
          .replace("password", process.env.MONGODB_PASSWORD);
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
}
const client = new MongoClient(uri, options);


async function get()
{    
    try {
        await client.connect();
    
        await client.db("admin").command({ ping: 1 });
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        await client.close();
    }
    
    
}


async function post()
{
    await client.connect();

    try {

    } catch (error) {
        console.log(`Error: ${error}`);
    }

    await client.close();
}


module.exports = {
   get,
   post,
}
