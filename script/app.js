
document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in
    if (!localStorage.getItem('loggedIn')) {
        // If not logged in, redirect to the login page
        if (!window.location.pathname.includes('login.html') && !window.location.pathname.includes('signup.html')) {
            window.location.href = 'login.html';
        }
    }
});
