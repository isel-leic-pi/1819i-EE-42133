module.exports = function(
	groupResult,
	groupTeamsResults,
	editGroupsResults,
	addTeamFormTemplate,
	makeCountryList,
	leaguesResults,
	leagueTeamsResults,
	groupGamesForm,
	groupGamesRes
) {
	const results = document.getElementById('results')
	const resultTeams = document.getElementById('resultTeams')
	const addTeamForm = document.getElementById('addTeamForm')
	const addTeamButton = document.getElementById('addTeamButton')
	const resultsGroup = document.getElementById('resultsGroup')
	const resultsGroupEdit = document.getElementById('resultsGroupEdit')
	const gamesForm = document.getElementById('groupGamesForm')
	const gamesRes = document.getElementById('groupGamesRes')

	var login = true
	const this_id = window.location.hash.split('/')[1]

	if (this_id != null && login) {
		createPage()
	} else results.innerHTML = 'invalid login'

	async function createPage() {
		return getAndUpdateGroup()
			.then(res => showAddTeam())
			.catch(handleError)
		// show get group games
	}

	// FUNCTIONS

	async function getAndUpdateGroup() {
		return getGroup()
			.then(res => res.message)
			.then(res => {
				group = res
				return showGroup(group)
			})
			.then(res => showTeamsAndSetDelete(group))
	}

	async function getGroup() {
		const url = `http://localhost:1904/groups/${this_id}`
		return fetch(url).then(processResponse)
	}

	function showGroup(group) {
		resultsGroup.innerHTML = groupResult(group)
		var lengthGroup = 0
		getLastId().then(res => {
			console.log(res)
			lengthGroup = res
			//EE
			copyButton = document.getElementById('copyButton')
			copyButton.addEventListener(
				'click',
				event => {
					event.preventDefault()
				},
				true
			)
			copyButton.onclick = copyGroup(lengthGroup)
		})

		editButton = document.getElementById('editButton')
		editButton.addEventListener(
			'click',
			event => {
				event.preventDefault()
			},
			true
		)
		editButton.onclick = showEditGroup

		return true
	}

	// set edit form
	function showEditGroup() {
		// hide group details
		resultsGroup.style.display = 'none'

		// create edit form
		resultsGroupEdit.innerHTML = editGroupsResults()
		resultsGroupEdit.style.display = 'block'

		document.getElementById('editGroupName').value = document.querySelector(
			'#resultsGroup .card-title'
		).innerHTML
		document.getElementById(
			'editGroupDescription'
		).value = document.querySelector('#resultsGroup .card-text').innerHTML

		// set buttons
		editBack = document.getElementById('editBack')
		editBack.addEventListener(
			'click',
			event => {
				event.preventDefault()
			},
			true
		)
		editBack.onclick = function() {
			resultsGroupEdit.style.display = 'none'
			resultsGroup.style.display = 'block'
		}

		editSave = document.getElementById('editSave')
		editSave.addEventListener(
			'click',
			event => {
				event.preventDefault()
			},
			true
		)
		editSave.onclick = function() {
			new_name = document.getElementById('editGroupName').value
			new_description = document.getElementById('editGroupDescription').value

			sendUpdateRequest(new_name, new_description).then(res => {
				resultsGroupEdit.style.display = 'none'
				resultsGroup.style.display = 'block'
				getAndUpdateGroup()
			})
		}
	}

	async function showTeamsAndSetDelete(group) {
		if (group.teams.length == 0) resultTeams.innerHTML = 'no teams'
		else resultTeams.innerHTML = groupTeamsResults(group.teams)

		// Register on the click event for each button to delete team from group
		document.querySelectorAll('#close').forEach(handleClick)

		function handleClick(card, idx) {
			card.onclick = function() {
				let teamID = group.teams[idx].id
				removeTeamFromGroup(group.id, teamID)
					.then(res => getAndUpdateGroup())
					.then(res => {
						let elementID = 'addTeamToGroupButton' + teamID
						let button = document.getElementById(elementID)
						button.style.visibility = 'visible'
						return ''
					})
					.catch(handleError)
			}
		}
		return true
	}

	async function removeTeamFromGroup(group_id, team_id) {
		const url = `http://localhost:1904/groups/${group_id}/teams/${team_id}`
		return fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(processResponse)
			.catch(handleError)
	}

	function showAddTeam() {
		addTeamButton.addEventListener(
			'click',
			event => {
				event.preventDefault()
			},
			true
		)
		addTeamButton.onclick = addTeamClick
	}

	// click Add Team -> get countries -> show list & search button
	async function addTeamClick() {
		gamesForm.innerHTML = ''
		gamesRes.innerHTML = ''
		getGamesFormButton.innerText = 'Get Games'
		getGamesFormButton.onclick = onGetGamesButtonClick

		// hide last button
		addTeamButton.innerText = 'close Add Team'
		addTeamButton.onclick = function() {
			addTeamButton.innerText = 'Add Team'
			addTeamForm.innerHTML = ''
			showAddTeam()
		}

		// get and show country list with search button
		return getCountryList()
			.then(res => res.message)
			.then(makeCountryForm)
			.catch(showSearchError)
	}

	async function getCountryList() {
		const url = `http://localhost:1904/leagues`
		return fetch(url).then(processResponse)
	}

	function makeCountryForm(leagues) {
		var countries = []

		leagues.forEach(league => {
			if (!countries.some(country => country == league.area.name))
				countries.push(league.area.name)
		})
		addTeamForm.innerHTML = addTeamFormTemplate()
		countryList = document.getElementById('list')
		countryList.innerHTML = makeCountryList(countries)
		searchButton = document.getElementById('search')
		searchButton.onclick = showLeagues
		return ''
	}

	function showLeagues() {
		teamsElement = document.getElementById('teams')
		if (teamsElement.innerHTML != '') teamsElement.innerHTML = ''
		return getLeagues()
			.then(res => res.message)
			.then(showLeaguesResultsView)
			.catch(showSearchError)
	}

	function getLeagues() {
		const url = `http://localhost:1904/leagues`
		return fetch(url).then(processResponse)
	}

	function showLeaguesResultsView(leagues) {
		var selectedCountry = document.getElementById('countryList').value

		leaguesFromCountry = leagues.filter(league => {
			return league.area.name == selectedCountry
		})
		leagueResults = document.getElementById('LeagueResults')

		leagueResults.innerHTML = leaguesResults(leaguesFromCountry)

		// Register on the click event for each button to show the teams from that league
		document.querySelectorAll('#teamsFromLeagueButton').forEach(handleClick)
		function handleClick(card, idx) {
			card.onclick = function() {
				let id = leaguesFromCountry[idx].id
				showTeams(id)
			}
		}
	}

	async function showTeams(league_id) {
		getTeams(league_id)
			.then(res => res.message)
			.then(showTeamsResults)
			.catch(showSearchError)
	}

	async function showTeamsResults(teams) {
		teamsElement = document.getElementById('teams')
		teamsElement.innerHTML = leagueTeamsResults(teams)

		document.querySelectorAll('#teams .btn.btn-primary').forEach(checkButton)
		function checkButton(button, idx) {
			group_team = document.getElementById('group_team_' + teams[idx].id)
			if (group_team != null) button.style.visibility = 'hidden'
		}

		document.querySelectorAll('#teams .btn.btn-primary').forEach(handleClick)
		function handleClick(card, idx) {
			card.onclick = function() {
				let teamID = teams[idx].id
				insertTeamIntoGroup(teamID).then(res => {
					let elementID = 'addTeamToGroupButton' + teamID
					let button = document.getElementById(elementID)
					button.style.visibility = 'hidden'
				})
			}
		}
	}

	async function insertTeamIntoGroup(teamID) {
		const url = `http://localhost:1904/groups/${this_id}/teams/${teamID}`
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(processResponse)
			.then(res => getAndUpdateGroup())
			.catch(handleError)
	}

	async function getTeams(league_id) {
		const url = `http://localhost:1904/leagues/${league_id}/teams`
		return fetch(url)
			.then(processResponse)
			.catch(showSearchError)
	}

	// Update Group
	function sendUpdateRequest(new_name, new_description) {
		const url = `http://localhost:1904/groups/${this_id}`

		let groupObject = {
			name: new_name,
			description: new_description
		}
		return fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(groupObject)
		})
			.then(processResponse)
			.catch(showSearchError)
	}

	//EE
	function copyGroup(lengthGroup){
		const url = `http://localhost:1904/groups/${this_id}/copy`

		return fetch(url, {
		method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({new_id: lengthGroup})
		})
			.then(processResponse)
			.catch(showSearchError)
	}

	//GetGames
	const getGamesFormButton = document.getElementById('getGamesButton')
	getGamesFormButton.addEventListener(
		'click',
		event => {
			event.preventDefault()
		},
		true
	)
	getGamesFormButton.onclick = onGetGamesButtonClick

	function onGetGamesButtonClick() {
		addTeamButton.innerText = 'Add Team'
		addTeamForm.innerHTML = ''
		showAddTeam()

		getGamesFormButton.innerText = 'Close Get Games'
		getGamesFormButton.onclick = function() {
			gamesForm.innerHTML = ''
			gamesRes.innerHTML = ''
			getGamesFormButton.innerText = 'Get Games'
			getGamesFormButton.onclick = onGetGamesButtonClick
		}

		gamesFormButtonClick()
	}

	function gamesFormButtonClick() {
		gamesForm.innerHTML = groupGamesForm()

		const getGamesButton = document.getElementById('get_games_button')
		getGamesButton.addEventListener(
			'click',
			event => {
				event.preventDefault()
			},
			true
		)
		getGamesButton.onclick = gamesButtonClick
	}

	function gamesButtonClick() {
		var inital_date = document.getElementById('initial_date_input').value
		var final_date = document.getElementById('final_date_input').value

		return getGroupGames(inital_date, final_date)
			.then(res => res.message)
			.then(showGames)
			.catch(showSearchError)
	}

	async function getGroupGames(initial_date, final_date) {
		console.log(`initialDate ${initial_date}`)
		console.log(`initialDate ${final_date}`)

		const url = `http://localhost:1904/groups/${this_id}/games?initial_date=${initial_date}&final_date=${final_date}`
		console.log(url)
		return fetch(url).then(processResponse)
	}

	function showGames(matches) {
		gamesRes.innerHTML = groupGamesRes(matches)
		return true
	}

	async function getLastId(){
		const url = 'http://localhost:1904/groups_lastId'
		return fetch(url)
			.then(processResponse)
			.then(res => res.message)
			.catch(handleError)
	}

	//
	// response as json or throws fetch error
	//

	async function processResponse(rsp) {
		if (!rsp.ok) throw rsp
		return rsp.json()
	}

	async function handleError(err) {
		var msg = err.statusText
		if (err.status == 404) msg = 'group doesnt exist'
		if (err.status == 409) msg = 'team already exists'
		results.innerHTML = msg
	}

	function showSearchError(e) {
		results.innerHTML = 'Search not available. Try again later...'
	}
}
