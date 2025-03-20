import { getUserByEmail } from "../models/user/UserModel.js";
import { verifyJWT } from "../utils/jwt.js";

export const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);

    const result = verifyJWT(authorization);
    console.log(result);

    if (result?.email) {
      const user = await getUserByEmail(result.email);

      if (user?._id) {
        // user is authorized
        // store uesr info in the req headers
        user.password = undefined;
        req.userInfo = user;

        return next();
      }
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
