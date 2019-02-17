module.exports = function() {
	const create = document.getElementById('create')
	const id = document.getElementById('inputID');
	const name = document.getElementById('inputName')
	const description = document.getElementById('inputDescription')
	const results = document.getElementById('results')

	create.addEventListener(
		'click',
		event => {
			console.log('prevent defaut')
			event.preventDefault()
		},
		true
	)
	create.onclick = createClick

	function createClick() {
		console.log('createClick')
		requestcreateGroupAndShow().catch(handleError)
	}

	async function requestcreateGroupAndShow() {
		const url = `http://localhost:1904/groups/${id.value}`

		let groupJson = {
			name: name.value,
			description: description.value
		}
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(groupJson)
		}).then(showResponse)
	}

	async function showResponse(rsp) {
		if (!rsp.ok) throw rsp
		return rsp.json().then(jsonResponse => {
			results.innerHTML = 'Group created!'
			return jsonResponse
		})
	}

	async function handleError(err) {
		return err.json().then(apiJsonError => {
			results.innerHTML = 'Error: ' + apiJsonError.message
			return apiJsonError
		})
	}
}
