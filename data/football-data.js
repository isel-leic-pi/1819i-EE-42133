'use strict'

const fetch = require('node-fetch')

module.exports = () => {
	// get team                             -> http://api.football-data.org/v2/teams/498
	// get Leagues                          -> http://api.football-data.org/v2/competitions/plan=TIER_ONE
	// get teams from leagues               -> http://api.football-data.org/v2/competitions/2017/teams
	// get matches from team between dates  -> http://api.football-data.org/v2/teams/498/matches?dateFrom=2018-12-17&dateTo=2019-05-26

	async function getLeagues() {
		return execRequest('competitions?plan=TIER_ONE').then(res => {
			return { message: res.competitions }
		})
	}

	async function getLeagueTeams(league_id) {
		return execRequest(`competitions/${league_id}/teams`).then(res => {
			return { message: res.teams }
		})
	}

	async function getTeam(team_id) {
		return execRequest(`teams/${team_id}`).then(res => {
			if (res.error != null) throw res
			else return { message: res }
		})
	}

	async function getTeamGames(id, dateFrom, dateTo) {
		return execRequest(
			`teams/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`
		).then(res => {
			return { message: res }
		})
	}

	function execRequest(path) {
		const url = `http://api.football-data.org/v2/${path}`

		return fetch(url, {
			method: 'GET',
			headers: {
				'X-Auth-Token': '7e0d50579c1947f5ae8da0d0ed239399',
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.catch(handleError)
	}

	async function handleError(err) {
		if (err.code == 'ENOTFOUND')
			throw {
				errorCode: 'NOFDCON',
				message: 'no connection to football data'
			}
		else
			throw {
				errorCode: err.error,
				message: err.message
			}
	}

	return {
		getLeagues: getLeagues,
		getLeagueTeams: getLeagueTeams,
		getTeam: getTeam,
		getTeamGames: getTeamGames
	}
}
