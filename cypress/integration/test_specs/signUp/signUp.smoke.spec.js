///<reference types="cypress" />;
import SignUpPage from '../../../support/page_object_model/signUpPage';
import { newUser } from '../../../fixtures/data.json';
const signUpPage = new SignUpPage();

const testEmail = signUpPage.generateEmail();
const testPassword = signUpPage.generatePassword();

describe('SignUp  main test suit', () => {
  describe('Positive tests Smoke tests for SignUp a new user with valid credentials', () => {
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
      cy.get(signUpPage.pageElem.commonEl.inputField.firstName.selectorRegister)
        .should('be.visible')
        .should(
          'have.attr',
          'placeHolder',
          signUpPage.pageElem.commonEl.inputField.firstName.placeHolder
        )
        .type(newUser.firstName)
        .should('have.value', newUser.firstName);
    });
    it('Last name input with valid credentials', () => {
      cy.get(signUpPage.pageElem.commonEl.inputField.lastName.selectorRegister)
        .should('be.visible')
        .should(
          'have.attr',
          'placeHolder',
          signUpPage.pageElem.commonEl.inputField.lastName.placeHolder
        )
        .type(newUser.lastName)
        .should('have.value', newUser.lastName);
    });
    it('Email  input with valid credentials', () => {
      cy.get(signUpPage.pageElem.commonEl.inputField.email.selectorRegister)
        .should('be.visible')
        .should(
          'have.attr',
          'placeHolder',
          signUpPage.pageElem.commonEl.inputField.email.placeHolder
        )
        .type(testEmail)
        .should('have.value', testEmail);
    });
    it('Password  input with valid credentials', () => {
      cy.get(signUpPage.pageElem.commonEl.inputField.password.selectorRegister)
        .should('be.visible')
        .should(
          'have.attr',
          'placeHolder',
          signUpPage.pageElem.commonEl.inputField.password.placeHolder
        )
        .type(testPassword)
        .should('have.value', testPassword);
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
  describe('Negative tests -Smoke tests for SignUp a new user with existing credentials', () => {
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
      cy.get(
        signUpPage.pageElem.commonEl.inputField.firstName.selectorRegister
      ).type(newUser.firstName);
    });
    it('Last name input with valid credentials', () => {
      cy.get(
        signUpPage.pageElem.commonEl.inputField.lastName.selectorRegister
      ).type(newUser.lastName);
    });
    it('Email  input with valid credentials', () => {
      cy.get(
        signUpPage.pageElem.commonEl.inputField.email.selectorRegister
      ).type(newUser.email);
    });
    it('Password  input with valid credentials', () => {
      cy.get(
        signUpPage.pageElem.commonEl.inputField.password.selectorRegister
      ).type(testPassword);
    });
    it('Click on Sign Up button', () => {
      signUpPage.signUpBtn().click();
    });
    it('Error message', () => {
      signUpPage
        .messageError()
        .should('have.text', 'User with this e-mail exists');
    });
  });
});
