// const { describe } = require("mocha");
/// <reference types="cypress" />
import LoginPage from "../page-objects/login-objects.js";

describe('Login page', () => {
    beforeEach(() => {
        LoginPage.visitPage();
        // cy.visit('/registerlogin.php')
    })

    it('should containe title "AQA internship Login"', () => {
        cy.get('h1')
            .should('contain.text', 'AQA internship Login');
    });

    it('should containе a "logomini"', () => {
        LoginPage.logomini
            .should('exist')
    });

    it('should containе a "wrapper"', () => {
        LoginPage.wrapper
            .should('exist')
    });

    it(`should display an error message "Please enter your username" and "Please enter 
        your password" if the user has not completed any fields and clicked [Login]`, () => {
        LoginPage.getLoginBtn
            .click()

        LoginPage.staySamePage

        LoginPage.errorMessage
            .should('contain.text', 'Please enter username.')
            .should('contain.text', 'Please enter your password.');
    });

    it(`an error message "Please enter your password" should appear if the user
        did not fill in the "Password" field and clicked [Login]`, () => {
        LoginPage.usernameField
            .type(Cypress.env('username'))

        LoginPage.getLoginBtn
            .click()

        LoginPage.staySamePage

        LoginPage.errorMessage
            .should('contain.text', 'Please enter your password.');
    });

    it(`an error message "Please enter username" should appear if the user 
        did not fill in the "Username" field and clicked [Login]`, () => {
        LoginPage.passwordField
            .type(Cypress.env('password'))

        LoginPage.getLoginBtn
            .click()

        LoginPage.staySamePage

        LoginPage.errorMessage
            .should('contain.text', 'Please enter username.');
    });

    it(`an error message "No account found with that username" should appear 
        if the user entered unregistered user details and clicked [Login]`, () => {
        LoginPage.usernameField
            .type(Cypress.env('username'))

        LoginPage.passwordField
            .type(Cypress.env('password'))

        LoginPage.getLoginBtn
            .click()

        LoginPage.staySamePage

        LoginPage.errorMessage
            .should('contain.text', 'No account found with that username.');
    });

    it.only('an error message "No account found with that username" should appear  if the user entered unregistered user details and pressed "Enter"', () => {
        LoginPage.usernameField
            .type(Cypress.env('username'))

        LoginPage.passwordField
            .type(Cypress.env('password'))

        LoginPage.getLoginBtn
            .click()

        LoginPage.passwordField
            .type('{enter}')

        LoginPage.staySamePage

        LoginPage.errorMessage
            .should('contain.text', 'No account found with that username.');

        cy.url().should('not.include', '/qa-portal/registerlogin/registerlogin.php');        
    });

});