export default {
    usernameRules() {
        return v => !!v || 'Username is required';
    },
    passwordRules() {
        return v => !!v || 'Password is required';
    }
}