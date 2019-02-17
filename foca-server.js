'use strict'

var path = require('path')
const express = require('express')
const api = require('./web-api/foca-web-api')
const login_routes = require('./web-api/auth-web-api')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'dist')))

const PORT = 1904
const HOST = 'localhost'

app.listen(PORT, () =>
	console.log(
		`Server listening on port ${PORT}. Entry point is http://${HOST}:${PORT}/`
	)
)
app.on('error', () => console.log(`Error listening on ${PORT}. Cause: ${err}`))

app.use(cookieParser())
login_routes.auth(app)

// Register routes
app.get('/leagues', api.getLeagues)
app.get('/leagues/:league_id/teams', api.getLeagueTeams)

app.get('/groups', api.getGroups)
app.post('/groups', api.createGroup)
app.post('/groups/:group_id', api.createGroup)
app.get('/groups/:group_id', api.getGroupDetails)
app.put('/groups/:group_id', api.updateGroup)

app.post('/groups/:group_id/teams/:team_id', api.postTeamInGroup)
app.delete('/groups/:group_id/teams/:team_id', api.deleteTeamFromGroup)

app.get('/groups/:group_id/games', api.getGroupGames)

app.post('/groups/:group_id/copy', api.postGroupCopy)//EE
app.put('/init', api.init)
