import { Request, Response } from "express";
import myResponse from "../../utils/Response";
import userModel from "./user.model";
import userRegister from "../../service/userRegister";

const signUp = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      password,
      role,
    }: { name: string; email: string; password: string; role: string } =
      req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json(
        myResponse({
          statusCode: 400,
          status: "failed",
          message: "All fields are required",
        })
      );
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json(
        myResponse({
          statusCode: 400,
          status: "failed",
          message: "User already exists",
        })
      );
    }
    const userCreate = await userRegister({ name, email, password, role });

    console.log(userCreate);

    res.status(200).json(
      myResponse({
        statusCode: 200,
        status: "success",
        message: "A verification email is sent to your email",
        data: userCreate,
      })
    );
  } catch (error) {
    console.error("Error in signUp controller:", error);
    res.status(500).json(
      myResponse({
        statusCode: 500,
        status: "failed",
        message: "Internal Server Error",
      })
    );
  }
};


export { signUp};