const emailRegex = require("../helpers/emailRegex");

const registrationController = (req, res) => {
  let { username, email, password } = req.body
  if (!username) {
    res.send({error:"Please give your username"});
  } else if (!email) {
    res.send({error:"Please give your email"});
  }else if(!emailRegex(email)) {
    res.send({error:'Please Enter a Valid email'});
    
  } else if (!password) {
    res.send({error:"Please give your password"});
  }else {
    res.send({success:"All Done"});
  }
};

module.exports = registrationController;
