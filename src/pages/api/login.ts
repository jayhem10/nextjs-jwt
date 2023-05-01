import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = 'zefznfzeokfnzeoifjezfiz';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }
console.log(res)
  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username == "admin" && password === "admin",
      },
      KEY
    ),
  });
}
