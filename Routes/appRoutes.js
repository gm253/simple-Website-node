const userMaster = require('../controller/UserMaster');
module.exports = function (router) {
 
   router.get("/", userMaster.getuserList)
  return router;
}