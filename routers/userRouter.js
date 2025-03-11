import express from "express";
import { getUserByEmail, insertUser } from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcryptjs.js";
import { signJWT } from "../utils/jwt.js";

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
    let msg = error.message;
    if (msg.includes("E11000 duplicate key error collection")) {
      msg =
        "There is already an account associated to this email id. Please try to login or use different email account to signup!";
    }
    res.json({
      status: "error",
      message: msg,
    });
  }
});

// User Login
router.post("/login", async (req, res, next) => {
  try {
    //1. recieve email and password
    const { email, password } = req.body;

    if (email && password) {
      //2. Find the uesr by email

      const user = await getUserByEmail(email);

      if (user?._id) {
        //3. match the increpeted password
        const isMatched = comparePassword(password, user.password);

        if (isMatched) {
          // the user actually authenticated

          //4. JWT and store the jwt in db then return the uer {} with jwt token

          const accessJWT = signJWT({ email });

          user.password = undefined; // ****** ****** because even in success we do not want to return password even in encryped form"

          res.json({
            status: "success",
            message: "Logged in successfully",
            user,
            accessJWT,
          });
          return;
        }
      }
    }

    res.status(401).json({
      error: "Invalid email or password",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

//User Profile

export default router;
