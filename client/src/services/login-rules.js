export default {
    usernameRules() {
        return v => v.length || 'Username is required';
    },
    passwordRules() {
        return v => v.length || 'Password is required';
    }
}