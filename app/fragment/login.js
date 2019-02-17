'use strict'
module.exports = (loginTemplate) => {

    const username_toShow = document.getElementById('username_toShow');
    const loginResult = document.getElementById('loginResult');

    loginResult.innerHTML = loginTemplate()

    const msgLogin = document.getElementById('msgLogin');

    const txtUsername = document.getElementById('username');
    const txtPassword = document.getElementById('password');

    document
        .getElementById('buttonSignup')
        .addEventListener('click', signupHander)
    document
        .getElementById('buttonLogin')
        .addEventListener('click', loginHander)
    document
        .getElementById('buttonLogOut')
        .addEventListener('click', signOutHander)

    function signupHander(ev) {
        ev.preventDefault()
        const url = 'http://localhost:1904/foca/api/signup'
        const options = {
            method: 'POST',
            body: JSON.stringify({
                'username': txtUsername.value,
                'password': txtPassword.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
            .then(async (resp) => {
                if(resp.status != 201 && resp.status != 200){
                    const body = await resp.json()
                    throw `${resp.status}: ${JSON.stringify(body)}`
                }
                else showResponse("Registered successfully!!")
            })
            .catch(err => showResponse("Try again later!"))
    }

    async function loginHander(ev) {
        ev.preventDefault()
        const url = 'http://localhost:1904/foca/api/login'
        const options = {
            method: 'POST',
            body: JSON.stringify({
                'username': txtUsername.value,
                'password': txtPassword.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const resp = await fetch(url, options)
        try{
            if(resp.status == 200){
                window.location.hash = '#groupSearch'
                username_toShow.innerText = txtUsername.value
            } else {
                const body = await resp.json()
                showResponse("Wrong credentials!")
            }    
        } catch(err){
            showResponse("Need to enter valid credentials!")
        }
    }

    async function signOutHander(ev){
        ev.preventDefault()
        const url = 'http://localhost:1904/foca/api/logout'
        await fetch(url,{
            method:"POST"
        }).then(resp=>{
            if(resp.status == 201 || resp.status == 200){
                showResponse("Logout done!!")
                username_toShow.innerText = ""
            }
        }); 
    }

    function showResponse(message) {
        msgLogin.innerText = message
        setTimeout(function () {
            msgLogin.innerText = ""
        }, 2500);
	}
}
