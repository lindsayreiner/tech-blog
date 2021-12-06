let logoutBtn;

if (document.querySelector('.logout-btn')) {
    logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', async () => {
        const response = await fetch('/api/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            alert('Logged out successfully!')
            document.location.replace('/homepage');
        } else {
            alert('Logout not successful. Please try again. ')
        }
    })
}