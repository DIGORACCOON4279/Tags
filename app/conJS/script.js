document.getElementById('toggle-button').addEventListener('click', function() {
    const createAccountPanel = document.getElementById('create-account-panel');
    const loginPanel = document.getElementById('login-panel');

    if (createAccountPanel.style.display === 'none') {
        createAccountPanel.style.display = 'block';
        loginPanel.style.display = 'none';
    } else {
        createAccountPanel.style.display = 'none';
        loginPanel.style.display = 'block';
    }
});
