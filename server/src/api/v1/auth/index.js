import User from '../../../models/user'

function createUsersRoutes(server){
    console.log('Registering student routes')
    server.route([
        {
            method: 'GET',
            path: '/api/v1/auth',
            handler: function(request, reply){
              const username = request.query.user
              const password = request.query.pass
              let res =  User.find({ user: username, pass: password}).exec()
              return res
            }
        }


    ])
}

export default createUsersRoutes;
