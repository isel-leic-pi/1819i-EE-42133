module.exports = function() {
	const search = document.getElementById('search')
	const id = document.getElementById('id')
	const results = document.getElementById('results')

	search.addEventListener(
		'click',
		event => {
			event.preventDefault()
		},
		true
	)
	search.onclick = searchClick

	function searchClick() {
		console.log('searchClick')
		return getGroup()
	}

	async function getGroup() {
		const url = `http://localhost:1904/groups/${id.value}`
		return fetch(url)
			.then(processResponse)
			.catch(err => showResponse(err))
	}

	async function goToGroup() {
		const hash = `#groupManager/${id.value}`
		window.location.hash = hash
		return 'done'
	}

	function processResponse(rsp) {
		if (!rsp.ok) throw 'Search not available. Try again later...'
		return rsp.json().then(res => goToGroup())
	}

	function showResponse(message) {
        results.innerText = message
        setTimeout(function () {
            msgLogin.innerText = ""
        }, 2500);
	}
}
