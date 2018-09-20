const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const dbClient = db.db('Todos');

    //findOneAndUpdate
    // dbClient.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ba3707d050be2abb655fe91')
    // },
    // {
    //     $set:{
    //         completed: true
    //     }
    // },
    // {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    dbClient.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b3930b48a482643a6f0bf71')
    },
    {
        $set:{
            name: 'moh_vinsmoke'
        },
        $inc:{
            age:1
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.close();
});
