import { db } from "../../prisma/db";

export default async function handler(req, res) {
  try {
    const result = await db.blogs.findMany();
    return res.status(200).json({
      success: true,
      query: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
}
