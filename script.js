function generatePassword() {
    const length = document.getElementById('length').value;
    const hasUppercase = document.getElementById('uppercase').checked;
    const hasNumbers = document.getElementById('numbers').checked;
    const hasSymbols = document.getElementById('symbols').checked;

    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (hasUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (hasNumbers) charset += '0123456789';
    if (hasSymbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
