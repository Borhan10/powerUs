export default class BasePage {
  navigateDesktop = (baseUrl) => {
    cy.clearSession();
    cy.visit({ url: baseUrl, failOnStatusCode: false });
  };

  navigateMobile = (baseUrl) => {
    cy.clearSession();
    cy.viewMobile();
    cy.visit(baseUrl, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36",
      },
    });
  };

  click(inputSelector, index = 0, options = "") {
    cy.get(inputSelector).eq(index).click(options);
  }

  scrollToElement(element, index = 0) {
    cy.get(element).eq(index).scrollIntoView();
  }

  fill(inputSelector, value) {
    cy.get(inputSelector).clear({ force: true }).type(value, { force: true });
  }

  reloadPage() {
    cy.reload();
  }
}
