import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcryptjs.js";

const router = express.Router();

// User Signup
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    //get the user obj
    // data verification

    //encrypt the password

    // const hashPass = hashPassword(req.body.password);
    req.body.password = hashPassword(req.body.password);

    //inert the user
    const user = await insertUser(req.body);

    ////
    user?._id
      ? res.json({
          status: "success",
          message: "Your account has been created, you may login now!",
        })
      : res.json({
          status: "error",
          message: "Error creating user, Please try again later.",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// User Login

//User Profile

export default router;
