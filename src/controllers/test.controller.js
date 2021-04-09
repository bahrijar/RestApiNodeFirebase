var Fire = require('../config/fire')

exports.findAll = async (req, res) => {
  Fire.database()
    .ref('/')
    .once('value')
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
};
