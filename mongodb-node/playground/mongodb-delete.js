const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const dbClient = db.db('Todos');

    //deleteMany
    // dbClient.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // dbClient.collection('Todos').deleteOne({text:'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // dbClient.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });

    // dbClient.collection('Users').findOneAndDelete({_id: new ObjectID('5b39309c9d9cf4439c7cd356')}).then((result) => {
    //     console.log(result);
    // });

    // db.close();
});
