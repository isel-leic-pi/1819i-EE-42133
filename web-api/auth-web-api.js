const session = require('express-session')
const passport = require('passport')
const authClass = require('./auth.js')

const es = {
    host: 'localhost',
    port: '9200',
}

const authService = authClass.init(es)

function auth(app) {

    passport.serializeUser((user, done) => {
        
        console.log(`username: ${user._username}`)
        console.log(`user id: ${user._id}`)
        
        return done(null, user)
    })
    passport.deserializeUser((userId, done) => authService
        .getUser(userId)
        .then(user => done(null, user))
        .catch(err => done(err))
    )

    app.use(session({secret:"keyboard cat"}))
    app.use(passport.initialize())
    app.use(passport.session())

    app.get('/foca/api/session', getSession)
    app.post('/foca/api/login', login)
    app.post('/foca/api/logout', logout)
    app.post('/foca/api/signup', signup)

    function getSession(req, resp, next) {
        const username = req.isAuthenticated() ? req.user.username : undefined
        resp.json({
            'auth': req.isAuthenticated(), // <=> req.user != undefined
            'username': username
        })
    }
    function login(req, resp, next) {

        console.log("here")

        authService
            .authenticate(req.body.username, req.body.password)
            .then(user => {
                req.login(user, (err) => {
                    if(err) next(err)
                    else resp.json(user)
                })
            })
            .catch(err => next(err))
    }

    function logout(req, resp, next) {
        req.logout()
        resp.write('ok')
    }

    function signup(req, resp, next) {
        authService
            .createUser(req.body.username, req.body.password)
            .then(user => {
                req.login(user, (err) => {
                    if(err) next(err)
                    else resp.json(user)
                })
            })
    }
}
module.exports.auth = auth