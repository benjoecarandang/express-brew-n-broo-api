exports.getUsers = (req, res) => {
    res.status(200).send('Fetching all users');
}

exports.createNewUser = (req, res) => {
    res.status(200).send('Created new user');
}

exports.updateUser = (req, res) => {
    res.status(200).send('Updated new user');
}

exports.deleteUser = (req, res) => {
    res.status(204).send('User deleted');
}

exports.validate = (req, res, next) => {
    if (!(req.body && req.body.name)) {
      return res.status(400).json({
        error: "Invalid data",
      });
    }
  
    next();
  };