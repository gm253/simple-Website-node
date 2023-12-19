const Knex = require('knex')(require('../Config/Database'));

module.exports = {
  getuserList: async (req, res) => {
    try {
      const data = await Knex('user').select('*');
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      res.send("Server Working");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
};
