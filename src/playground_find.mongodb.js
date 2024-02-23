use('learning');

//--------------------------------------------------------------------------
// Find Data

// This method accepts a query object. If left empty, all documents will be 
// returned.
db.posts.find()

// This method accepts a query object. If left empty, it will return the first 
// document it finds.
db.posts.findOne()

//--------------------------------------------------------------------------
// Querying Data

// To query, or filter, data we can include a query in our find() or findOne() 
// methods.
db.posts.findOne({ category: "News" })

//--------------------------------------------------------------------------
// Projection

// Both find methods accept a second parameter called projection.
// This parameter is an object that describes which fields to include in the 
// results.

db.posts.find({}, { title: 1, date: 1 })

// Notice that the _id field is also included. This field is always included 
// unless specifically excluded.

// We use a 1 to include a field and 0 to exclude a field.

db.posts.find({}, { _id: 0, title: 1, date: 1 })

// Let's exclude the date category field. All other fields will be included in 
// the results.

db.posts.find({}, { category: 0 })

// Note: You cannot use both 0 and 1 in the same object. The only exception is 
// the _id field.You should either specify the fields you would like to include 
// or the fields you would like to exclude.

// We will get an error if we try to specify both 0 and 1 in the same object.

// db.posts.find({}, { title: 1, date: 0 })


