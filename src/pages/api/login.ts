import type { NextApiRequest, NextApiResponse } from "next";
import { AUTH_TOKEN } from "../../utils/constants/constants";
import axios from "axios";

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  await axios
    .post(
      "https://omni-tracking-web-staging.herokuapp.com/api/auth/callback/credentials?",
      {
        username: req.body.email,
        password: req.body.password,
        csrfToken: AUTH_TOKEN,
        callbackUrl: "",
        json: true,
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Cookie:
            "__Host-next-auth.csrf-token=9004886fc222fef4a88197c36eec2df80292c8eb3eaf73cdc0e64320cc13db1c|228ae4dec7534e5885d305af8c65a21a8d27c4a339bb2cf409b90be66ec97188; __Secure-next-auth.callback-url=https://omni-tracking-web-staging.herokuapp.com/en/admin/dashboard",
        },
      }
    )
    .then(async (resAPI) => {
      const cookie = resAPI.headers["set-cookie"];
      if (cookie) {
        return res.status(200).json({ logged: true, cookie });
      } else {
        return res.status(200).json({ logged: false });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(200).json({ logged: false });
    });
}
