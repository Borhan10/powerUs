import BasePage from './basePage'

export default class loginPage extends BasePage {
    constructor() {
        super()
    }
    firstNameInput = '[name="firstName"] input'
    lastNameInputField = '[name="lastName"] input'
    emailInputField = '[name="email"] input'
    passwordInputField = '[name="password"] input'
    registrationButton = 'app-registration-form button span'
    phoneForm= {
        phoneField: '[name="phoneNumber"] input',
        phoneFormRegisterButton: 'app-phone-form button'
    }

    successfulRegistration(userData, email, phone) {
        this.fillRegistrationForm(userData, email)
        this.submitRegistration()
        this.fillPhoneField(phone)
        this.submitPhoneNumber()
    }

    fillRegistrationForm(userData, email) {
        this.interceptVerify()
        cy.get(this.firstNameInput).should('be.visible')
        this.fill(this.firstNameInput, userData.firstName)
        this.fill(this.lastNameInputField, userData.lastName)
        this.fill(this.emailInputField, email)
        this.fill(this.passwordInputField, userData.password)
    }

    submitRegistration() {
        cy.wait('@verified')
        cy.get(this.registrationButton).should('be.visible')
        this.click(this.registrationButton,0)
    }

    fillPhoneField(phone){
        this.interceptVerify()
        cy.get(this.phoneForm.phoneFormRegisterButton).should('be.visible')
        this.fill(this.phoneForm.phoneField, phone)
    }

    submitPhoneNumber(){
        cy.wait('@verified')
        this.interceptRegistration()
        this.click(this.phoneForm.phoneFormRegisterButton)
    }
    interceptVerify(){
        cy.intercept('**accounts/verify**').as('verified')
    }

    interceptRegistration(){
        cy.intercept('**register**').as('registerUser')
    }

    assertUserRegistered(){
        cy.wait('@registerUser').its('response.statusCode').should('eq', 201)
    }
}
