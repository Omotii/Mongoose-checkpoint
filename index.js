require('dotenv').config();

const mongoose = require('mongoose');
const PersonModel = require('./model/person')

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, useUnifiedTopology: true 
    //this method displays warning in the console but it is added because the checkpoint recommended it.
})
.then(() => console.log('database connected successfully'))
.catch((err) => console.error(err) );

//Create and Save a Record of a Model: the below code creates a single model
/*
const person = new PersonModel({
    name: "Omotii",
    age: 47,
    favoriteFoods: ['rice', 'beans', 'plantain']
});

person.save().then( (data) => console.log(data)).catch( (err) => console.log(err))
*/

//the checkpoint requested a callback to ba parsed inside the .save() method, but this
//method throws an erro in the console saying that callback in .save is no longer supported.


//Create Many Records with model.create()
/*
PersonModel.create([
    {
        name: "Mary",
        age: 30,
        favoriteFoods: ['rice', 'egg', 'plantain']
    },
    {
        name: "Joseph",
        age: 32,
        favoriteFoods: ['bread', 'pizza', 'jam-dougnut', 'tea']
    },
    {
        name: "Ceasar",
        age: 18,
        favoriteFoods: ['pizza', 'jam-dougnut', 'eggroll']
    },
    {
        name: "Rose",
        age: 22,
        favoriteFoods: ['noodles', 'spaghetti', 'bread']
    },
    {
        name: "Joseph",
        age: 19,
        favoriteFoods: ['bread', 'tea', 'yam']
    },
    {
        name: "Favour",
        age: 136,
        favoriteFoods: ['egusi', 'vegetable', 'rice']
    },
    {
        name: "Martin",
        age: 45,
        favoriteFoods: ['Oha', 'burger', 'plantain']
    },
    {
        name: "Angela",
        age: 11,
        favoriteFoods: ['yam', 'garri', 'beans']
    },
    {
        name: "Mary",
        age: 43,
        favoriteFoods: ['rice', 'plantain']
    },
    {
        name: "Joseph",
        age: 29,
        favoriteFoods: ['bread', 'tea']
    },
    {
        name: "Mary",
        age: 20,
        favoriteFoods: ['rice', 'egg', 'plantain']
    },
    {
        name: "Joseph",
        age: 29,
        favoriteFoods: ['rice', 'egg', 'plantain']
    }

])
.then( doc => console.log(doc)).catch( err => console.error(err));
*/


//Find all the people having a given name, using Model.find()
/*
PersonModel.find({ name : 'Mary'}).then( doc => console.log(doc)).catch( err => console.error(err));
*/


//Find just one person which has a certain food in the person's favorites
/*
PersonModel.findOne({ favoriteFoods: 'rice'}).then( doc => console.log(doc)).catch( err => console.error(err));
*/


//Find the (only!!) person having a given _id
/*
PersonModel.findById({_id : '6580e146d59c15d5b6c87cc2'}).then( doc => console.log(doc)).catch( err => console.error(err));
*/


//Find a person by _id and Add "hamburger" to the list of the person's favoriteFoods
/*
PersonModel.findByIdAndUpdate(
    { _id : '6580e146d59c15d5b6c87cbc'},
    { "$push" : { favoriteFoods: 'hamburger'}},
    { new : true}
    )
    .then( doc => console.log(doc)).catch( err => console.error(err));
*/


//Find a person by Name and set the person's age to 20
/*
PersonModel.findOneAndUpdate(
    { name: 'Ceasar'},
    { age: 20},
    { new: true}
    )
    .then( doc => console.log(doc)).catch( err => console.error(err));
*/


//Delete one person by the person's _id
/*
PersonModel.findByIdAndDelete({ _id : '6580e146d59c15d5b6c87cc1'})
.then( () => console.log('succesfully deleted')).catch( err => console.error(err))
*/


//Delete all the people whose name is “Mary”
/*
PersonModel.deleteMany({ name : 'Mary'})
.then( () => console.log('succesfully deleted')).catch( err => console.error(err));
*/


//Find people who like rice. limit the results to two documents, and hide their age
/*
PersonModel.find({ favoriteFoods: 'bread'})
.sort({ name : 1})
.limit(2)
.select('name favoriteFoods')
.exec()
.then( doc => console.log(doc)).catch( err => console.error(err));
*/