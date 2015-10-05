// Write your package code here!
Errors = {
  collection: new Mongo.Collection(null),

  throw: function(message){
    Errors.Collection.insert({message: message, seen: false});
  }
}