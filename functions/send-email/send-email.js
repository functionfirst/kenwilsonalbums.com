const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST, {
  endpoint: 'https://api.eu.sparkpost.com:443'
});

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body)

  // Trap automated bot
  if (data.botField) {
    callback(null, {
      statusCode: 200,
      body: 'Seems legit'
    })

    return
  }

  const from = 'info@kenwilsonalbums.com'
  const subject = 'Website Contact Form!'
  const html = `<html><body>
    Name: ${data.name}<br>
    Email: ${data.email}<br>
    Telephone: ${data.telephone}<br>
    <hr>
    ${data.message}
  </body></html>`

  client.transmissions
    .send({
      content: {
        from,
        subject,
        html
      },
      recipients: [{ address: from }]
    }).then(data => {
      callback(null, {
        statusCode: 200,
        body: 'Message sent successfully'
      })
    }).catch(err => {
      callback(null, {
        statusCode: 500,
        body: 'Something went wrong.' + err
      })
    })
}
