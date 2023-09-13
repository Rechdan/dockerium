import { NextApiHandler, NextApiRequest } from "next";

import { hash, verify } from "argon2";
import { sign } from "jsonwebtoken";
import { ValidationError } from "yup";

import db from "_/db";

import { loginValidator } from "_/validators";

const generateJwt = (id: string) => sign({ userId: id }, process.env["JWT_SECRET"] || "", { expiresIn: "1 day" });

export const execUserLogin = async (req: NextApiRequest) => {
  try {
    const { email, password } = await loginValidator.validate(req.body, { abortEarly: false });

    const user = await db.user.findFirst({ where: { email } });

    if (user && (await verify(user.password, password))) {
      return { jwt: generateJwt(user.id) };
    } else {
      const hasUsers = (await db.user.count()) > 0;

      if (!hasUsers) {
        const newUser = await db.user.create({
          data: {
            email,
            password: await hash(password),
            name: email,
          },
        });

        return { jwt: generateJwt(newUser.id) };
      }
    }

    return { error: "Email or password is invalid!" };
  } catch (error) {
    if (error instanceof ValidationError) {
      return { error: "Validation error." };
    } else {
      console.error("api/login", error);
      return { error: "Server error." };
    }
  }
};

const route: NextApiHandler = async (req, res) => {
  try {
    res.json(await execUserLogin(req));
  } catch {
    res.status(500).end();
  }
};

export default route;
