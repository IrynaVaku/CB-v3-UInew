import SignUpPage from '../../../support/page_object_model/signUpPage';
import { newUser } from '../../../fixtures/data.json';
const signUpPage = new SignUpPage();

const testEmail = signUpPage.generateEmail();
const testPassword = signUpPage.generatePassword();

describe(' Main Page Elements and their base functionality tests for SignUp', () => {
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
      .type('abc123QAZ!@#', { delay: 20 })
      .should('have.value', 'abc123QAZ!@#')
      .type(
        '{backspace}{leftArrow}{rightArrow}{del}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
      );
  });
  it('Last name input with valid credentials', () => {
    signUpPage
      .lastNameField()
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Last Name')
      .type('abc123QAZ!@#', { delay: 20 })
      .should('have.value', 'abc123QAZ!@#')
      .type(
        '{backspace}{leftArrow}{rightArrow}{del}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
      );
  });
  it('Email  input', () => {
    signUpPage
      .emailField()
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Email')
      .type('abc123QAZ!@#', { delay: 20 })
      .should('have.value', 'abc123QAZ!@#')
      .type(
        '{backspace}{leftArrow}{rightArrow}{del}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
      );
  });
  it('Password  input', () => {
    signUpPage
      .passwordField()
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')
      .type('abc123QAZ!@#', { delay: 20 })
      .should('have.value', 'abc123QAZ!@#')
      .type(
        '{backspace}{leftArrow}{rightArrow}{del}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
      );
  });
  it('Click on Sign Up button', () => {
    signUpPage
      .signUpBtn()
      .should('be.visible')
      .should('have.text', 'Register')
      .should('not.be.enabled')
      .click();
  });
});
