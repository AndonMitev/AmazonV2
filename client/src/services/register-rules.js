export default {
    firstNameRules() {
        return v => v.length || "First name is required";
    },
    lastNameRules() {
        return v => v.length || "Last name is required";
    },
    emailRules() {
        return [
            v => v.length || "E-mail is required",
            v => /.+@.+/.test(v) || "E-mail must be valid"
        ];
    },
    compareEmails() {
        return this.confirmEmail !== this.email ? "Emails do not match" : true;
    },
    passwordRules() {
        return [
            v => v.length || "Password is required",
            v => v.length >= 5 || "Password should be at least 3 symbols long",
            v => v.length <= 10 || "Password cannot be more than 10 symbols long"
        ];
    },
    comparePasswords() {
        return this.confirmPassword !== this.password
            ? "Passwords do not match"
            : true;
    },
    addressRules() {
        return [
            v => v.length || "Address is required",
            v => v.length >= 3 || "Address should be at least 3 symbols long"
        ];
    },
    phoneRules() {
        return v =>
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(v) ||
            "Please enter valid phone number";
    }
}