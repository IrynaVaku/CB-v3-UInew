///<reference types="cypress" />;
export default class SignUpPage {
  headerCreateAnAccount = () => cy.get('h1');
  firstNameField = () => cy.get(' input#user_login_firstName');
  lastNameField = () => cy.get(' input#user_login_lastName');
  emailField = () => cy.get(' input#user_login_email');
  passwordField = () => cy.get(' input#user_login_password');
  signUpBtn = () => cy.get(' button[type="submit"]');
  confirmEmail = () => cy.get('span[class="ms-2 fw-bold"]');
  headerAfterSignUp = () => cy.get('h5');

  /////methods

  generateEmail = () => {
    return `newuser${Math.floor(Math.random() * 1000)}@ddt.com`;
  };
}
