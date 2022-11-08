export default function handler(req, res) {
  res.status(200).json({
    success: true,
    request_data: req.headers,
    query: [
      {
        id: 1,
        username: "Agus",
      },
      {
        id: 2,
        username: "Suci",
      },
      {
        id: 3,
        username: "Cinta",
      },
    ],
  });
}
