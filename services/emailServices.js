const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, nome, email, senha) => {
  const msg = {
    to: to,
    from: "yagofontanez20@icloud.com",
    templateId: "d-b4dd647d25e541a6b498c0af690d68db",
    dynamic_template_data: {
      nome: nome,
      email: email,
      senha: senha,
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email enviado!");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendEmail };
