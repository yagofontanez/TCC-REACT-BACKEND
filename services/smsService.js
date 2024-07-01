require('dotenv').config();
const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = (to, message) => {
  const formattedNumber = formatPhoneNumber(to);

  client.messages.create({
    body: message,
    to: formattedNumber, 
    from: process.env.TWILIO_PHONE_NUMBER 
  })
  .then((message) => {
    console.log('SMS enviado com sucesso:', message.sid);
  })
  .catch((error) => {
    console.error('Erro ao enviar SMS:', error);
  });
};

const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith('+')) {
      return phoneNumber; 
    }
  
    const countryCode = '+55';
    return `${countryCode}${phoneNumber.replace(/[\s()-]/g, '')}`;
  };

module.exports = { sendSMS };
