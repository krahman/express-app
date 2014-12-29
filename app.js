/*global require*/


var express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  personSchema = {
    name: String,
    gender: String,
    email: String
  },
  Person = mongoose.model('Person', personSchema, 'people');

mongoose.connect('mongodb://localhost/simple');
app.get('/', function (req, res) {
  Person.find(function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);