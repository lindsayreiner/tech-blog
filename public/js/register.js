const signupHandler = async (e) => {
    e.preventDefault();


    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log(username);
    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }

}

document.querySelector('.register-container')
document.addEventListener('submit', signupHandler);