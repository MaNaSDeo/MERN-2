const usersData = require("../user.json").data;

const { getQueryErrors } = require("../validators/users.validator");

const getAllUsers = (req, res) => {
  res.json(usersData);
};

const filterUsers = (req, res) => {
  const { gender, age } = req.query;

  //Manual Validation.
  /*
  if (age) {
    if (!Number(age)) {
      return res
        .status(422)
        .json({ message: "Age parameter should be a number" });
    }
    if (age >= 100 || age < 0) {
      return res.status(422).json({
        message: "Age out of bounds. It should be a number between 0 and 100",
      });
    }
  }

  if (gender && !["male", "female"].includes(gender.toLowerCase())) {
    return res
      .status(422)
      .json({ message: "Gender to search can either be 'male' or 'female'" });
  }
  */

  const result = getQueryErrors({ gender, age });
  // console.log(result.error);
  if (result.error) {
    return res.status(422).json(result.error);
  }

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
