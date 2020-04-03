const path = require('path');
const bcrypt = require('bcryptjs');

const User = require(path.join(__dirname, '../models/user'))

module.exports = {
    createUser: async function({ userInput }, req) {
        const existingUser = await User.findOne({email: userInput.email});
        if (existingUser) {
            const error = new Error('User exists already.')
            throw error;
        }
        const hashedPw = await bcrypt.hash(userInput.email, 12);
        const user = new User({
            email: userInput.email,
            name: userInput.name,
            password: hashedPw
        });
        const createdUser = await user.save();
        return {...createdUser._doc, _id: createdUser._id.toString()};
    }
};
