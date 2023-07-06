import BasePage from './basePage'

export default class profilePage extends BasePage {
    constructor() {
        super()
    }

    allCoursesTitle = '.not-finished-courses'
    courseCards = 'app-course-card'
    courseCardData = {
        image: '.img-container',
        certificateBadge: 'app-certificate-badge .badge-wrapper',
        jobCount: 'app-jobs-count-chip p',
        courseProvider: '.providers',
        courseName: '.name',
        bookOpenIcon: '.bottom-container .info [icon="book-open"]',
        durationIcon: '.bottom-container .info [icon="time-clock-circle"]',
        textForDurationModules : '.bottom-container .info  span.text'
    }

    assertAllCoursesAppear(){
        cy.get(this.allCoursesTitle).should('be.visible')
    }


   
    assertCoursesDetails() {
        cy.get(this.courseCards).each((card) => {
            cy.wrap(card).scrollIntoView()
            cy.wrap(card).find(this.courseCardData.image).should('be.visible');
            cy.wrap(card).find(this.courseCardData.certificateBadge).should('be.visible');
            cy.wrap(card).find(this.courseCardData.jobCount).should('be.visible');
            cy.wrap(card).find(this.courseCardData.courseName).should('be.visible');
            cy.wrap(card).find(this.courseCardData.bookOpenIcon).should('be.visible');
            cy.wrap(card).find(this.courseCardData.durationIcon).should('be.visible');
          });
    }
    
}
