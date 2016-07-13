'use strict'
let http= require('http');
let hapi = require('hapi');

let Library = require('./library')
let books = new Library();
books.getAll():
const server = new hapi.Server();
server.connection({
  host:'localhost',
  port:9000,
});
server.route({
  method:'GET',
  path:'/gimme',
  handler: function(request,reply){
    let ingredients = [
      {name: pepperoni},
      'Olives',
      'onion',
      'cheese',
    ];
    reply(books.GetAll())
  },
});
server.start();
