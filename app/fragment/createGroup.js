module.exports = function() {
	const create = document.getElementById('create')
	const id = document.getElementById('inputID');
	const name = document.getElementById('inputName')
	const description = document.getElementById('inputDescription')
	const results = document.getElementById('results')

	getLastId().then(res => {
		console.log(res)
		id.value = res
	})

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
		requestcreateGroupAndShow()
		.then(_=>{
			var new_id = parseInt(id.value)+1
			id.value = new_id
			id.innerHTML = new_id
		})
		.catch(handleError)
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

	async function getLastId(){
		const url = 'http://localhost:1904/groups_lastId'
		return fetch(url)
			.then(processResponse)
			.then(res => res.message)
			.catch(handleError)
	}

	async function showResponse(rsp) {
		if (!rsp.ok) throw rsp
		return rsp.json().then(jsonResponse => {
			results.innerHTML = 'Group created!'
			return jsonResponse
		})
	}

	function processResponse(rsp) {
		if (!rsp.ok) throw 'Search not available. Try again later...'
		return rsp.json()
	}

	async function handleError(err) {
		return err.json().then(apiJsonError => {
			results.innerHTML = 'Error: ' + apiJsonError.message
			return apiJsonError
		})
	}
}
