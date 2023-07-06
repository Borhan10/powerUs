import BasePage from "./basePage";

export default class bookDetailsPage extends BasePage {
  constructor() {
    super();
  }

  footer = {
    learnPlattForm: '[href="lernplattform"]',
  };

  departments = {
    electronic: '[data-value="electronic"]',
  };
  apprenticeshipStatus = {
    notYetRecognized: '[data-value="none"]',
    completedTraining: '[data-value="apprenticeship"]',
  };
  registration = '[href="/registrieren/kurse"]';
  progressBar = '[class*="mat-progress-bar"]'

  selectLearnPlatform() {
    this.interceptPageView()
    this.scrollToElement(this.footer.learnPlattForm);
    cy.get(this.footer.learnPlattForm).should("be.visible");
    this.click(this.footer.learnPlattForm);
  }

  navigateToRegistrationPage() {
    this.click(this.registration, 0);
  }

  selectElectronicDepartment() {
    this.waitForProgressBar()
    cy.wait('@page')
    cy.wait(1000)
    cy.get(this.departments.electronic).should("be.visible");
    this.click(this.departments.electronic,0,{force:true});
  }

  selectApprenticeshipStatus() {
    cy.get(this.apprenticeshipStatus.completedTraining).should("be.visible");
    this.click(this.apprenticeshipStatus.completedTraining);
  }
  
  waitForProgressBar(){
    cy.get(this.progressBar, {timeout: 5000}).should('not.exist')
  }

  interceptDepartmentsPage(){
    cy.intercept('**accounts/authenticated**').as('departments')
  }

  interceptPageView(){
    cy.intercept('**page-view**').as('page')
  }
}
