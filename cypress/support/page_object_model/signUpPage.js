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
  messageError = () => cy.get(' div[class="ant-notification-notice-message"]');
  logo = () => cy.get('h3');
  /////methods

  generateEmail = () => {
    return `user${Math.floor(Math.random() * 1000)}@ddt.com`;
  };

  generatePassword = () => {
    return `user${Math.floor(Math.random() * 1000)}`;
  };

  checkNameOfFields = (nameObject) => {
    cy.get(nameObject.selectorRegister)
      .should('be.visible')
      .should('have.attr', 'placeholder', nameObject.placeHolder)
      .type('abc123QAZ!@#')
      .should('have.value', 'abc123QAZ!@#')
      .type(
        '{backspace}{leftArrow}{rightArrow}{del}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
      )
      .type('{selectAll}{del}')
      .should('have.value', '');
  };
  
  pageElem = {
    commonEl: {
      inputField: {
        firstName: {
          selectorRegister: 'input#user_login_firstName',
          placeHolder: 'First Name',
        },
        lastName: {
          selectorRegister: 'input#user_login_lastName',
          placeHolder: 'Last Name',
        },

        email: {
          selectorRegister: 'input#user_login_email',
          //selectorLogin: 'input#normal_login_email',
          placeHolder: 'Email',
        },
        password: {
          selectorRegister: 'input#user_login_password',
          //selectorLogin: 'input#normal_login_password',
          placeHolder: 'Password',
        },
      },
    },
  };
  
}
