'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
import createProductsRoutes from './api/v1/products'
import createUsersRoutes from './api/v1/auth'



const server=Hapi.server({
  host:'localhost',
  port:8000
});

createProductsRoutes(server);
createUsersRoutes(server);

const start =  async function() {

  try {
    console.log('Conneting to database')
    mongoose.connect('mongodb://127.0.0.1:27017/soad4id', { useNewUrlParser: true });
    mongoose.connection.once('open',() => {
      console.log('Connected to database')
    })
    console.log('Starting Server')
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();
