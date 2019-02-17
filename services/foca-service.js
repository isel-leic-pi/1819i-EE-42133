'use strict'

module.exports = (e_db, f_data) => {
	async function init() {
		return e_db.init()
	}

	async function getLeagues() {
		return f_data.getLeagues().then(res => {
			console.log('leagues: ' + JSON.stringify(res))
			return {
				message: res.message.filter(league => (league.plan = 'TIER_ONE'))
			}
		})
	}

	async function getLeagueTeams(league_id) {
		return f_data.getLeagueTeams(league_id)
	}

	async function getGroupDetails(group_id, username) {
		return e_db.getGroup(group_id).then(res => {
			if (res.message.username == username) return res
			throw { message: 'forbidden' }
		})
	}

	async function getGroups(username) {
		return e_db.getGroups().then(res => {
			console.log('res: ' + JSON.stringify(res))
			return {
				message: res.message.filter(group => group.username == username)
			}
		})
	}

	async function createGroup(id, name, description, username) {
		return getGroups(username).then(res => {
			if (!res.message.some(e => e.name == name)) {
				return e_db.createGroup(id, name, description, username)
			} else throw { errorCode: 'Conflict', message: 'group exists' }
		})
	}

	async function updateGroup(id, name, description, username) {
		return getGroupDetails(id, username).then(_ => {
			e_db.updateGroup(id, name, description, username)
		})
	}

	async function addTeamToGroup(group_id, team_id, username) {
		return getGroupDetails(group_id, username).then(res => {
			if (!res.message.teams.some(e => e.id == team_id)) {
				return f_data.getTeam(team_id).then(res => {
					if (res.message.name == undefined) throw { message: 'NOTFOUND' }
					return e_db.insertTeam(group_id, team_id, res.message.name)
				})
			} else throw { errorCode: 'Conflict', message: 'team exists' }
		})
	}

	async function removeTeamFromGroup(group_id, team_id, username) {
		return getGroupDetails(group_id, username).then(_ => {
			return f_data
				.getTeam(team_id)
				.then(team => e_db.removeTeam(group_id, team_id, team.message.name))
		})
	}

	async function getGroupGames(group_id, dateFrom, dateTo, username) {
		return getGroupDetails(group_id, username)
			.then(res => {
				return Promise.all(
					res.message.teams.map(team => {
						return f_data.getTeamGames(team.id, dateFrom, dateTo).then(res => {
							return res.message.matches
						})
					})
				)
			})
			.then(res => {
				var allMatches = [].concat.apply([], res)
				allMatches.sort((matchesX, matchesY) => matchesX.date - matchesY.date)
				return { message: allMatches }
			})
	}
	async function copyGroup(group_id, username){
		return getGroupDetails(group_id,username).then(res=>{
			const new_id = 0
			const group = res.message
			return e_db.createGroup(new_id,group.name,group.description,username,group.teams)
		})
	}


	return {
		init: init,
		getGroups: getGroups,
		getLeagues: getLeagues,
		createGroup: createGroup,
		updateGroup: updateGroup,
		getLeagueTeams: getLeagueTeams,
		addTeamToGroup: addTeamToGroup,
		getGroupDetails: getGroupDetails,
		removeTeamFromGroup: removeTeamFromGroup,
		getGroupGames: getGroupGames,
		copyGroup: copyGroup
	}
}