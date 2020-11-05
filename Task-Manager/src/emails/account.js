const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: '@gmail.com',
  from: '@gmail.com',
  subject: 'This is my first creation!',
  text: 'I hope this one actually gets to you.'
});