import type { NextApiRequest, NextApiResponse } from "next";
import apolloClient from "../../services/api/graphql/apollo-client";
import { gql } from "@apollo/client";

export default async function graphql(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //console.log(req.body);
  try {
    const { data } = await apolloClient.query({
      query: req.body.QUERY,
      variables: req.body.variables,
      context: {
        headers: {
          cookie: req.body.AUTH_SESSION_TOKEN,
        },
      },
    });
    //console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
