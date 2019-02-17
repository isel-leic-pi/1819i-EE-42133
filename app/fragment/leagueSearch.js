module.exports = function(makeCountryList, leaguesResults, teamsResults) {
	const search = document.getElementById('search')
	const results = document.getElementById('results')
	const countryList = document.getElementById('list')
	const teams = document.getElementById('teams')

	// base page: list and button
	createPage()

	function createPage() {
		return getCountryList()
			.then(res => res.message)
			.then(showCountryList)
			.catch(showSearchError)
	}

	async function getCountryList() {
		const url = `http://localhost:1904/leagues`
		return fetch(url).then(processResponse)
	}

	function showCountryList(leagues) {
		var countries = []

		leagues.forEach(league => {
			if (!countries.some(country => country == league.area.name))
				countries.push(league.area.name)
		})
		countryList.innerHTML = makeCountryList(countries)
	}

	search.addEventListener(
		'click',
		event => {
			console.log('prevent defaut')
			event.preventDefault()
		},
		true
	)
	search.onclick = searchClick

	// shows leagues from selected country

	async function searchClick() {
		if (teams.innerHTML != '') teams.innerHTML = ''
		return getLeagues()
			.then(res => res.message)
			.then(showLeaguesResultsView)
			.catch(showSearchError)
	}

	async function getLeagues() {
		const url = `http://localhost:1904/leagues`
		return fetch(url).then(processResponse)
	}

	function showLeaguesResultsView(leagues) {
		var selectedCountry = document.getElementById('countryList').value

		leaguesFromCountry = leagues.filter(league => {
			return league.area.name == selectedCountry
		})

		results.innerHTML = leaguesResults(leaguesFromCountry)

		// Register on the click event for each button to show the teams from that league
		document.querySelectorAll('#results .btn.btn-primary').forEach(handleClick)
		function handleClick(card, idx) {
			card.onclick = function() {
				var id = leaguesFromCountry[idx].id
				showTeams(id)
			}
		}
	}

	// shows teams from selected league

	async function showTeams(league_id) {
		return getTeams(league_id)
			.then(res => res.message)
			.then(res => {
				if (res.length == 0) teams.innerHTML = 'no teams'
				else teams.innerHTML = teamsResults(res)
			})
			.catch(showSearchError)
	}

	async function getTeams(league_id) {
		const url = `http://localhost:1904/leagues/${league_id}/teams`
		return fetch(url).then(processResponse)
	}

	// utils

	function processResponse(rsp) {
		if (!rsp.ok) {
			throw 'error'
		}
		return rsp.json()
	}

	function showSearchError(e) {
		console.log('####' + e)
		results.innerHTML = 'Search not available. Try again later...'
	}
}
