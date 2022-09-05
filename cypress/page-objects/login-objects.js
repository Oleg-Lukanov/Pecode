class LoginPage {

    get logomini() {
        return cy.get('#logomini');
    }

    get wrapper() {
        return cy.get('.wrapper');
    }

    get errorMessage() {
        return cy.get('.has-error > .help-block');
    }

    get usernameField() {
        return cy.get(':nth-child(1) > .form-control');
    }

    get passwordField() {
        return cy.get(':nth-child(2) > .form-control');
    }

    get getLoginBtn() {
        return cy.contains('.btn', 'Login');
    }

    get staySamePage() {
        return cy.url().should('include', '/qa-portal/registerlogin/registerlogin.php');
    }

    visitPage() {
        cy.visit('/registerlogin.php');

    }

}

export default new LoginPage();