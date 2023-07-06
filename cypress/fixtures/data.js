module.exports = {
    userData: {
        firstName: `firstName`,
        lastName: `last name`,
        password: `Demoqa${Math.floor(Math.random() * 20000)}`,
    },
    baseURL: 'https://testing.powerus.de/',
    phone: function () {
        return `176${Math.floor(Math.random() * 100000000)
            .toString()
            .padStart(8, '0')}`
    },

    email: function () {
        return `test_${Math.floor(Math.random() * 20000)}@gmail.com`
    },
}
