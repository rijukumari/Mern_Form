const EmployeeModel = require("../models/Employee")



const registerUser = (req, res) => {
  // console.log("req.body", req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  else {
    EmployeeModel.create(req.body)
      .then(employees => res.json(employees))
      .catch(err => res.json(err))
  }
}

const loginUser = (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("The password is incorrect")
        }
      } else {
        res.json("No record existed")
      }
    })
}



module.exports = {
  registerUser,
  loginUser
}