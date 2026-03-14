const user = require('../Model/UserModel');

// Data Display
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

//insert data
const addUsers = async (req, res, next) => {
    const { name, email, age, address } = req.body;
    let users;
    try {
        users = new user({name, email, age, address });
        await users.save();
    } catch (err) {
        console.log(err);
    }
    //not insert users
    if (!users) {
        return res.status(400).json({ message: "Unable to add users" });
    }
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;