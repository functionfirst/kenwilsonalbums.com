const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST, {
  endpoint: 'https://api.eu.sparkpost.com:443'
});

exports.handler = function(event, context, callback) {
  console.log(event)
  // Trap automated boy
  // if (event.body.botField !== '') {
  //   callback(null, {
  //     statusCode: 200,
  //     body: 'Seems legit'
  //   })
  // }

  const from = 'info@shatteredscales.co.uk'
  const subject = 'Website Contact Form!'
  const html = `<html><body>${event}<br><br>${event.body}</body></html>`

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
        body: 'So far so good'
      })
    }).catch(err => {
      callback(null, {
        statusCode: 500,
        body: 'Something went wrong.' + err
      })
    })
}
