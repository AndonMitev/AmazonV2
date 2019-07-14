export default {
    nameRules() {
        return v => !!v || 'Name is required'
    },
    priceRules() {
        return [
            v => !!v || 'Price is required',
            v => this.product.price >= 1 || 'Price must be at least 1$'
        ]
    },
    descriptionRules() {
        return v => !!v || 'Description is required'
    },
    qualityRules() {
        return v => !!v || 'Quality is required'
    },
    stateRules() {
        return v => !!v || 'State is required'
    }
}
