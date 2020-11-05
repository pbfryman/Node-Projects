const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '*';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'blakefryman12@gmail.com',
    subject: 'Welcome to Task Manager!',
    text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
  })
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'blakefryman12@gmail.com',
    subject: 'Hate To See You Go!',
    text: `Thank you for using the Task Manager app, ${name}!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}