const user = require('../Model/UserModel');

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await user.find();
    } catch (err) {
        console.log(err);
    }
    //Not found
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }
    //Display all users
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;