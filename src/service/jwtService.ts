import { sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";
import config from "../config";
dotenv.config();

export type TokenData = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  role: string;
};

const secret = config.jwtAccessSecret as string;
if (!secret) throw new Error("JWT_SECRET is not defined");

export function generateToken({ id, name, email, image, role }: TokenData) {
  return sign({ id, name, email, image, role }, secret);
}

export function verifyToken(token: string) {
  try {
    return verify(token, secret) as TokenData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
