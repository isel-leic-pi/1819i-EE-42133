'use strict'

const fetch = require('node-fetch')

module.exports = services => {
	async function populateDB() {
		return addUser(900, 'Quim dos Barreiros', 'password') // fazer add user
			.then(res => (910, 'Outra Pessoa', '123'))
			.then(res =>
				services.createGroup(
					901,
					'Equipas de Portugal',
					'algumas equipas de Portugal',
					'Quim dos Barreiros'
				)
			)
			.then(res => services.addTeamToGroup(901, '496', 'Quim dos Barreiros'))
			.then(res => services.addTeamToGroup(901, '498', 'Quim dos Barreiros'))
			.then(res => services.addTeamToGroup(901, '503', 'Quim dos Barreiros'))
			.then(res =>
				services.createGroup(
					902,
					'Mais umas equipas de Portugal',
					'ainda mais equipas de portugal',
					'Quim dos Barreiros'
				)
			)
			.then(res => services.addTeamToGroup(902, '583', 'Quim dos Barreiros'))
			.then(res => services.addTeamToGroup(902, ' 810', 'Quim dos Barreiros'))
			.then(res => services.addTeamToGroup(902, '1049', 'Quim dos Barreiros'))
			.then(res =>
				services.createGroup(
					911,
					'Equipas misturadas',
					'equipas de varias ligas diferentes',
					'Outra Pessoa'
				)
			)
			.then(res => services.addTeamToGroup(911, '98', 'Outra Pessoa'))
			.then(res => services.addTeamToGroup(911, '498', 'Outra Pessoa'))
			.then(res => services.addTeamToGroup(911, '516', 'Outra Pessoa'))
			.then(res => {
				return 'done'
			})
			.catch(error => console.log('error: ' + error))
	}

	async function addUser(id, username, password) {
		const jsonObject = { id, username, password }
		const url = `http://localhost:9200/users/user/${id}`

		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(jsonObject)
		})
			.then(processResponse)
			.catch(handleError)
	}

	async function handleError(err) {
		if (err.code == 'ECONNREFUSED')
			throw {
				errorCode: 'NODBCON',
				message: 'no connection to elastic db'
			}
		/*
		else if (err.message == 404)
			init
		*/ else if (err.status == 404)
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

	return {
		populateDB: populateDB
	}
}
