import {navigate} from '../pages/navigateHelper'
import registerPage from '../pages/registrationPage.cy'
import homePage from '../pages/homepage.cy'
import coursePage from '../pages/coursesPage'
import locales, {userData} from '../fixtures/data'

const register = new registerPage()
const home = new homePage()
const courses = new coursePage()

navigate.forEach(({navigate}) => {
    describe('E2E BookCollection testCases', () => {
        beforeEach(function () {
            navigate(locales.baseURL)
        })
        it('E2E - Verify Book Addition and Profile Matching ', function () {
            home.selectLearnPlatform()
            home.navigateToRegistrationPage()
            home.selectElectronicDepartment()
            home.selectApprenticeshipStatus()
            register.successfulRegistration(locales.userData, locales.email(), locales.phone())
            register.assertUserRegistered()
            courses.assertAllCoursesAppear()
            courses.assertCoursesDetails()
        })
    })
})
