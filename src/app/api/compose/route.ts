/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// // import type { NextResponse, NextRequest } from "next/server";
// import axios from "axios";
// // import formidable from "formidable";
// // import FormData from "form-data";
// // import { fs } from "fs";
// import type { NextApiRequest, NextApiResponse } from "next";

// export const GET = async () => {
//   const url = `http://localhost:8080`;

//   const res = await fetch(url);
//   const message = await res.json();

//   return Response.json({ message });
// };

// // export async function POST(req: NextApiRequest, res: NextApiResponse) {
// //   const formData = new FormData();
// //   const form = formidable({ multiples: true });
// //   form.parse(req, async function (err, fields, files) {
// //     const image = files.image;
// //     const video = files.video;

// //     if (!image || !video) {
// //       throw new Error("Image or Video file not found");
// //     }
// //     formData.append("image", image[0]);
// //     formData.append("video", video[0]);
// //   });

// //   await axios
// //     .post(`http://localhost:8080/compose`, formData, {
// //       headers: {
// //         ...formData.getHeaders(),
// //       },
// //     })
// //     .then((response) => {
// //       if (response.status === 200) {
// //         res.status(200).json({ status: "OK" });
// //       } else if (response.status === 422) {
// //         res.status(422).json({ status: "NG" });
// //       }
// //     })
// //     .catch(() => {
// //       res.status(400).json({ status: "Error" });
// //     });
// // }

// export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
//   await axios
//     .post(`http://localhost:8080/compose`, req, { headers: { "Content-Type": req.headers["content-type"] as string } })
//     .then((response) => {
//       if (response.status === 200) {
//         res.status(200).json({ status: "OK" });
//       } else {
//         res.status(500).json({ status: "NG" });
//       }
//     });
// };

// import type { NextApiRequest } from "next";
// import formidable from "formidable";
// import fs from "fs";
import axios from "axios";
// import FormData from "form-data";

export const GET = async () => {
  const url = `http://localhost:8080`;

  const res = await fetch(url);
  const message = await res.json();

  return Response.json({ message });
};

// const parseForm = (req: NextApiRequest): Promise<{ fields: any; files: any }> => {
//   return new Promise((resolve, reject) => {
//     const form = formidable();
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve({ fields, files });
//       }
//     });
//   });
// };

export async function POST(req: Request) {
  try {
    // const { files } = await parseForm(req);
    // if (!files.image || !files.video) {
    //   return Response.json("image or video don't uploaded!");
    // }
    // console.log("files:", files);

    // const imagePath = fs.createReadStream(files.image[0]!.filepath);
    // const videoPath = fs.createReadStream(files.video[0]!.filepath);
    // console.log(imagePath, videoPath);
    // const formData = new FormData();
    // formData.append("image", imagePath, files.image[0].originalFileName);
    // formData.append("video", videoPath, files.video[0].originalFileName);
    const formData = await req.formData();

    const response = await axios.post(`http://localhost:8080/compose`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return Response.json(response);
  } catch (error: any) {
    console.error("Error uploading files:", error);

    return Response.json(error);
  }
}
