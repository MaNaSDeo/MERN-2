const usersData = require("../user.json").data;

const getAllUsers = (req, res) => {
  res.json(usersData);
};

const filterUsers = (req, res) => {
  const { gender, age } = req.query;

  if (gender && age) {
    const response = usersData.filter(
      (item) =>
        item.gender === gender.toLowerCase() &&
        Number(item.dob.age) === Number(age)
    );
    res.json(response);
  } else if (gender || age) {
    const response = usersData.filter(
      (item) =>
        item.gender === gender.toLowerCase() ||
        Number(item.dob.age) === Number(age)
    );
    res.json(response);
  } else
    res.status(404).json({ message: "Please provide either Age or Gender!" });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const response = usersData.filter(
    (item) => item.login.uuid.toLowerCase() === id.toLowerCase()
  );
  if (response) {
    res.json(response);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getAllUsers, filterUsers, getUserById };
