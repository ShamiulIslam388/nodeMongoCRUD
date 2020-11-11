const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'final-task-api'

MongoClient.connect(connectionURL,{ useNewUrlParser:true,useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connet to DB')
    }
    
    const db = client.db(databaseName)


    // db.collection('users').insertOne({
    //     name: 'john',
    //     age: 26
    // })

    // db.collection('tasks').insertOne({
    //     description: 'walking',
    //     completed: true
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert')
    //     } 
        
    //     console.log(result.ops)
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'swimming',
    //         completed: true
    //     },
    //     {
    //         description: 'running',
    //         completed: false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert')
    //     } 
        
    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({
    //     _id: ObjectId("5fa2c89562a59a1fc4ea7515")
    // },(error,task)=>{
    //     if(error) {
    //         return console.log('Unable to fetch data')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({
    //     completed: true
    // }).toArray((error,task)=>{
    //     if(error){
    //         return console.log('Unable to connect')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').updateMany({completed: false},{$set:{completed:true}})
    //     .then((result)=>{
    //      console.log(result)
    //     })
    //     .catch((error)=>{
    //      console.log(error)
    //     })


    // db.collection('tasks').deleteOne({"description" : "swimming"})
    //     .then((result)=>{
    //         console.log(result.deletedCount)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })

   
    
})