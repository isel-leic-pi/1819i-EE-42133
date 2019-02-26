'use strict'

const e_db = require('../data/foca-db')(this)
const f_data = require('../data/football-data')(this)
//const f_data = require('../mocks/football-data-mock')(this)
const services = require('../services/foca-service')(e_db, f_data)
const scripts_db = require('../services/db_scripts')(services)

function getLeagues(req, res) {
	services
		.getLeagues()
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function getLeagueTeams(req, res) {
	const params = req.params
	services
		.getLeagueTeams(params['league_id'])
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function getGroups(req, res) {
	if (req.user == undefined) throw { message: 'unauthorized' }
	services
		.getGroups(req.user.username)
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function getGroupDetails(req, res) {
	if (req.user == undefined) throw { message: 'unauthorized' }
	const params = req.params
	services
		.getGroupDetails(params['group_id'], req.user.username)
		.then(result => {
			if (result.message == 'NOTFOUND')
				handleError(res, {
					errorCode: 'NOTFOUND',
					message: 'no team found'
				})
			else respond(res, '200', result)
		})
		.catch(err => handleError(res, err))
}

function createGroup(req, res) {
	if (req.user == undefined) throw { message: 'unauthorized' }
	const params = req.params
	const body = req.body
	services
		.createGroup(
			params['group_id'],
			body['name'],
			body['description'],
			req.user.username
		)
		.then(result => respond(res, 201, result))
		.catch(err => handleError(res, err))
}

function updateGroup(req, res) {
	if (req.user == undefined) throw { message: 'unauthorized' }
	const params = req.params
	const body = req.body
	services
		.updateGroup(
			params['group_id'],
			body['name'],
			body['description'],
			req.user.username
		)
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function postTeamInGroup(req, res) {
	if (req.user == undefined) throw { message: 'unauthorized' }
	const params = req.params
	services
		.addTeamToGroup(params['group_id'], params['team_id'], req.user.username)
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function deleteTeamFromGroup(req, res) {
	if (req.user == undefined) throw { message: 'unauthorized' }
	const params = req.params
	services
		.removeTeamFromGroup(
			params['group_id'],
			params['team_id'],
			req.user.username
		)
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function getGroupGames(req, res) {
	if (req.user == undefined) throw { message: 'unauthorized' }
	const params = req.params
	const query = req.query
	services
		.getGroupGames(
			params['group_id'],
			query['initial_date'],
			query['final_date'],
			req.user.username
		)
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function postGroupCopy(req, res){ //EE
	if (req.user == undefined) throw { message: 'unauthorized' }
	const params = req.params
	const body = req.body
	services
	.copyGroup(
		params['group_id'],
		req.user.username,
		body['new_id']
	)
	.then(result => respond(res, 201, result))
	.catch(err => handleError(res, err))
}

function getLastId(req,res){
	services
		.getLastIdGroups()
		.then(result => respond(res, 200, result))
		.catch(err => handleError(res, err))
}

function init(req, res) {
	services
		.init()
		.then(res => scripts_db.populateDB())
		.then(result =>
			respond(res, res.statusCode, { message: 'init successful' })
		)
		.catch(err => handleError(res, err))
}

// response with json
function respond(res, statusCode, response) {
	console.log('response ok, statusCode=' + statusCode)

	res.writeHead(statusCode, {
		'Content-Type': 'application/json'
	})

	res.write(JSON.stringify({ message: response.message }))
	res.end()
}

function handleError(res, err) {
	console.log('error: ' + JSON.stringify(err))
	if (err.errorCode != undefined) {
		if (err.errorCode == 'NODBCON' || err.errorCode == 'NOFDCON')
			res.statusCode = 503
		else if (err.errorCode == 'NOTFOUND') res.statusCode = 404
		else if (err.errorCode == 'Conflict') res.statusCode = 409
		else if (err.errorCode == 'forbidden') res.statusCode = 403
		else if (err.errorCode == 'unauthorized') res.statusCode = 401
		else res.statusCode = 500
		res.end(JSON.stringify({ message: err.message }))
	} else {
		res.end('unknown error')
	}
}

module.exports.init = init
module.exports.getLeagues = getLeagues
module.exports.getLeagueTeams = getLeagueTeams
module.exports.getGroups = getGroups
module.exports.getGroupDetails = getGroupDetails
module.exports.createGroup = createGroup
module.exports.updateGroup = updateGroup
module.exports.postTeamInGroup = postTeamInGroup
module.exports.deleteTeamFromGroup = deleteTeamFromGroup
module.exports.getGroupGames = getGroupGames
module.exports.postGroupCopy = postGroupCopy
module.exports.getLastId = getLastId

// responses:       // errors:
// 200 ok           // 404 wrong method
// 201 created      // 404 wrong params
// 204 no content   // 400 resource not found
