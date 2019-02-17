module.exports = function(groupsResults) {
	const search = document.getElementById('search')
	const results = document.getElementById('results')

	search.addEventListener(
		'click',
		event => {
			console.log('prevent defaut')
			event.preventDefault()
		},
		true
	)
	//if() window.location.hash = '#welcome'
	//else 
	search.onclick = searchClick

	async function searchClick() {
		console.log('searchClick')
		return getGroups().then(showGroupResultsView)
	}

	async function getGroups() {
		const url = `http://localhost:1904/groups`
		return fetch(url, {credentials:"include"})
			.then(processResponse)
			.then(res => res.message)
			.catch(showSearchError)
	}

	function showGroupResultsView(groups) {
		if (groups.length == 0) results.innerHTML = 'no results'
		else results.innerHTML = groupsResults(groups)

		// Register on the click event for each card result to show the group details
		document.querySelectorAll('#results .card').forEach(handleClick)
		function handleClick(card, idx) {
			card.onclick = function() {
				const hash = `#groupManager/${groups[idx].id}`
				console.log(hash)
				window.location.hash = `#groupManager/${groups[idx].id}`
			}
		}
	}

	function processResponse(rsp) {
		if (!rsp.ok) throw 'error'
		return rsp.json()
	}

	function showSearchError(e) {
		console.log('####' + e)
		results.innerHTML = 'Search not available. Try again later...'
	}
}
