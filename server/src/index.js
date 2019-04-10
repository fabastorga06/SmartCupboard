'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
import createProductsRoutes from './api/v1/products'
import createUsersRoutes from './api/v1/auth'
const fetch = require("node-fetch");


//import createStudentRoutes from './api/v1/student'
//import schema from './graphql/schema';


// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

createProductsRoutes(server);
createUsersRoutes(server);

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:async function(request,h) {
        let res =  fetch('http://192.168.0.103:5000/sensors').then((resp) => resp.json()) ;
        return "{ status: 'ok' }";
    }
});

// Start the server
const start =  async function() {

    try {
        //connect to mongo instance
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
