'use strict'

const fetch = require('node-fetch')

const URL = 'http://localhost:9200/foca'

module.exports = () => {
	return {
		insertTeam: insertTeam,
		removeTeam: removeTeam,
		init: init,
		getGroup: getGroup,
		getGroups: getGroups,
		updateGroup: updateGroup,
		createGroup: createGroup,
		getAll: getAll,
		get: get,
		post: post,
		put: put
	}

	// init: try to delete index, put index, put mapping
	async function init() {
		return del('')
			.then(res => put('', undefined))
			.then(res => {
				if (res.acknowledged != true) throw 'error: index -> put index'
				else return put('/_mapping/group', group_mapping).then(respond)
			})
	}

	async function getGroup(id) {
		return get('/group/' + id)
			.then(res => res._source)
			.then(respond)
			.catch(e => {
				if (e.errorCode == 'NOTFOUND')
					throw { errorCode: 'NOTFOUND', message: 'group not found' }
				else throw e
			})
	}

	async function getGroups() {
		return getAll('/group').then(respond)
	}

	async function insertTeam(group_id, team_id, team_name) {
		console.log('insert team: ' + group_id + ', ' + team_id + ', ' + team_name)
		let index = '/group/' + group_id
		let script = {
			script: {
				inline: 'ctx._source.teams.add(params.new_team)',
				lang: 'painless',
				params: {
					new_team: {
						id: team_id,
						name: team_name
					}
				}
			}
		}
		return post(index + '/_update', script).then(res => {
			return respond('team added')
		})
	}

	async function removeTeam(group_id, team_id, team_name) {
		console.log('remove team: ' + group_id + ', ' + team_id + ', ' + team_name)
		const index = '/group/' + group_id
		let script = {
			script: {
				inline:
					'ctx._source.teams.remove(ctx._source.teams.indexOf(params.new_team))',
				lang: 'painless',
				params: {
					new_team: {
						id: team_id,
						name: team_name
					}
				}
			}
		}
		return post(index + '/_update', script)
			.then(res => {
				return respond('team removed')
			})
			.catch(e => {
				if (e.errorCode == 'NOTFOUND')
					throw { errorCode: 'NOTFOUND', message: 'group not found' }
				else if (e.errorCode == 400)
					throw { errorCode: 'NOTFOUND', message: 'team not found in group' }
				else throw e
			})
	}

	async function updateGroup(id, name, description, username) {
		let update_group = {
			doc: {
				username: username,
				id: id,
				name: name,
				description: description
			}
		}
		return post('/group/' + id + '/_update', update_group)
			.then(res => {
				return respond('team updated')
			})
			.catch(e => {
				if (e.status == 404)
					throw { errorCode: 'NOTFOUND', message: 'group not found' }
				else return e
			})
	}

	async function createGroup(id, name, description, username, teams) {
		let group = {
			username: username,
			id: id,
			name: name,
			description: description,
			teams: []
		}
		if(teams!=undefined) group.teams = teams

		//const id_user = id //+ "_" + username

		return post(`/group/${id}/_create`, group)
			.then(_ => {
				return respond('group created')
			})
			.catch(e => {
				console.log('error2: ' + JSON.stringify(e))
				throw { errorCode: 'Conflict', message: 'group exists' }
			})
	}

	async function get(index) {
		const method = 'GET'
		let url = URL + index
		return execFetchNoBody(url, method)
	}

	async function getAll(index) {
		const method = 'GET'
		let url = URL + index + '/_search'
		return execFetchNoBody(url, method).then(resObj =>
			resObj.hits.hits.map(hit => hit._source)
		)
	}

	async function del(index) {
		const method = 'DELETE'
		let url = URL + index
		return execFetchNoBody(url, method)
	}

	async function post(index, jsonObject) {
		const method = 'POST'
		let url = URL + index
		return jsonObject == undefined
			? execFetchNoBody(url, method)
			: execFetchWithBody(url, method, jsonObject)
	}

	async function put(index, jsonObject) {
		const method = 'PUT'
		let url = URL + index
		return jsonObject == undefined
			? execFetchNoBody(url, method)
			: execFetchWithBody(url, method, jsonObject)
	}

	function execFetchWithBody(url, method, jsonObject) {
		return fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(jsonObject)
		})
			.then(processResponse)
			.catch(handleError)
	}

	function execFetchNoBody(url, method) {
		return fetch(url, {
			method: method,
			headers: {
				Accept: 'application/json'
			}
		})
			.then(processResponse)
			.catch(handleError)
	}
}

async function respond(message) {
	return { message: message }
}

async function handleError(err) {
	if (err.code == 'ECONNREFUSED')
		throw {
			errorCode: 'NODBCON',
			message: 'no connection to elastic db'
		}
	else if (err.status == 404)
		throw {
			errorCode: 'NOTFOUND',
			message: err.statusText
		}
	else
		throw {
			errorCode: err.status,
			message: err.statusText
		}
}

function processResponse(rsp) {
	if (!rsp.ok) {
		throw rsp
	}
	return rsp.json()
}

const group_mapping = {
	properties: {
		username: {
			type: 'text'
		},
		name: {
			type: 'text'
		},
		description: {
			type: 'text'
		},
		teams: {
			type: 'object'
		}
	}
}
