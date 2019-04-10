import Products from '../../../models/products'
import ProductsName from '../../../models/products_name'
const fetch = require('node-fetch');

function createProductsRoutes(server){
    console.log('Registering student routes')
    server.route([
        {
            method: 'GET',
            path: '/api/v1/products',
            handler: async function(request, reply){
              let inventory = await fetch('http://192.168.0.103:5000/products').then((resp) => resp.json());
              let names = await ProductsName.findOne({}).exec();
              let resp = [
                { product : names.caseA, quantity: inventory.caseA },
                { product : names.caseB, quantity: inventory.caseB },
                { product : names.caseC, quantity: inventory.caseC }
              ]
              return resp;
            }

        },
        {
          method: 'GET',
          path: '/api/v1/products/names',
          handler: async function(request, reply){
            let names = await ProductsName.findOne({}).exec();
            let resp =
            [
              { product : names.caseA},
              { product : names.caseB},
              { product : names.caseC}
            ]
            return resp;
          }

      },
        {
          method: 'PUT',
          path: '/api/v1/products/update',
          handler: async function(request, reply){
            let names = await ProductsName.updateOne({},{caseA:request.query.caseA,caseB:request.query.caseB,caseC:request.query.caseC}).exec();
            return names;
          }

        },
        {
          method: 'GET',
          path: '/api/v1/shopping/check',
          handler: async function(request, reply){
            let inventory = await fetch('http://192.168.0.103:5000/inventory').then((resp) => resp.json())
            return inventory;
          }

        },
        {
          method: 'GET',
          path: '/api/v1/shopping/list',
          handler: function(request, reply){
            return Products.find();
          }
        },
        {
          method: 'GET',
          path: '/api/v1/shopping/products',
          handler: async function(request, reply){
              let inventory = await fetch('http://192.168.0.103:5000/products/buy').then((resp) => resp.json());
              let names = await ProductsName.findOne({}).exec();
              let resp = [
                { product : names.caseA, quantity: inventory.caseA },
                { product : names.caseB, quantity: inventory.caseB },
                { product : names.caseC, quantity: inventory.caseC }
              ]
            return resp;
          }

        },
        {
            method: 'POST',
            path: '/api/v1/shopping/complete',
            handler: async function(request, reply){
              let inventory = await fetch('http://192.168.0.103:5000/products/buy').then((resp) => resp.json());
              let names = await ProductsName.findOne({}).exec();
              const  caseA = { product : names.caseA, quantity: inventory.caseA };
              const  caseB = { product : names.caseB, quantity: inventory.caseB };
              const  caseC = { product : names.caseC, quantity: inventory.caseC };
              const products = new Products({ caseA, caseB, caseC })
              return products.save();
            }
        },
    ])
}

export default createProductsRoutes;
