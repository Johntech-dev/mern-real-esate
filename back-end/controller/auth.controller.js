import User from '../model/user.model.js'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User ({ username, email, password});
    try{
    await newUser.save()
   res.status(201).json("User created successfully")
    } catch (error) {
   res.status(501).json(error.message)
    }
};
