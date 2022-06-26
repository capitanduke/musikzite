import express from 'express';
import User from '../models/userModel.js';
//import { getToken, isAuth } from '../util.js';

const router = express.Router();

router.get("/", async(req, res) => {

    try{
      const users = await User.find({});
      res.send(users);
    } catch(error){
      res.send({ msg: error.message})
    }

});

router.get("/createadmin", async (req, res) => {

    try{
        const user = new User({
            name: 'Raul',
            email: 'dukecapitan@gmail.com',
            password: '1234',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(newUser);

    } catch(error){
        res.send({ msg: error.message})
    }


});

export default router;