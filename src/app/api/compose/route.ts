import type { NextApiResponse, NextApiRequest } from "next";
import axios from "axios";

export const GET = async () => {
  const url = `http://localhost:8080`;

  const res = await fetch(url);
  const message = await res.json();

  return Response.json({ message });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // const { image, video }: { image: File; video: File } = await request.json();
  // console.log(image, video);
  await axios
    .post(`http://localhost:8080`, req, {
      headers: req.headers,
    })
    .then((response) => {
      if (response.status === 200) {
        res.status(200).json({ status: "OK" });
      }
    });
}
