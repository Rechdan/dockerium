import { NextApiHandler, NextApiRequest } from "next";

import { verify } from "jsonwebtoken";

import db from "_/db";

export const execUserAuth = async (req: NextApiRequest) => {
  const headerJwt = req.headers.authorization;

  if (headerJwt) {
    try {
      const jwt = verify(headerJwt, process.env["JWT_SECRET"] || "");

      if (jwt && typeof jwt === "object" && "userId" in jwt) {
        const user = await db.user.findFirst({
          select: { email: true, name: true, updated: true, created: true },
          where: { id: jwt["userId"] },
        });

        if (user) {
          return { user };
        }
      }
    } catch {
      // invalid jwt
    }
  }

  return { jwt: null };
};

const route: NextApiHandler = async (req, res) => {
  try {
    res.json(await execUserAuth(req));
  } catch {
    res.status(500).end();
  }
};

export default route;
