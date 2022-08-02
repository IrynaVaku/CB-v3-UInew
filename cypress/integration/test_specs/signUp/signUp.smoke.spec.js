///<reference types="cypress" />;
import SignUpPage from '../../../support/page_object_model/signUpPage';
const signUpPage = new SignUpPage();
const testEmail = signUpPage.generateEmail();

describe('SignUp  main test suit', () => {
  describe('Smoke tests for SignUp a new user with valid credentials', () => {
    it('Precondition, visit Register page', () => {
      cy.visit('/user/register');
    });
    it('Header create an Account', () => {
      signUpPage
        .headerCreateAnAccount()
        .should('be.visible')
        .should('have.text', 'Create an account');
    });
    it('First name input with valid credentials', () => {
      signUpPage
        .firstNameField()
        .should('be.visible')
        .should('have.attr', 'placeholder', 'First Name')
        .type('Ann')
        .should('have.value', 'Ann');
    });
    it('Last name input with valid credentials', () => {
      signUpPage
        .lastNameField()
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Last Name')
        .type('Ank')
        .should('have.value', 'Ank');
    });
    it('Email  input with valid credentials', () => {
      signUpPage
        .emailField()
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Email')
        .type(testEmail)
        .should('have.value', testEmail);
    });
    it('Password  input with valid credentials', () => {
      signUpPage
        .passwordField()
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Password')
        .type('123123')
        .should('have.value', '123123');
    });
    it('Click on Sign Up button', () => {
      signUpPage
        .signUpBtn()
        .should('be.visible')
        .should('have.text', 'Register')
        .click();
    });
    it('Confirm email', () => {
      signUpPage
        .confirmEmail()
        .should('be.visible')
        .should('have.text', 'Confirm Email')
        .click();
    });
    it('User was redirected on the onboarding page', () => {
      cy.location('pathname').should('eq', '/v3/onboarding');
    });
    it('Header on the onboarding page', () => {
      signUpPage
        .headerAfterSignUp()
        .should('be.visible')
        .should('have.text', `We sent you confirmation email to ${testEmail}.`)
        .contains('We sent you confirmation email to');
    });
  });
});
